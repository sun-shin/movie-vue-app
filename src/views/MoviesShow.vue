<template>
  <div class="movies-show">
    <h1>Movie Info</h1>

    <h2>Title: {{ movie.title }}</h2><br>
    <p>Year Created: {{ movie.year }}</p><br>
    <p>Director: {{ movie.director }}</p><br>
    <p>English?: {{ movie.english }}</p><br>
    <p>Plot: {{ movie.plot }}</p><br>
  
  
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      movie: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id);
    axios.get(`/api/movies/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {}
};
</script>