# Dev Stack

Dev Stack is a simple and responsive web application where developers can explore different technologies and build their own technology stack.

## Description

Dev Stack provides a collection of technologies with useful information such as name, category, level, rating, and description.

Users can add technologies to their stack, remove individual technologies, or remove all selected technologies.

The website is designed to be responsive for mobile, medium, and large devices.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON
- Daisy UI

## Features

### 1. Explore Technologies

Users can see different technologies with their logo, name, category, level, rating, and description.

### 2. Add and Manage Your Stack

Users can add technologies to their stack. A technology cannot be added twice. Users can also remove a single technology or remove all technologies.

### 3. Responsive Design

The website is responsive and works properly on mobile, medium, and large devices.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML like code inside JS or TS. It makes React Components easier to write and understand.


---

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data inside a component that can change over time.


---

### 3. What does the useState hook do, and where did you use it in this project?

UseState is used to store and update data in  a React component.

I used it to manage selected technologies in my project.


---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?


Used effect is used to run a task after a component renders . I used it to load the technology data from the JSON file when the page loaded. 

---

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React understand which item has changed, been added, or been removed.



---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used conditional rendering to show an empty message when no technology is selected.

tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    ...
  </div>
)}

When the stack is empty, the user sees:

*Your stack is empty.*

When technologies are selected, the selected technologies are displayed.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent to a child component using props.

A child can send something back to the parent by calling a function that the parent passes to the child props.



## Project Highlights

- Clean and simple UI
- Responsive layout
- Technology stack management
- Toast notifications for user actions
- Loading state while data is loading

## Author

Dev Stack Project