# Learn React - REDUX!

## What is Redux

- A state management library that allows to have a GLOBAL state.
- Used when UI is complex where parts of UI must be in sync.
  \- Like if user changes data in 1 component, others must also reflect the changes. <br/>
- It stores all the states in a central repository called **Store**.

## NOT to use REDUX when:

- UI or Dataflow is simple
- Static Data
- Small to medium size Apps

## Concepts

### Store

- Redux app (global) state lives in an object called "Store".
- Usually made up of multiple 'Slices'.

### Actions

- A plain Javascript object.
- Like an event that describes something that happened in the application. <br />
  > **Example** <br/>
  > const todoAction = {type: 'TODO_ADDED', payload: 'Buy Milk'}. <br />

### Reducers

- A function that recieves the current `state` and `action` object, & update the
    state if necessary, and returns the new state.
- Like an event listener which handles events based on received action (event) type.
  > **RULES** <br />
  > • ONLY calculate new state value based on the state and action arguments. <br />
  > • MUST be "Pure" (No Async Logic, No random values, No current date or time, ...) <br />
- Reducers make a copy of that state (bc of Redux's Immutability) and make that make the changes <br/>
  to that copy of the state and then completely replace the state as a whole.

## Process

React Component --> Dispatch Action --> Actions sent to Store --> Store sends previous state <br />
and action to Reducer --> Reducer executes and returns new state to store --> store saves this state <br/> --> React Component Refreshes and Update Content.

## Setup

1. On a React Project, Enter the command `npm i @reduxjs/toolkit react-redux`

---

## Steps in Designing the Redux App

1. Design The Store - `state/index.ts`
2. Connect the store to React (React by default cannot talk directly to redux) - `main.tsx`
3. Create Slices - `state/*/index.ts`
4. Connect the (currently empty) Reducers to the store - `state/index.ts`
5. Define Reducers of slices - `state/*/index.ts`
6. Create the Actions - `state/*/index.ts`
7. Connect a react component to Redux - `components/Listing.tsx`
8. Declare the Redux Hooks to interact with the store - `components/Listing.tsx`
9. Import the Actions to be used - `components/Listing.tsx`
10. Dispatch Actions - `components/Listing.tsx`

### Other Topics

- Actions with Payload - `state/wishlist/index.tsx`
- Asyncronous Actions/Reducer (4 Steps) - `state/wishlist/index.tsx` and `components/Listing.tsx`

---

## Redux DevTools

- Install [Redux DevTools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en "Redux DevTools")
