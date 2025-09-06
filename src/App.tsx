import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/actions"


export default function App() {
  const count = useSelector((state: { descreption: string; isDone: string; id: number }) => state.descreption);
  const dispach = useDispatch();

  const data: { descreption: string; isDone: string; id: number } =

  {
    descreption: "first task ",
    isDone: "not-Done",
    id: 1,
  }
    ;







  return (
    <>
      <p>{count}</p>
      <input value={data.descreption} type=" text" onChange={(e) => data.descreption = e.target.value} placeholder="descreption" />
      <input value={data.isDone} type=" text" onChange={(e) => data.isDone = e.target.value} placeholder="status" />
      <input value={data.id} type=" number" onChange={(e) => data.id = e.target.value as unknown as number} placeholder="id" />


      <button onClick={() => { console.log(count); dispach(increment(data.descreption,data.isDone,data.id)) }}> add task</button>

    </>
  )
}

