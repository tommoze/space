import data from "../../helpers/data";

const normalized = data.destinations.reduce(
  (acc, cur) => ({
    ids: [...acc.ids, cur.name],
    byId: {
      ...acc.byId,
      [cur.name]: cur,
    },
  }),
  { ids: [], byId: {} }
);

const initialState = {
  ...normalized,
  activeDestination: normalized.ids[0],
};

export const destinationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DESTINATION_PICK":
      return { ...state, activeDestination: payload };

    default:
      return state;
  }
};
