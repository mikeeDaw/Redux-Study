import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishState {
    list: string[]
}

const initialState: WishState = {
    list: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        // For Creating a Reducer with a payload for 'updating' values in state.
        // Since typescript, declare the type of 'action' with PayloadAction and its data type.
        // Can also be `PayloadAction<{val:'wish 1', desc: 'PC'}>` depending on the passed data.
        addWish: (state, action: PayloadAction<string>) => {
            state.list.push(action.payload);
        }
    },
    // (Step 2 of Async Action) Async Reducers goes here
    extraReducers: (builder) => {
        // 'builder' is a tool to add cases to these reducers

        // 1st param: - Kinda like a condition/event to trigger the created case.
        //            - In this case, its saying to execute the reducer (2nd arg) once the async
        //              completed with no errors.
        //   NOTE: 'createAsyncThunk' gives access to fullfilled, pending, and error states
        //          in relation to the current promise status.
        // 2nd param: - the reducer to execute.
        builder
        .addCase(AsyncAddWish.fulfilled, (state, action: PayloadAction<string>) => {
            console.log("Adding wish fullfilled!")
            state.list.push(action.payload)
        })

        // Another case for 'pending'
        .addCase(AsyncAddWish.pending, () => {
            console.log("AsyncAddWish is Processing...")
        })
    }
})


/* Asyncronous Action */
// Like when you need to fetch data from an API.

// (Step 1 of Async Action) First, Create the Thunk.
// Thunk - allows to perform async logic
// • 1st param: name of action type. slice name, "/", then the function name.
//   NOTE: • Redux Toolkit auto-names the action types based on the reducers. The syntax goes
//           `[slice name]/[reducer identifier]`.
//         • Redux toolkit dont auto-name thunks so we name it ourselves.    
// • 2nd param: the async function to execute.
export const AsyncAddWish = createAsyncThunk(
    "wishlist/AsyncAddWish",
    async(item: string) => {
        await new Promise((resolve) => setTimeout(resolve,1000))
        return item
    }
)


export const {addWish} = wishlistSlice.actions

export default wishlistSlice.reducer