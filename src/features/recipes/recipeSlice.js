import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (searchTerm) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=10&apiKey=YOUR_API_KEY`
    );
    const data = await response.json();
    return data.results;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
