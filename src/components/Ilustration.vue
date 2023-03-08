<template>
    <div class="chat-ilu"><img :src="ilustrationchat"></div>
    <h2>Ilustration</h2>
</template>

<script>
export default {
  data(){
    return {
      ilustrationchat: require("../assets/chatting-image.svg"),
    }
  },
};
</script>

<style>
    .chat-ilu img {
        height: 19rem;
    }
</style>