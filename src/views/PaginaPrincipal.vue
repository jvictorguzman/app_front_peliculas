<template>
  <div>
    <section class="gallery-block cards-gallery">
      <div class="container">
        <div class="heading">
          <h2>Peliculas</h2>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="input-group mb-3">
                <input
                  id="filter"
                  v-model="filter"
                  type="text"
                  class="form-control"
                  placeholder="Buscar película"
                  aria-label="Buscar película"
                  aria-describedby="button-addon2"
                />
                <button id="button-addon2" class="btn btn-outline-secondary" type="button">Buscar</button>
              </div>
            </div>
          </div>
        </div>

        <PeliculaListado
          :peliculas="filteredPeliculas"
          :current-page="currentPage"
          :items-per-page="itemsPerPage"
          @add-to-favorites="addToFavoritos"
        ></PeliculaListado>
        <div>
          <button :disabled="currentPage === 1" class="btn btn-warning" @click="prevPage">Anterior</button>
          <span>{{ currentPage }}</span>
          <button :disabled="currentPage === totalPages" class="btn btn-warning" @click="nextPage">Siguiente</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import PeliculaListado from '../components/PeliculaListado.vue';
import { Pelicula } from '../models/Pelicula.model';
import { usePeliculaStore } from '../store/index';

const peliculaStore = usePeliculaStore();

const filter = ref('');
const currentPage = ref(1);
const itemsPerPage = 6;

onMounted(async () => {
  await peliculaStore.fetchPeliculas();
});

const filteredPeliculas = computed(() => {
  return peliculaStore.peliculas.filter((pelicula) =>
    pelicula.Title.toLowerCase().includes(filter.value.toLowerCase()),
  );
});

const totalPages = computed(() => Math.ceil(filteredPeliculas.value.length / itemsPerPage));

const prevPage = (): void => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = (): void => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const addToFavoritos = (pelicula: Pelicula): void => {
  peliculaStore.addToFavoritos(pelicula);
};
</script>

<style scoped></style>
