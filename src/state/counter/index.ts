// Slice files contains anything related to the slice. (actions and reducers of the slice).

import { createSlice } from "@reduxjs/toolkit"

// Since this is typescript, define the slice typing.
interface CounterState {
    countVal: number
    // can have other props depending on the data
}

// Define the Initial state using the type created.
const initialState: CounterState = {
    countVal: 0,
}

// Create the Actual Slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Define Reducers here:

        // Reducers can take 2 args
        // • state - which is the current (to be changed / old) state.
        // • action - (optional) The action which triggered the reducer.
        // Reducers return the newly 'updated' state.

        // Reducer to increment the value of countVal.
        increment : (state) => {
            // This seems to be MUTATING the state which is against redux concepts, but
            // it is not bc we're using `createSlice` from redux toolkit and it is doing 
            // the magic for us.
            state.countVal += 1
        },
        // Reducer to decrement value of countVal
        decrement : (state) => {
            state.countVal -= 1
        },


    }
});


// These are the Actions are generated for each reducer functions.
export const {increment, decrement} = counterSlice.actions

// Using `CreateSlice` from redux toolkit eliminates boilerplate to make reducers accessible
// and be easily exported.
// Add the reducers of each slices to the "Store" file.
export default counterSlice.reducer




