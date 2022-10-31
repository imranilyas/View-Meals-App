import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "favorite",
	initialState: { ids: [] },
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.id);
			console.log(state.ids);
		},

		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
			console.log(state.ids);
		},
	},
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
