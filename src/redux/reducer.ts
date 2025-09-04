const initialState = {
  count: 10,
};

export default function counterReducer(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count+1 };

    case 'DECREMENT':
      return { count: state.count-1 };

    default:
      return state;
  }
}
