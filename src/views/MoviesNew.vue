<template>
  <div class="movies-new">
    <form v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label> 
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Year Created:</label>
        <input type="text" class="form-control" v-model="year">
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input type="text" class="form-control" v-model="director">
      </div>
      <div class="form-group">
        <label>English?:</label>
        <input type="boolean" class="form-control" v-model="english">
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="plot">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      year: "",
      director: "",
      english: "",
      plot: "",
      errors: []
    };
  },
  methods: {
    createMovie: function() {
      var params = {
        title: this.title,
        year: this.year,
        director: this.director,
        english: this.english,
        plot: this.plot,
        
      };
      axios
        .post("/api/movies", params)
        .then(response => {
          this.$router.push("/movies");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
