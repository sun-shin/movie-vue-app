<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/movies">Movies</router-link> |
      <router-link to="/movies/new">New Movie</router-link> |
      <span v-if="!loggedIn()">
        <router-link to="/signup">Signup</router-link> 
      </span>
      <span v-if="!loggedIn()">
        <router-link to="/login">Login</router-link> 
      </span>
      <span v-if="loggedIn()">
        <router-link to="/logout">Logout</router-link> 
      </span>
      
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      flashMessage: "",
    };
  },
  created: function() {},
  methods: {
    loggedIn: function() {
      return localStorage.getItem("jwt");
    },
  }
};
</script>
