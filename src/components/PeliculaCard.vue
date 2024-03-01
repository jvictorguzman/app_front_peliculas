<template>
  <div class="col-md-6 col-lg-4">
    <div class="card border-0 transform-on-hover">
      <a class="lightbox" href="../img/image1.jpg">
        <img :src="props.pelicula?.Poster" class="card-img-top" :alt="props.pelicula?.Title" />
      </a>
      <div class="card-body">
        <h6>
          <a href="#">{{ props.pelicula?.Title }}</a>
        </h6>
        <p class="text-muted card-text">{{ props.pelicula?.Year }} - {{ props.pelicula?.Type }}</p>
        <button class="btn btn-primary" @click="addToFavorites">Agregar a Favoritos</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pelicula } from '../models/Pelicula.model';
const props = defineProps<{
  pelicula?: Pelicula;
}>();

async function addToFavorites(): Promise<string | undefined> {
  return props.pelicula?.Title;
}
</script>

<style scoped></style>
