<template>
  <main>
    <v-navigation-drawer theme="dark" expand-on-hover rail mini-variant permanent class="d-flex fill-height">
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="usertest"
          subtitle="example@email.com"></v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-message-text" title="Chat" value="chat"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-logout" class="posbottom text-red" title="Log out" value="logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <ChatBox></ChatBox>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import ChatBox from '../components/ChatBox.vue';

export default defineComponent({
  beforeCreate: function () {
    document.body.className = 'chatbox';
  },
  name: 'ChatView',
  components: {
    ChatBox,
  },
});
</script>
