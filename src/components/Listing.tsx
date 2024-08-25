// These hooks from 'react-redux' let React components interact with Redux store.
import { useDispatch, useSelector } from "react-redux";

// Since im using typescript, use this typing for 'useSelector'.
import { AppDispatch, RootState } from "../state";

// Import the Actions to be dispatched.
import { decrement, increment } from "../state/counter";
// (Step 3 of Async Actions) Import the thunk.
import { addWish, AsyncAddWish } from "../state/wishlist";

// UI Imports
import MathBtn from "./MathBtn";
import Wishlist from "./Wishlist";
import { useState } from "react";

const Listing = () => {
  // Read Data from store using `useSelector`.
  // Pass a 'selector' function to select part of redux's store state.
  // The selector function I created simply returns the value of the selected slice.
  const count = useSelector((state: RootState) => state.counter.countVal);
  const wishlist = useSelector((state: RootState) => state.wishlist.list);
  // NOTE: Even though 'count' acts like a react state, you cant use it as a dependency in a 'useEffect'.

  // Since React can't directly talk to Redux, we have to manually use these hooks
  // to dispatch actions.
  // Typescript, so add the 'AppDispatch' type.
  const dispatch = useDispatch<AppDispatch>();

  // React State for getting the wish.
  const [wishEntry, setWishEntry] = useState<string>("");

  /* Action With Parameter for Dispatching */
  // On Click function to add a string to the 'Wishlist' slice
  const onSubmitWish = () => {
    // Since we defined a payload in the reducer, the `addWish` wants a (payload: string) argument.
    if (wishEntry !== "") {
      dispatch(addWish(wishEntry));
      setWishEntry("");
    } else {
      console.log("no input yet.");
    }
  };

  const asyncSubmitWish = () => {
    if (wishEntry !== "") {
      dispatch(AsyncAddWish(wishEntry));
      setWishEntry("");
    } else {
      console.log("no input yet.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-10 w-1/3">
        <div className="flex justify-center items-center flex-col w-full relative gap-3">
          {wishlist.length == 0 ? (
            <p className="text-white text-3xl font-bold cursor-default">
              Hallo
            </p>
          ) : (
            wishlist.map((item, idx) => (
              <Wishlist text={item} key={`wish${idx + 24}`} />
            ))
          )}

          <div className="absolute right-0 bottom-0 text-white flex justify-center flex-col">
            <p className="text-xs text-[#c3c3c3]">Counter</p>
            {
              // I can use the value here just like using 'useState' by React.
              // Once a store is updated via dispatch and reducers, the component subscribed to
              // it by a 'useSelector' will trigger a re-render.
            }
            <p className="text-[#c3c3c3]">{count}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <input
            type="text"
            className="px-3 py-2 rounded-xl text-base bg-[#191919] border border-[#c3c3c3] text-[#c3c3c3] placeholder:text-[#757575] text-center"
            name="Desc"
            id="Desc"
            placeholder="What do you want?"
            value={wishEntry}
            onChange={(e) => setWishEntry(e.target.value)}
          />
          <div className="w-full flex gap-2">
            {
              // To dispatch an action, import first the created action to call and put
              // it inside the 'dispatch' function.
              // NOTE: the actions are somehow a function so add parenthesis.
            }
            <MathBtn value="-" handleClick={() => dispatch(decrement())} />
            <button
              className="text-white w-9/12 bg-[#006d22] py-2 px-5 rounded-xl border border-transparent transition-all duration-150 text-sm hover:text-[#006d22] hover:bg-[#191919] hover:border-[#006d22]"
              onClick={onSubmitWish}
            >
              This Is It
            </button>
            <MathBtn value="+" handleClick={() => dispatch(increment())} />
          </div>
          <button
            className="text-white w-full bg-[#00551e] py-2 px-5 rounded-xl border border-transparent transition-all duration-150 text-sm hover:text-[#006d22] hover:bg-[#191919] hover:border-[#00551e]"
            onClick={asyncSubmitWish}
          >
            Add It Later...
          </button>
        </div>
      </div>
    </>
  );
};

export default Listing;
