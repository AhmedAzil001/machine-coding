# Dynamic Accordian 
- user can open one accordian at a time and the rest will be closed

# Controlled Component 
- a component whose rendering is dependent on parent
- Accordian.jsx is a controlled component 

# Lifitng the state up
- when a diff state is given to multiple element or component it becomes difficult to change the state of 2 or more component at the same time 
- To solve this we use lifting up the state concept where parents controls the state of each component
- Here the App is controlling the Accordian and giting it a isActive state to all components but for selected component its true and for rest its false, in this way at the same time we change the state of multiple components which is not possible if we have a diff state for each component that is at a time only state of component can be changed.
- its is possible to have a above by giving diff state to all component but it will become complicated and result in multiple re-render which slows down our app.
