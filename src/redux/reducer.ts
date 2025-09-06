import { legacy_createStore as createStore } from "redux";


const initialState = [
  {
    descreption: "first task ",
    isDone: "not-Done",
    id: 1,
  },
];

export default function counterReducer(
  state = initialState,
  action: {
    type: string;
    payload: { descreption: string; isDone: string; id: number };
  }
) {
  switch (action.type) {
    case "ADD":
      return { tasks: state.push(action.payload) };

    case "DELETE":
      return {
        tasks: state.filter(
          (task) =>
            task.descreption == action.payload.descreption &&
            task.id == action.payload.id &&
            task.isDone == action.payload.isDone
        ),
      };

    default:
      return state;
  }
}
