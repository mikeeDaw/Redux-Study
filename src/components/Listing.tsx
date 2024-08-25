// These hooks from 'react-redux' let React components interact with Redux store.
import { useDispatch, useSelector } from "react-redux";

// Since im using typescript, use this typing for 'useSelector'.
import { RootState } from "../state";

// Import the Actions to be dispatched.
import { decrement, increment } from "../state/counter";

// UI Imports
import MathBtn from "./MathBtn";

const Listing = () => {
  // Read Data from store using `useSelector`.
  // Pass a 'selector' function to select part of redux's store state.
  // The selector function I created simply returns the value of the selected slice.
  const count = useSelector((state: RootState) => state.counter.countVal);
  // NOTE: Even though 'count' acts like a react state, you cant use it as a dependency in a 'useEffect'.

  // Since React can't directly talk to Redux, we have to manually use these hooks
  // to dispatch actions.
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-10 w-1/3">
        <div className="w-full text-center relative">
          <p className="text-white text-3xl font-bold cursor-default">Hallo</p>
          <div className="absolute right-0 top-0 text-white flex justify-center flex-col">
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
          />
          <div className="w-full flex gap-2">
            {
              // To dispatch an action, import first the created action to call and put
              // it inside the 'dispatch' function.
              // NOTE: the actions are somehow a function so add parenthesis.
            }
            <MathBtn value="-" handleClick={() => dispatch(decrement())} />
            <button className="text-white w-9/12 bg-[#006d22] py-2 px-5 rounded-xl border border-transparent transition-all duration-150 text-sm hover:text-[#006d22] hover:bg-[#191919] hover:border-[#006d22]">
              This Is It
            </button>
            <MathBtn value="+" handleClick={() => dispatch(increment())} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
