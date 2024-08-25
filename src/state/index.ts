import { configureStore } from "@reduxjs/toolkit"; // Allows to create the Store

// Importing the Reducers of the slices.
import counterReducer from "./counter"

const store = configureStore({
    // Put the slice reducers here.
    reducer: {
        counter: counterReducer,
    }
})

// • (Since im using typescript) Extract the types of `RootState` (of store) and `dispatch`
//    so they can be referenced as needed.
// • In any react component, when we are going to access a state using a selector,
//   we can define the state using this type. 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// For more reference of the exports: https://react-redux.js.org/using-react-redux/usage-with-typescript

export default store
