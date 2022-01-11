
const initialState = "Douglas Hurley";

export const crewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREW_PICK":
      return { ...state, crew: action.payload };
    default:
      return state
  }
}