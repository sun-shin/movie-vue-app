<template>
<div class="wrapper row3">
    <section class="hoc container clear"> 
      
      <div class="sectiontitle">
        <h6 class="heading">Movies List</h6>
      </div>

      <div>Search by title: <input type="text" v-model="titleFilter" /></div><br>
      <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')">
        <div class="group latest">
        <article class="one_half first">
          <div class="excerpt">
            <h6 class="heading">Title: {{ movie.title }}</h6>
            <p>Year Created: {{ movie.year }}</p>
            <p>Director: {{ movie.director }}</p>
            <p>English?: {{ movie.english }}</p>
            <p>Plot: {{ movie.plot }}&hellip;</p>
            <router-link :to="`/movies/${movie.id}`">More Info</router-link>
          </div>
        </article>
        </div>
      </div>
        
      <footer class="center"><a class="btn" href="#">View More Posts &raquo;</a></footer>
      
    </section>
  </div>
  <!-- <div class="home">
    <h1>Come see our Movies!</h1>
    <div>Search by title: <input type="text" v-model="titleFilter" /></div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')">
       <h2>Title: {{ movie.title }}</h2><br>
      <p>Year Created: {{ movie.year }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>English?: {{ movie.english }}</p>
      <p>Plot: {{ movie.plot }}</p><br>
      <router-link :to="`/movies/${movie.id}`">More Info</router-link>
    </div>
    
  </div> -->
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