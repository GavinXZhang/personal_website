# React Hooks Fix Guide: Understanding and Solving the Rules of Hooks Violation

**For Junior Developers** 🎓

This document explains a critical React bug we fixed in our Contact page, why it happened, how we fixed it, and the important lessons you need to know about React Hooks.

---

## Table of Contents
1. [What Was the Problem?](#what-was-the-problem)
2. [Why Is This a Problem?](#why-is-this-a-problem)
3. [Understanding React Hooks](#understanding-react-hooks)
4. [The Rules of Hooks](#the-rules-of-hooks)
5. [The Fix Explained](#the-fix-explained)
6. [Common Mistakes & How to Avoid Them](#common-mistakes--how-to-avoid-them)
7. [Best Practices](#best-practices)
8. [Testing Your Understanding](#testing-your-understanding)

---

## What Was the Problem?

### The Buggy Code (BEFORE)

```tsx
// ❌ WRONG - This violates the Rules of Hooks
export default function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // Early return BEFORE calling the hook
  if (!formspreeId) {
    return <div>Error: Form ID missing</div>;
  }

  // ⚠️ PROBLEM: Hook called AFTER conditional return
  const [state, handleSubmit] = useForm(formspreeId);

  // ... rest of component
}
```

### The Error Message

When running ESLint, we got:

```
React Hook "useForm" is called conditionally.
React Hooks must be called in the exact same order in every component render.
react-hooks/rules-of-hooks
```

### Why Did This Fail Code Review?

1. **ESLint caught it** - Our automated linting tool flagged this as an error
2. **Potential runtime crashes** - This can cause React to crash in production
3. **Unpredictable behavior** - The component might work sometimes and break other times
4. **Interview red flag** - This mistake shows lack of understanding of React fundamentals

---

## Why Is This a Problem?

### How React Hooks Work Under the Hood

React uses **hook call order** to keep track of component state. Think of it like a numbered list:

```tsx
function MyComponent() {
  const [name, setName] = useState('');       // Hook #1
  const [email, setEmail] = useState('');     // Hook #2
  const [message, setMessage] = useState(''); // Hook #3
}
```

**First render:**
```
React's internal memory:
Position 1: name state  = ''
Position 2: email state = ''
Position 3: message state = ''
```

**Second render (re-render):**
```
React expects:
Position 1: name state  (matches ✅)
Position 2: email state (matches ✅)
Position 3: message state (matches ✅)
```

### What Happens with Conditional Hooks?

```tsx
// ❌ BAD: Conditional hook call
function BadComponent() {
  const [name, setName] = useState('');

  if (someCondition) {
    return <div>Early return</div>;
  }

  const [email, setEmail] = useState(''); // Sometimes called, sometimes not!
}
```

**First render (someCondition = false):**
```
React's memory:
Position 1: name state
Position 2: email state
```

**Second render (someCondition = true):**
```
React's memory:
Position 1: name state
Position 2: ??? (React expects email, but hook never called!)
```

**Result:** 💥 **React crashes or behaves unpredictably!**

### Real-World Analogy

Imagine you go to a restaurant every day:

**Consistent Order (Good):**
```
Day 1: Coffee, Sandwich, Cookie
Day 2: Coffee, Sandwich, Cookie
Day 3: Coffee, Sandwich, Cookie
```
The waiter knows what to expect!

**Inconsistent Order (Bad - Like Conditional Hooks):**
```
Day 1: Coffee, Sandwich, Cookie
Day 2: Coffee (leave before ordering sandwich!)
Day 3: Coffee, Sandwich, Cookie
```
The waiter is confused! They expected sandwich but you left!

---

## Understanding React Hooks

### What Are Hooks?

Hooks are special React functions that let you "hook into" React features:

```tsx
import { useState, useEffect, useContext } from 'react';

// State Hook - remember values between renders
const [count, setCount] = useState(0);

// Effect Hook - perform side effects (API calls, subscriptions, etc.)
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// Context Hook - access React context
const theme = useContext(ThemeContext);
```

### Common Hooks

| Hook | Purpose | Example |
|------|---------|---------|
| `useState` | Remember values between renders | `const [name, setName] = useState('')` |
| `useEffect` | Run side effects | `useEffect(() => { fetch('/api') }, [])` |
| `useContext` | Access context values | `const user = useContext(UserContext)` |
| `useRef` | Reference DOM elements or mutable values | `const inputRef = useRef(null)` |
| `useCallback` | Memoize functions | `const handleClick = useCallback(() => {}, [])` |
| `useMemo` | Memoize expensive calculations | `const result = useMemo(() => expensive(), [])` |

### Custom Hooks

You can also use **custom hooks** (like `useForm` from Formspree):

```tsx
import { useForm } from '@formspree/react';

const [state, handleSubmit] = useForm('formId');
// This is just a hook like useState!
// It follows the same rules!
```

---

## The Rules of Hooks

### Rule #1: Only Call Hooks at the Top Level

**✅ GOOD:**
```tsx
function MyComponent() {
  const [name, setName] = useState('');     // ✅ Top level
  const [email, setEmail] = useState('');   // ✅ Top level

  if (someCondition) {
    return <div>Early</div>;                // ✅ OK to return after hooks
  }

  return <div>Normal</div>;
}
```

**❌ BAD:**
```tsx
function MyComponent() {
  if (someCondition) {
    const [name, setName] = useState('');   // ❌ Inside condition
  }

  for (let i = 0; i < 5; i++) {
    const [item, setItem] = useState('');   // ❌ Inside loop
  }

  return <div>Content</div>;
}
```

### Rule #2: Only Call Hooks from React Functions

**✅ GOOD:**
```tsx
// From React function components
function MyComponent() {
  const [state, setState] = useState('');   // ✅ Component
}

// From custom hooks
function useCustomHook() {
  const [state, setState] = useState('');   // ✅ Custom hook
}
```

**❌ BAD:**
```tsx
// From regular JavaScript functions
function regularFunction() {
  const [state, setState] = useState('');   // ❌ Not a React function
}

// From class components
class MyComponent extends React.Component {
  render() {
    const [state, setState] = useState(''); // ❌ Class component
  }
}
```

### Why These Rules Exist

React relies on the **order of hook calls** to:
1. Keep track of which piece of state belongs to which hook
2. Preserve state between re-renders
3. Trigger effects in the correct order
4. Maintain component consistency

---

## The Fix Explained

### Side-by-Side Comparison

**❌ BEFORE (Buggy Code):**
```tsx
export default function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // Early return happens sometimes
  if (!formspreeId) {
    return <div>Error</div>;  // ← Hook never called on this path!
  }

  // Hook only called sometimes (PROBLEM!)
  const [state, handleSubmit] = useForm(formspreeId);

  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Execution Paths:**
```
Path A (formspreeId exists):
  1. Get formspreeId ✅
  2. Check condition (false) ✅
  3. Call useForm hook ✅
  4. Return form ✅

Path B (formspreeId missing):
  1. Get formspreeId ✅
  2. Check condition (true) ✅
  3. Return error ✅
  4. ❌ Hook never called! (Different number of hooks!)
```

**✅ AFTER (Fixed Code):**
```tsx
export default function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  // ✅ Call hook at top level ALWAYS
  const [state, handleSubmit] = useForm(formspreeId || 'dummy-id');

  // Now safe to return early
  if (!formspreeId) {
    return <div>Error</div>;
  }

  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Execution Paths:**
```
Path A (formspreeId exists):
  1. Get formspreeId ✅
  2. Call useForm with real ID ✅
  3. Check condition (false) ✅
  4. Return form ✅

Path B (formspreeId missing):
  1. Get formspreeId ✅
  2. Call useForm with 'dummy-id' ✅
  3. Check condition (true) ✅
  4. Return error ✅

Both paths call the same number of hooks in the same order! ✅
```

### Key Changes

1. **Moved hook call to top** - Before any conditional returns
2. **Used fallback value** - `formspreeId || 'dummy-id'` ensures hook always has a value
3. **Added explanatory comments** - Help future developers understand the fix

### Why the Dummy ID Works

**Question:** "Won't passing 'dummy-id' cause errors?"

**Answer:** No! Here's why:

```tsx
const [state, handleSubmit] = useForm(formspreeId || 'dummy-id');

if (!formspreeId) {
  // We return BEFORE using the form
  // The dummy hook is initialized but never actually used
  return <div>Error</div>;
}

// Only reach here if formspreeId exists
// So we're only using the real form when we have a valid ID
return <form onSubmit={handleSubmit}>...</form>;
```

**Alternative Solutions:**

```tsx
// Option 1: Always pass undefined
const [state, handleSubmit] = useForm(formspreeId || undefined);

// Option 2: Use optional chaining (if supported by library)
const [state, handleSubmit] = useForm(formspreeId);

// Option 3: Use a constant as placeholder
const PLACEHOLDER_ID = 'placeholder';
const [state, handleSubmit] = useForm(formspreeId || PLACEHOLDER_ID);
```

---

## Common Mistakes & How to Avoid Them

### Mistake #1: Hooks Inside Conditions

```tsx
// ❌ WRONG
function Component() {
  if (isLoggedIn) {
    const [user, setUser] = useState(null);
  }
}

// ✅ CORRECT
function Component() {
  const [user, setUser] = useState(null);

  if (!isLoggedIn) {
    return <Login />;
  }

  return <Dashboard user={user} />;
}
```

### Mistake #2: Hooks Inside Loops

```tsx
// ❌ WRONG
function Component({ items }) {
  for (const item of items) {
    const [value, setValue] = useState(item);
  }
}

// ✅ CORRECT
function Component({ items }) {
  // Store all items in one state
  const [values, setValues] = useState(items);

  // Or use individual components
  return items.map(item => <ItemComponent key={item.id} item={item} />);
}
```

### Mistake #3: Hooks Inside Callbacks

```tsx
// ❌ WRONG
function Component() {
  const handleClick = () => {
    const [clicked, setClicked] = useState(false);
  };
}

// ✅ CORRECT
function Component() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
}
```

### Mistake #4: Hooks After Early Returns

```tsx
// ❌ WRONG
function Component({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const [expanded, setExpanded] = useState(false); // Called conditionally!
}

// ✅ CORRECT
function Component({ data }) {
  const [expanded, setExpanded] = useState(false); // Always called!

  if (!data) {
    return <div>Loading...</div>;
  }
}
```

---

## Best Practices

### 1. Always Initialize Hooks at the Top

```tsx
function MyComponent() {
  // ✅ All hooks at the very top
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  // Then all your logic
  const isValid = name && email;

  // Then conditional returns
  if (loading) {
    return <Spinner />;
  }

  // Then main return
  return <form>...</form>;
}
```

### 2. Use ESLint Plugin

Install and configure the React Hooks ESLint plugin:

```json
// .eslintrc.json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

This will **automatically catch** hooks violations!

### 3. Name Custom Hooks Properly

Custom hooks MUST start with "use":

```tsx
// ✅ CORRECT
function useFormValidation() {
  const [errors, setErrors] = useState({});
  return { errors, setErrors };
}

// ❌ WRONG - ESLint won't check rules of hooks!
function formValidation() {
  const [errors, setErrors] = useState({});
  return { errors, setErrors };
}
```

### 4. Extract Conditional Logic to Components

Instead of conditional hooks, use conditional rendering:

```tsx
// ❌ AVOID
function Dashboard() {
  if (!user) {
    return <Login />;
  }

  const [data, setData] = useState(null);
  // ...
}

// ✅ BETTER
function Dashboard() {
  if (!user) {
    return <Login />;
  }

  return <LoggedInDashboard />;
}

function LoggedInDashboard() {
  const [data, setData] = useState(null);
  // All hooks in separate component
}
```

---

## Testing Your Understanding

### Quiz Time! 🎯

**Question 1:** Is this code valid?

```tsx
function Component() {
  const [count, setCount] = useState(0);

  if (count > 10) {
    return <div>Too high!</div>;
  }

  return <div>{count}</div>;
}
```

<details>
<summary>Click to see answer</summary>

**✅ YES** - The hook is called before the conditional return. All execution paths call the same hooks in the same order.
</details>

---

**Question 2:** Is this code valid?

```tsx
function Component({ showExtra }) {
  const [name, setName] = useState('');

  if (showExtra) {
    const [extra, setExtra] = useState('');
  }

  return <div>{name}</div>;
}
```

<details>
<summary>Click to see answer</summary>

**❌ NO** - The `extra` hook is called conditionally. When `showExtra` is false, only one hook is called. When true, two hooks are called. This violates the Rules of Hooks.

**Fix:**
```tsx
function Component({ showExtra }) {
  const [name, setName] = useState('');
  const [extra, setExtra] = useState('');  // Always call

  return (
    <div>
      {name}
      {showExtra && extra}  // Conditionally render instead
    </div>
  );
}
```
</details>

---

**Question 3:** Is this code valid?

```tsx
function Component() {
  const items = [1, 2, 3];

  const states = items.map(item => {
    return useState(item);
  });

  return <div>...</div>;
}
```

<details>
<summary>Click to see answer</summary>

**❌ NO** - Hooks are called inside a loop (map). The number of hooks would change if the array length changes.

**Fix:**
```tsx
function Component() {
  const items = [1, 2, 3];

  // Store all items in one state
  const [itemStates, setItemStates] = useState(items);

  return <div>...</div>;
}

// Or use separate components
function Component() {
  const items = [1, 2, 3];

  return items.map(item => (
    <ItemComponent key={item} value={item} />
  ));
}

function ItemComponent({ value }) {
  const [state, setState] = useState(value);  // Each component has its own hook
  return <div>{state}</div>;
}
```
</details>

---

## Summary: The Golden Rules

1. **Always call hooks at the top level** - Never inside conditions, loops, or nested functions
2. **Call hooks in the same order every render** - React relies on hook call order
3. **Use ESLint to catch violations** - Automate hook rule checking
4. **Name custom hooks with "use" prefix** - Required for ESLint to work
5. **Move conditional logic after hooks** - Hooks first, then conditions

### Checklist for Every Component

```tsx
function MyComponent() {
  // ✅ 1. All hooks at the top
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');
  const customHookValue = useCustomHook();

  // ✅ 2. Then calculate derived values
  const isValid = state1 && state2;

  // ✅ 3. Then conditional logic
  if (!isValid) {
    return <Error />;
  }

  // ✅ 4. Finally, main return
  return <div>...</div>;
}
```

---

## Additional Resources

### Official Documentation
- [React Hooks Rules](https://react.dev/reference/rules/rules-of-hooks)
- [Hooks API Reference](https://react.dev/reference/react)
- [ESLint Plugin React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

### Practice Exercises
1. Review all components in this project for hooks violations
2. Try refactoring a class component to hooks
3. Create custom hooks following the rules

### Common Interview Questions
- "What are the Rules of Hooks and why do they exist?"
- "What happens if you call a hook conditionally?"
- "How does React keep track of hooks between renders?"

---

**Remember:** Understanding the Rules of Hooks is fundamental to React development. Take your time to practice and internalize these concepts!

---

**Document created by:** Claude Code
**Date:** November 18, 2025
**Last updated:** November 18, 2025
**Related files:** `src/pages/Contact.tsx`, `CLAUDE.md`
