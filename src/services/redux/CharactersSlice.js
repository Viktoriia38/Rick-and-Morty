import { createSlice } from '@reduxjs/toolkit';
import { getCharactersRequest, getUnitRequest } from './CharacterOperations';

const charactersSlice = createSlice({
  name: 'characters',

  initialState: {
    characters: {
      listCharacters: [],
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterCharacters(state, action) {
      state.filter = action.payload;
      console.log(action.payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCharactersRequest.pending, state => {})
      .addCase(getCharactersRequest.fulfilled, (state, action) => {
        state.error = null;
        state.characters.listCharacters = [...action.payload];
      })
      .addCase(getCharactersRequest.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getUnitRequest.pending, state => {})
      .addCase(getUnitRequest.fulfilled, (state, action) => {
        state.error = null;
        state.characters.listCharacters = { ...action.payload };
      })
      .addCase(getUnitRequest.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const charactersReducer = charactersSlice.reducer;

export const { filterCharacters } = charactersSlice.actions;
