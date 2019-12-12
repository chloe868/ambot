<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                  
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field v-model="username" label="Login" name="login" :prepend-icon="'mdi-account'" type="text"></v-text-field>
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      :prepend-icon="'mdi-lock'"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
                <center>
                  <h4 color="primary" @click="register">go to <i><u style="cursor: pointer; font-size: 20px;">register</u></i></h4>
                </center>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import AUTH from "../services/auth";
import helper from '../services/helper.js'
export default {
  name: "login",
  data(){
    return{
      username: "",
      password:""
    }
  },
  methods:{
      login(){
        helper.login(this.username, this.password).then(resp=>{
          if(resp.data.status){
            if(resp.data.data.isAdmin){
              this.$router.push('/notifications');
            }else{
              localStorage.setItem("username", resp.data.data.username)
            this.$router.push('/mainpage');
            }
          }else{
            alert(resp.data.sms)
          }
        })
      },
      register(e){
        e.preventDefault()
        this.$router.push('/register')
      }
  }
};
</script>