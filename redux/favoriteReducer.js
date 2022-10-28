import { createSlice } from "@reduxjs/toolkit";

const favoriteReducer = createSlice({
	name: "favorite",
	initialState: { ids: [] },
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.id);
		},

		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const addFavorite = favoriteReducer.actions.addFavorite;
export const removeFavorite = favoriteReducer.actions.removeFavorite;
export default favoriteReducer.reducer;
