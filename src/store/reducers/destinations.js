import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import data from "../../helpers/data";

const adapter = createEntityAdapter({
  selectId: (entity) => entity.name,
});

const initialState = adapter.setAll({}, data.destinations);

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    ...initialState,
    active: initialState.ids[0],
  },
  reducers: {
    setActive: (state, { payload }) => {
      state.active = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActive } = destinationsSlice.actions;

const select = (state) => state.destinations;
export const selectActive = (state) => select(state).active;
export const { selectIds, selectEntities, selectById } =
  adapter.getSelectors(select);

export default destinationsSlice.reducer;
