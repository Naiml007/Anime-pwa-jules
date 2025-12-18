import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  popular: [],
  searchResults: [],
  selectedAnime: null,
  status: 'idle',
  error: null,
};

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    // Reducers will be added here
  },
  extraReducers: (builder) => {
    // Extra reducers for async actions will be added here
  },
});

export default animeSlice.reducer;
