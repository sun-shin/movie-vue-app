<template>
  <div class="home">
    <h1>Come see our Movies!</h1>
    <div>Search by title: <input type="text" v-model="titleFilter" /></div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')">
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
      titleFilter: '',
      attribute: "title",
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