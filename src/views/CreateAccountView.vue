<template>
  <v-sheet rounded width="400" min-height="600" class="pa-6 mx-auto">
 <div class="d-flex justify-center">
  <RouterLink to="/">
    <v-img width="80" height="80" src="../assets/logo-poply.svg">
  </v-img>
</RouterLink>
 
</div>
<h2 class="d-flex justify-center pa-2"> Create Account</h2>
    <v-form ref="form">
      <v-text-field
        v-model="nickname"
        id="nicknamefield"
        :counter="18"
        :rules="nicknameRules"
        label="Nickname"
        required
        :clearable="true"
      ></v-text-field>

      <v-text-field
        v-model="email"
        id="emailfield"
        :rules="emailRules"
        label="E-mail address"
        required
        :clearable="true"
      ></v-text-field>

      <v-text-field
        v-model="password"
        id="passwordfield"
        type="password"
        :counter="25"
        :rules="passwordRules"
        label="Password (8-25 characters)"
        required
        :clearable="true"
      ></v-text-field>

      <v-text-field
        v-model="confirmpassword"
        id="confirmpasswordfield"
        type="password"
        :counter="25"
        :rules="confirmpasswordRules" 
        label="Confirm Password"
        required
        :clearable="true"
      ></v-text-field>
      
  <div class="text-center">
    <v-btn
      
    >Avatar Selection
      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text>
<v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
        v-for="(avatarurl, i) in avatarsurl"
        :key="i"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ isSelected, toggle }">
            <v-card
              :color="isSelected ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="100"
              @click="toggle"
            >
            <v-img :src="require(`../assets/${avatarurl.src}`)" max-width="100"></v-img>
              <v-scroll-y-transition>
                <div
                  class="text-h6 flex-grow-1 text-center"
                >
                  {{ isSelected ? 'Selected' : 'Click the avatar'}}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
    </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
    

      <v-checkbox
        v-model="checkbox"
        id="rulescheckbox"
        color="success"
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
      text: 'Choose your avatar',
      dialog: false,
      valid: true,
      nickname: '',
      nicknameRules: [
        v => !!v || 'Nickname is required',
        v => (v && v.length <= 18 && v.length>=4) || 'Nickname must be less between 3-18 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail address is required',
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
      select: '',
      avatarsurl: [
       {
        src:   'avatar_01.svg'
       },

       {
        src:   'avatar_02.svg'
       },

       {
        src:   'avatar_03.svg'
       },

       {
        src:    'avatar_04.svg'
       },

       {
        src:    'avatar_05.svg'
       }
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

<style lang="scss" scoped>

.v-text-field :deep(.input) {
    font-size: 0.9em;
}

.v-text-field :deep(.label) {
    font-size: 0.9em;
}

.v-text-field :deep(.button) {
    font-size: 0.9em;
}

.v-select :deep(.button) {
    font-size: 0.9em;
}
</style>