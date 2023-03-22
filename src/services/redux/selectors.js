import { createSelector } from '@reduxjs/toolkit';

export const selectCharacters = state =>
  state.characters.characters.listCharacters;

export const selectFilter = state => state.characters.filter;

export const selectFilterCharacters = createSelector(
  [selectCharacters, selectFilter],
  (characters, filter) =>
    characters.filter(character =>
      character.name.toLowerCase().trim().includes(filter.toLowerCase())
    )
);
