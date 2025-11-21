# Bugfix: Infinite Loop in AnimatedGridPattern

**Date:** November 20, 2025
**Component:** `src/components/magicui/animated-grid-pattern.tsx`
**Issue:** Dev server hung on startup, preventing the site from loading

---

## The Problem

The dev server would start (`npm run dev`) but hang indefinitely without displaying the URL or serving the site. This was caused by an **infinite loop** in the `AnimatedGridPattern` component's React hooks.

## Root Cause

The component had a circular dependency in its `useEffect`:

```tsx
// BEFORE (Broken):
const [squares, setSquares] = useState(() => generateSquares(numSquares));

function generateSquares(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: getPos(),
  }));
}

useEffect(() => {
  if (dimensions.width && dimensions.height) {
    setSquares(generateSquares(numSquares));
  }
}, [dimensions, numSquares]); // Problem: 'dimensions' changes → triggers generateSquares → changes squares → triggers re-render → infinite loop
```

**Why it looped:**
1. `dimensions` changes when ResizeObserver fires
2. `useEffect` runs with `dimensions` as dependency
3. Calls `generateSquares()` → updates `squares` state
4. Component re-renders
5. Functions are redeclared with new references
6. Repeat infinitely

## The Fix

**Changed dependencies to primitive values:**

```tsx
// AFTER (Fixed):
const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([]);

useEffect(() => {
  if (dimensions.width && dimensions.height) {
    setSquares(generateSquares(numSquares));
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dimensions.width, dimensions.height, numSquares]); // Only depend on primitives
```

**Also fixed ResizeObserver cleanup:**

```tsx
// Store ref value to avoid stale closure
const currentRef = containerRef.current;
if (currentRef) {
  resizeObserver.observe(currentRef);
}

return () => {
  if (currentRef) { // Use stored value, not ref.current
    resizeObserver.unobserve(currentRef);
  }
};
```

## Result

✅ Dev server now starts successfully
✅ Site loads on http://localhost:5177/
✅ AnimatedGridPattern renders without infinite re-renders
✅ All MagicUI animations work as expected
