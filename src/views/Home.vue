<template>
  <div class="bgded" style="background-image:url('images/demo/backgrounds/movies-background.jpeg');">
    <div id="pageintro" class="hoc clear"> 
      
      <article>
        <h3 class="heading">Movie-App</h3>
        <p>Come Look At All Of Our Movies!</p>
        <footer><router-link to="/movies">Movies Index</router-link></footer>
      </article>
      
    </div>
  </div>
  <!-- <div class="home">
    <h1>{{ message }}</h1>
    Title: <input type="text" v-model="newMovietitle"><br>
    Year Created: <input type="text" v-model="newMovieyear"><br>
    Plot: <input type="text" v-model="newMovieplot" ><br>
    Director: <input type="text" v-model="newMoviedirector" ><br>
    English?: <input type="text" v-model="newMovieenglish" ><br>
    <button v-on:click="createMovie()">New Movie</button>

    <div v-for="movie in movies">
      <h2>Title: {{ movie.title }}</h2><br>
      <p>Year Created: {{ movie.year }}</p><br>
      <p>Director: {{ movie.director }}</p><br>
      <p>English?: {{ movie.english }}</p><br>
      <p>Plot: {{ movie.plot }}</p><br>
      <button v-on:click="showMovie(movie)">More Info</button>
    </div>

    <dialog id="movie-details">
      <form action="dialog">
        <h2>Movie Info</h2>
        <p>Title: <input type="text" v-model="currentMovie.title"></p>
        <p>Year Created: <input type="text" v-model="currentMovie.year"></p>
        <p>Director: <input type="text" v-model="currentMovie.director"></p>
        <p>English?: <input type="text" v-model="currentMovie.english"></p>
        <p>Plot: <input type="text" v-model="currentMovie.plot"></p>
        <button v-on:click="updateMovie(currentMovie)">Update Movie</button>
        <button v-on:click="destroyMovie(currentMovie)">Delete Movie</button>
        <button>Close</button>
      </form>
    </dialog>

  </div> -->
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Come look at our Movies!",
      movies: [],
      newMovietitle: "",
      newMovieyear: "",
      newMovieplot: "",
      newMoviedirector: "",
      newMovieenglish: "",
      currentMovie: {}
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
    },
    createMovie: function() {
      var params = {
        title: this.newMovietitle,
        year: this.newMovieyear,
        director: this.newMoviedirector,
        english: this.newMovieenglish,
        plot: this.newMovieplot
      };
      axios.post("/api/movies").then(response => {
        console.log(response.data);
        this.movies.push(response.data);
      });
    },
    showMovie: function (movie) {
      console.log(movie.title);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      var params = {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        english: movie.english,
        plot: movie.plot
      };
      axios.patch(`/api/movies/${movie.id}`, params).then(response => {
        console.log(response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete(`/api/movies/${movie.id}`).then(response => { 
        console.log(response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  }
};
</script>