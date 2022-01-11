

const initialState = "Moon";


export const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DESTINATION_PICK":
      return { ...state, destination: action.payload };

    default:
      return state
  }
}