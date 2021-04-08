import { createSlice } from '@reduxjs/toolkit';
import api from '../api';
import { setFavs } from './roomsSlice';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.id = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form);
    if (id && token) {
      dispatch(logIn({ id, token }));
    }
  } catch (e) {
    alert('Wrong user/password');
  }
};

export const getFavs = () => async (dispatch, getState) => {
  const {
    usersReducer: { id },
  } = getState();
  try {
    const { data } = await api.favs(id);
    dispatch(setFavs(data));
  } catch (error) {
    console.warn(error);
  }
};

export const toggleFavs = (roomId) => async (dispatch, getState) => {
  const {
    usersReducer: { id, token },
  } = getState();
  try {
    const { status } = await api.toggleFavs(id, roomId, token);
    console.log(status);
  } catch (error) {
    console.warn(error);
  }
};

export default userSlice.reducer;
