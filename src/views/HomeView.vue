<template>
  <v-app-bar app color="#2E4057">
    <div class="logo-navbar"><Router-Link to="/"><img :src="logonav"></Router-Link></div>
    <v-spacer></v-spacer>
    <v-tabs v-model="tab" bg-color="#FFFFFF0" color="white">
      <Router-link to="/"><v-tab value="one"><v-icon>mdi-home</v-icon>&nbsp;Home</v-tab></Router-link>
      <Router-link to="/about"><v-tab value="two"><v-icon>mdi-book</v-icon>&nbsp;About</v-tab></Router-link>
      <Router-link to="/create-account"><v-tab value="three"><v-icon>mdi-account-circle</v-icon>&nbsp;Create
          Account</v-tab></Router-link>
    </v-tabs>
  </v-app-bar>

  <main>
    <Homepage />
  </main>

  <RouterView />
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import Homepage from '../components/Homepage.vue';

export default defineComponent({
  beforeCreate: function () {
    document.body.className = 'home';
  },
  name: 'HomeView',
  data() {
    return {
      logonav: require("../assets/poply-navbar.png"),
    }
  },
  components: {
    Homepage,
  },
});
</script>

<style lang="scss">
.v-main {
  background-color: #2F2D2E;
  color: white;
}

.chatting-img img {
  height: 19rem;
}

.v-toolbar-title__placeholder {
  width: 100px;
}

.nav-title {
  color: white;
  cursor: pointer;
  font-weight: 700;
  width: 100px;
}

.logo-navbar {
  align-items: center;
}

.logo-navbar img {
  height: 3.8rem;
  margin-left: 1rem;
  margin-top: 0.4rem;
}

.v-toolbar__content>.v-toolbar-title {
  margin-left: 0;
}

Router-link a,
a:link {
  text-decoration: none;
  color: black;
}

Router-link a:hover,
a:active {
  color: white;
}</style>
