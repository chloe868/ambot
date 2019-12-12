<template>
  <v-app class="form" id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="5">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>SIGNUP</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <template>
                  <v-form ref="form">
                    <v-text-field v-model="data.firstname"  label="Firtsname" required></v-text-field>
                    <v-text-field v-model="data.lastname"  label="Lastname" required></v-text-field>
                    <v-text-field v-model="data.address"  label="Address" required></v-text-field>
                    <v-text-field v-model="data.age" label="Age" type="number" min="1" required></v-text-field>

                    <v-text-field
                      v-model="data.contactnumber"
                      label="Contact Number"
                      type="string"
                      min="0"
                      required
                    ></v-text-field>
                    <v-text-field v-model="data.email"  label="E-mail" required></v-text-field>
                    <v-text-field v-model="data.username" label="Username" required></v-text-field>
                    <v-text-field
                      v-model="data.password"
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-form>
                </template>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn v-on:click="submit()" color="primary">Submit</v-btn>
              </v-card-actions>
              <center>
                  <h4 color="primary" @click="login">go to <i><u style="cursor: pointer; font-size: 20px;">login</u></i></h4>
                </center>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  props: {
    source: String
  },
  data() {
    return {
    data:{
      lastname: null,
      firstname: null,
      address: null,
      age: null,
      contactnumber: null,
      email: null,
      username: null,
      password: null,
      isAdmin: false
        }
    };
  },
  methods: {
    submit() {
      console.log(this.address);
      axios.post("http://localhost:5000/accountsUsers",this.data).then(response => {
        alert(response);
        this.data ="";
        this.$router.push("/login");
      });
    },
    login(e){
      e.preventDefault()
      this.$router.push('/login')
    }
  }
};
</script>
<style scoped>
</style>