<template>
  <NavBar />
  <Homepage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import Homepage from '../components/Homepage.vue';

export default defineComponent({

  beforeCreate: function() {
        document.body.className = 'home';
  },

  name: 'HomeView',

  components: {
    NavBar,
    Homepage,
  },
});
</script>

<style lang="scss">
 .v-main {
  background-color: #2F2D2E;
  color: white;
 }
</style>
