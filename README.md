**DevStack** 

**Project Description**

DevStack is a simple React application where users can explore different technologies.
Users can select technologies from the available list,view selected stack and also removed technologies when need. 



**Technologies Used**

~ React
~ TypeScript
~ Vite
~ Tailwind CSS
~ Daisy UI
~ React Toastify
~ JSON


***Features***

1. Browse Technologies :
   Users can view different technologies.

2. Add Technologies Stack :
   Users can select technology and add it.

3. Remove Technologies :
   Users can  select technologies stack and also removed their own willing.



**React Question and Answer**

1. What is JSX, and why is it used in React ?
   JSX is a way to write HTML like code inside JS or TS.It makes React components easier to write and understand.

2. What is the difference between props and state ?
   Props are used to pass data from parent to child component.State is a store where data is managed inside a component

3. What does the useState hook do, and where did you use it in this project?
   UseState is used to store and update data in a React component. I used it to manage  selected technologies in my project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   UseEffect is used to run a task after a component renders. I used it to load the technology data from the JSON file when the page loaded.

5. Why does every item in a .map() list need a unique key prop?
   A unique key helps React identify each item in a list. It helps React update the list correctly and efficiently.

6. What is conditional rendering? Show one place you used it?
   Conditional rendering means showing something based on a condition.
   For example, I used it to show an empty stack message when there are no selected technologies.

   {selectedTechnologies.length === 0 && (
   <p>Your stack is empty</p>
   )}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   Data is passed from a parent component to a child component by using props.
   A child can send something back to the parent by calling a function that the parent passes to the child  props.
  
