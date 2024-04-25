export const INITIAL_STATE = {
  owner: "",
  pet: "",
  date: "",
  time: "",
  notes: "",
  show: false

};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "TOGGLE":
      return {
        show: !state.show,
      };
    default:
      return state;
  }
};
