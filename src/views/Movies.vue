<template>
  <div class="home">
    <h1>Come see our Movies!</h1>

    <div v-for="movie in movies">
       <h2>Title: {{ movie.title }}</h2><br>
      <p>Year Created: {{ movie.year }}</p><br>
      <p>Director: {{ movie.director }}</p><br>
      <p>English?: {{ movie.english }}</p><br>
      <p>Plot: {{ movie.plot }}</p><br>
      <router-link :to="`/movies/${movie.id}`">More Info</router-link>
    </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movies: [],
    };
  },
  created: function() {
    this.indexMovies();
  },
  methods: {
    indexMovies: function() {
      axios.get("/api/movies").then(response => {
        console.log(response.data);
        this.movies = response.data;
      });
    }
  }
};
</script>