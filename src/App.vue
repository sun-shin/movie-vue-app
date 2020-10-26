<template>
  <div id="app">
    <header id="header" class="hoc clear">
      <section> 
        <div>
          <h1 id="logo"><router-link to="/movies">Movie-App</router-link></h1>
        </div>
      </section>
      <nav id="mainav"> 
      
      <ul class="clear">
        <li><router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/movies">Movies List</router-link>
        </li>
        <li><router-link to="/movies/new">New Movie</router-link>
        </li>
        <li v-if="!loggedIn()">
          <router-link to="/signup">Signup</router-link> 
        </li>
        <li v-if="!loggedIn()">
          <router-link to="/login">Login</router-link> 
        </li>
        <li v-if="loggedIn()">
          <router-link to="/logout">Logout</router-link> 
        </li>
      </ul>
      </nav>
      
    </header>

    <router-view/>

    <div class="wrapper row4">
      <footer id="footer" class="hoc clear"> 
    <div class="one_quarter first">
      <h6 class="heading">Contact Information</h6>
      <ul class="nospace btmspace-30 linklist contact">
        <li><i class="fa fa-map-marker"></i>
          <address>
          Street Name &amp; Number, Town, Postcode/Zip
          </address>
        </li>
        <li><i class="fa fa-phone"></i> (123)123-1234</li>
        <li><i class="fa fa-envelope-o"></i> sun@movies.com</li>
      </ul>
      <ul class="faico clear">
        <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a class="faicon-dribble" href="#"><i class="fa fa-dribbble"></i></a></li>
        <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
    <div class="one_quarter">
      <h6 class="heading">Elit eros imperdiet</h6>
      <ul class="nospace linklist">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/movies">Movies List</router-link></li>
        <li v-if="!loggedIn()">
          <router-link to="/signup">Signup</router-link> 
        </li>
        <li v-if="!loggedIn()">
          <router-link to="/login">Login</router-link> 
        </li>
        <li v-if="loggedIn()">
          <router-link to="/logout">Logout</router-link> 
        </li>
      </ul>
    </div>
   
  </footer>
    </div>
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
