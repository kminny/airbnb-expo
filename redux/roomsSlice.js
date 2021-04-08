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

      if (payload.page === 1) {
        state.explore.rooms = payload.rooms;
        state.explore.page = 1;
      } else {
        payload.rooms.forEach((payloadRoom) => {
          const exists = explore.rooms.find((savedRoom) => savedRoom.id === payloadRoom.id);
          if (!exists) {
            explore.rooms.push(payloadRoom);
          }
        });
      }
    },
    setFavs(state, action) {
      state.favs = action.payload;
    },
  },
});

export const { increasePage, setExploreRooms, setFavs } = roomsSlice.actions;

export const getRooms = (page) => async (dispatch, getState) => {
  const {
    usersReducer: { token },
  } = getState();
  try {
    const {
      data: { results },
    } = await api.rooms(page, token);
    dispatch(
      setExploreRooms({
        rooms: results,
        page,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomsSlice.reducer;
