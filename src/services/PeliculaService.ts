import axios from 'axios';
import { Pelicula } from '../models/Pelicula.model';

const API_URL2 = 'https://www.omdbapi.com/?apikey=1a6cd522&s=batman';
// const API_URL = 'https://www.omdbapi.com/?apikey=1a6cd522&s=';

export const getPeliculas = async (): Promise<Pelicula[]> => {
  try {
    const response = await axios.get(`${API_URL2}`);

    return response.data.Search;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
