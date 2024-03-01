<template>
  <div class="row">
    <PeliculaCard v-for="pelicula in currentPeliculas" :key="pelicula.imdbID" :pelicula="pelicula"></PeliculaCard>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Pelicula } from '../models/Pelicula.model';
import PeliculaCard from './PeliculaCard.vue';
const props = defineProps<{
  peliculas?: Pelicula[];
  currentPage: number;
  itemsPerPage: number;
}>();

const currentPeliculas = computed(() => {
  const startIndex = (props.currentPage - 1) * props.itemsPerPage;
  const endIndex = startIndex + props.itemsPerPage;
  return props.peliculas?.slice(startIndex, endIndex);
});
</script>

<style scoped></style>
