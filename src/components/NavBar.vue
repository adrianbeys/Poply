<template>
  
    <v-app-bar color="#2E4057" app>
      <div class="logo-navbar"><img :src="logonav"></div>
      <v-toolbar-title class="nav-title">Poply</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" bg-color="#FFFFFF0" color="white">
        <v-tab value="one" to="/"><v-icon>mdi-home</v-icon>&nbsp;Home</v-tab>
        <v-tab value="two"><Router-link to="/about"><v-icon>mdi-book</v-icon>&nbsp;About</Router-link></v-tab>
        <v-tab value="three"><v-icon>mdi-account-circle</v-icon>&nbsp;Create Account</v-tab>
      </v-tabs>
    </v-app-bar>
    
    <!-- <v-content>
      <router-view></router-view>
    </v-content> -->
    
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      logonav: require("../assets/logo-poply.svg"),
      sidebar: false,
    }
  },
};
</script>
<style>
  .nav-title {
    color: white;
    cursor: pointer;
    font-weight: 700;
  }
  .logo-navbar img {
    height: 4rem;
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
  .v-toolbar__content > .v-toolbar-title {
    margin-left: 0;
  }
</style>
