# 🧼 Clean Code, Optimal Code & Readable Code – Best Practices for Next.js Projects

This document outlines the essential guidelines and reminders to maintain clean, optimal, and readable code within a **Next.js** (TypeScript) codebase. Adhering to these principles helps improve maintainability, scalability, and team collaboration.

---

## ✅ General Principles

- **Keep files concise**: Limit files to **under 100 lines**. If a file grows too large, consider:
  - Creating **custom hooks** to extract logic
  - **Splitting components** into smaller ones

- **Reusability**:
  - Extract reusable logic into **hooks** or **utility functions**
  - Avoid code duplication
  - Identify common styles and **create shared components** mapped via **constants**

- **Type Safety**:
  - Use **TypeScript** everywhere
  - Define types clearly for props, state, and function parameters
  - Use `interface` or `type` depending on the use case

---

## 📁 Folder Structure & Organization

Structure your project for clarity and scalability:

/components
/button
index.tsx
styles.ts
types.ts (or interface.ts)
constants.ts
utils.ts (if needed)
/pages
/hooks
/utils
/styles
/context

- **Component-specific** files (`types`, `styles`, `constants`) should reside within the respective component folder
- Shared logic goes inside `/utils` or `/hooks`
- Use **React Context** to avoid **prop drilling**

---

## 🧩 Component & Hook Design

### In `.tsx` files, follow this order:

1. **State declarations**
2. **Functions and handlers**
3. **`useEffect` hooks**
4. **JSX return block**

Example:

```tsx
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return (
    <div onClick={handleClick}>
      Count: {count}
    </div>
  );
};
