import {useSelector , useDispatch} from "react-redux";
import {increment, decrement} from "./redux/actions"


export default function App() {
  const count = useSelector((state:{count:number}) => state.count);
  const dispach = useDispatch();
  
  return (
    <>
     <p>{count}</p>
    <button onClick={()=>{console.log(count); dispach(increment())}}> +</button>
      <button onClick={()=>dispach(decrement())}>-</button>
    </>
  )
}

 