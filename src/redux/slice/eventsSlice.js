import { createSlice } from "@reduxjs/toolkit";
import { getAllEvent } from "../../service/api";

let initialState = {
  events: [],
  selectedEvent: {},
  errors: "",
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    populateEvents(state, action) {
      state.events = action.payload;
    },
    selectEvent(state, action) {
      state.selectedEvent = action.payload;
    },
    unselectEvent(state) {
      state.selectedEvent = null;
    },
    deleteEventReducer: (state, action) => {
      const payload = action.payload;
      state.events = state.events.filter(
        (eventItem) => eventItem.id !== payload
      );
    },
    updateEventReducer: (state, action) => {
      const payload = action.payload;
      const index = state.events.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.events[index] = payload;
      }
    },
    addEventReducer: (state, action) => {
      const payload = action.payload;
      state.events.push(payload);
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});
export const fetchEvents = () => async (dispatch) => {
  try {
    const eventsResult = await getAllEvent();
    dispatch(populateEvents(eventsResult.data));
    dispatch(setErrors(null));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
export const selectEvents = (state) => {
  return [state.events.events, state.events.errors];
};
export const selectSelectedEvent = (state) => {
  return state.events.selectedEvent;
};
export const {
  populateEvents,
  selectEvent,
  unselectEvent,
  setErrors,
  deleteEventReducer,
  updateEventReducer,
  addEventReducer,
} = eventsSlice.actions;
export default eventsSlice.reducer;
