import { getPeliculas } from '../services/PeliculaService';
import { Pelicula } from './../models/Pelicula.model';
import { defineStore } from 'pinia';

export const usePeliculaStore = defineStore({
  id: 'pelicula',
  state: () => ({
    peliculas: [] as Pelicula[],
    favoritos: [] as Pelicula[],
  }),
  actions: {
    async fetchPeliculas() {
      if (this.peliculas.length === 0) {
        try {
          const peliculas = await getPeliculas();

          this.peliculas = peliculas;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
    },
    addToFavoritos(pelicula: Pelicula) {
      this.favoritos.push(pelicula);
    },
  },
});
