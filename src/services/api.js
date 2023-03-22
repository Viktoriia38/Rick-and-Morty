import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const listCharactersFetch = async () => {
  const { data } = await axios.get(`${BASE_URL}`);
  return data.results;
};

export const descriptionCharacterFetch = async id => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};
