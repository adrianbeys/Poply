<template>
  <NavBar />
  <!-- <Homepage /> -->
  <div class="chatting-img"><img :src="chatilu"></div>
</template>

<script>
import { defineComponent } from 'vue';

import NavBar from '../components/NavBar.vue';
// import Homepage from '../components/Homepage.vue';

export default defineComponent({

  beforeCreate: function() {
        document.body.className = 'home';
  },

  name: 'HomeView',
  data(){
    return {
      chatilu: require("../assets/chatting-image.svg"),
    }
  },

  components: {
    NavBar,
    // Homepage,
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
</style>
