import { createAsyncThunk } from '@reduxjs/toolkit';
import { descriptionCharacterFetch, listCharactersFetch } from 'services/api';

export const getCharactersRequest = createAsyncThunk(
  'characters/getCharacters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await listCharactersFetch();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUnitRequest = createAsyncThunk(
  'unit/getUnit',
  async (characterId, { rejectWithValue }) => {
    try {
      const response = await descriptionCharacterFetch(characterId);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
