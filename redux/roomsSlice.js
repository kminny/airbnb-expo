import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    increasePage(state, action) {
      state.explore.page += 1;
    },
    setExploreRooms(state, action) {
      const { explore } = state;
      const { payload } = action;

      payload.rooms.forEach((payloadRoom) => {
        const exists = explore.rooms.find((savedRoom) => savedRoom.id === payloadRoom.id);
        if (!exists) {
          explore.rooms.push(payloadRoom);
        }
      });
    },
  },
});

export const { increasePage, setExploreRooms } = roomsSlice.actions;

export const getRooms = (page) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(page);
    dispatch(
      setExploreRooms({
        rooms: results,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
