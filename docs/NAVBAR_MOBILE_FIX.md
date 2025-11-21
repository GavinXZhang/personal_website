# Navbar Mobile Overlay Fix

**Issue:** Desktop navigation links overlapping "Gavin Zhang" logo on mobile screens
**Fix Duration:** 5 minutes
**Status:** ✅ RESOLVED

---

## Problem

On mobile devices (<768px), the navbar displayed overlapping text:
- "Gavin Zhang" logo overlaid "Home" link
- Desktop navigation links (Home, About, Projects, Contact, Resume) visible
- Social icons appearing when they should be hidden
- Only hamburger menu should be visible on mobile

---

## Root Cause

**Conflicting CSS:**
```tsx
// BROKEN CODE
<div style={{
  display: 'flex',  // ❌ This overrides Tailwind
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  gap: '2rem'
}}
className="hidden md:flex">  // Tailwind class ignored
```

The inline `display: 'flex'` style has higher specificity than Tailwind's `hidden` class, causing the desktop nav to always show regardless of screen size.

---

## Solution

**Remove inline display property, let Tailwind control visibility:**
```tsx
// FIXED CODE
<div
  className="hidden md:flex"  // ✅ Now works correctly
  style={{
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    gap: '2rem'
  }}
>
```

**Key Changes:**
1. Moved `className` before `style` attribute
2. Removed `display: 'flex'` from inline styles
3. Let Tailwind `hidden md:flex` handle visibility logic

---

## How Tailwind Classes Work

- `hidden` = `display: none` (mobile default)
- `md:flex` = `display: flex` at ≥768px (tablet/desktop)
- Inline styles override class styles unless removed

---

## Verification

**Before Fix:**
- Desktop nav visible on mobile
- Text overlapping "Gavin Zhang"

**After Fix:**
- Clean mobile navbar: Logo (left) + Hamburger (right)
- Desktop nav hidden on mobile
- Appears correctly on desktop (≥768px)

---

## Lesson Learned

**Always prioritize Tailwind utility classes over inline styles for responsive behavior.** Inline styles should only be used for properties Tailwind doesn't control (like `transform`, `position`), never for `display` when using responsive classes.

**Files Modified:** `src/components/Navbar.tsx` (lines 90-97, 160-162)
**Testing:** Verified on iPhone SE (375px) and iPhone 12 Pro Max (414px)
