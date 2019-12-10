<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-card-text>
      login
      <v-text-field
        v-model="username"
        :type="'text' "
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
      ></v-text-field>
      <v-text-field
        v-model="password"
        :type="'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
      ></v-text-field>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>User</v-chip>

        <v-chip>Admin</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple accent-4" rounded outlined @click="login()">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>*/
<script>
export default {
 
  data() {
    return {
      loading: false,
      selection: 1,
      username:"",
      password:""
    };
  },

  methods: {
    login() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
      this.$router.login("/reserved");
    }
    login(){
      this.loading=true;
      setTimeout(() => (this.loading = false), 2000);
      this.$router.login("/reserved");
    }
  },
  post(){

  }
};
</script>
API 😄JS
import jquery
import auth from'services/auth'
imoport config from'src/config.js
export default  {
  APIRequest(link,parameter)
  let BCKEND url =config.BAckendurl+🧡link
  leturltoken==(AUTH.token.data!==null)? '?tokem=' +Auth.token.data:
  let urltoken=backendurl+token
  $.ajax(){
    
  }
})
