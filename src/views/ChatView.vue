<template>

      <v-navigation-drawer
      theme="dark"
        expand-on-hover
        rail
        mini-variant
        permanent
        class="d-flex fill-height"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="usertest"
            subtitle="example@email.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <v-list-item-group>
          <v-list-item prepend-icon="mdi-message-text" title="Chat" value="chat"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings"></v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>
          <v-list-item-group class="posbottom">
          <v-list-item prepend-icon="mdi-logout" title="Log out" value="logout"></v-list-item>
          </v-list-item-group>
        
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <div class="d-flex justify-center ma-4 pa-4">
    <v-sheet rounded width="500" min-height="500" class="pa-4 mx-auto">
   <div class="d-flex justify-center ma-2">
    <RouterLink to="/">
      <v-img width="50" height="50" src="../assets/logo-poply.svg">
    </v-img>
  </RouterLink>
   
  </div>
</v-sheet>
</div></v-main>
  </template>

  <style>
.posbottom
{
position: fixed;
bottom: 0;
margin-bottom: 10px;
width: 94%;
}

</style>