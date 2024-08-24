#### Learn REDUX!

### What is Redux

- A state management library that allows to have a GLOBAL state.
- Used when UI is complex where parts of UI must be in sync. <br/>
    \- Like if user changes data in 1 component, others must also reflect the changes. <br/>
- It stores all the states in a central repository called **Store**.

### NOT to use REDUX when:

- UI or Dataflow is simple <br/>
- Static Data<br/>
- Small to medium size Apps<br/>

### Terminologies

### Concepts

# Store

- Redux app (global) state lives in an object called "Store". <br />
- Usually made up of multiple 'Slices'. <br />

# Actions

- A plain Javascript object.
- Like an event that describes something that happened in the application. <br />
  > **Example** <br/>
  > const todoAction = {type: 'TODO_ADDED', payload: 'Buy Milk'}. <br />

# Reducers

- A function that recieves the current `state` and `action` object, & update the <br>
    state if necessary, and returns the new state.
- Like an event listener which handles events based on received action (event) type.
  > **RULES** <br />
  >
  > - ONLY calculate new state value based on the state and action arguments. <br />
  > - MUST be "Pure" (No Async Logic, No random values, No current date or time, ...) <br />

### Process

React Component -> Dispactch Action -> Actions sent to Store -> Store sends previous state <br />
and action to Reducer -> Reducer executes and returns new state to store -> store saves this state <br/> -> React Component Refreshes and Update Content

---

### Steps in Designing the Redux App

1. Design The Store
2. Define the Action
3. Create a Reducer
4. Set Up the Store
