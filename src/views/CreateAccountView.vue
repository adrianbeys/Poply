<template>
  <v-sheet rounded width="400" min-height="600" class="pa-6 mx-auto">
 <div class="d-flex justify-center ma-2">
  <RouterLink to="/">
    <v-img width="100" height="100" src="../assets/logo-poply.svg">
  </v-img>
</RouterLink>
 
</div>
<h1 class="d-flex justify-center ma-2"> Create Account</h1>
    <v-form ref="form">
      <v-text-field
        v-model="nickname"
        id="nicknamefield"
        :counter="18"
        :rules="nicknameRules"
        label="Nickname"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        id="passwordfield"
        type="password"
        :counter="25"
        :rules="passwordRules"
        label="Password (8-25 characters)"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmpassword"
        id="confirmpasswordfield"
        type="password"
        :counter="25"
        :rules="confirmpasswordRules" 
        label="Confirm Password"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        id="avatarslist"
        :avatars="avatars"
        :rules="[v => !!v || 'Choose your avatar!']"
        label="Avatar"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        id="rulescheckbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I agree to the rules of Poply service"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
          color="success"
          class="mt-4"
          block
          @click="validate"
        >
          Sign Up
        </v-btn>

        <v-btn
          color="error"
          class="mt-4"
          block
          @click="reset"
        >
          Clear fields
        </v-btn>

      </div>
    </v-form>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      nickname: '',
      nicknameRules: [
        v => !!v || 'Nickname is required',
        v => (v && v.length <= 18 && v.length>=4) || 'Nickname must be less between 3-18 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /(?=.*[A-Z])/.test(v) || 'Password must contain at least one uppercase character',
        v => /(?=.*\d)/.test(v) || 'Password must contain at least one number',
        v => /([!@$%])/.test(v) || 'Password must contain at least one special character [!@#$%]',
        v => (v && v.length <= 25 && v.length>=8) || 'Password must be between 8-25 characters.',
      ],
      confirmpassword: '',
      confirmpasswordRules: [
      v => !!v || 'Confirm your password',
      v => v === passwordfield.value || 'Password must match',
      ],
      select: null,
      avatars: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Form is valid')
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>