import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import counterSlice,{increment,decrement} from "./counterSlice";

function CountView(){
    const counter=useSelector(state=>state.counter.counter)
const dispatch=useDispatch();
    return(
        <div>
          <p>{counter}</p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>

    )
}
export default CountView