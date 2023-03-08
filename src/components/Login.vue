<template>
    <h2>Login component</h2>
    <v-form ref="form">

      <v-text-field
        id="emailfield"
        label="E-mail address"
        required
        :clearable="true"
      ></v-text-field>

      <v-text-field
        id="passwordfield"
        type="password"
        :counter="25"
        label="Password"
        required
        :clearable="true"
      ></v-text-field>

      

      <div class="d-flex flex-column">
        <v-btn
          color="success"
          class="mt-4"
          block
        >
          Log In
        </v-btn>

      </div>
    </v-form>
</template>