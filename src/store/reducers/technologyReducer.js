const initialState = "Launch vehicle";


export const technologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TECHNOLOGY_PICK':
      return { ...state, technology: action.payload };

    default:
      return state
  }
}