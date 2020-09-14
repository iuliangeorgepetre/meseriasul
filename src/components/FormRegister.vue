<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

        <v-text-field
      v-model="username"
      :counter="10"
      :rules="usernameRules"
      label="Username"
      required
    ></v-text-field>

      <v-text-field
      v-model="passwordd"
      :rules="passRules"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

   

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
    <v-btn
      color="error"
      class="ml-4"
      @click="send"
    >
      Send Form
    </v-btn>
  </v-form>
</template>

<script>
  import axios from 'axios';
  

  export default {
    
    name: 'FormRegister',
    data() {
      return{
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
        ],
        username: '',
        usernameRules: [
          v => !!v || 'Username is required',
          v => (v && v.length >= 6) || 'Username must be at least 6 characters long',
        ],
        passwordd: '',
        passRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be at least 8 characters long',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
      }
    },

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      send(){
        // this.$refs.form.validate();
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('passwordd', this.passwordd);
        formData.append('email', this.email);
        formData.append('name', this.name);
        axios.post('http://localhost:3000/api/user/register', {
            name:this.name,
            password:this.passwordd,
            email:this.email
        })
        .then(response => {
            console.log(response);
        });
      }
    },
  }
</script>