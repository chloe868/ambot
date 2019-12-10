<template>
  <div>
    <v-app-bar fixed app color="beige" >
      <v-img max-width = "200" src= "https://lh3.googleusercontent.com/-JE8EnkoJfs4/XdNtJ5QuntI/AAAAAAAACjM/99vSSc4c6xcuz2MBNlVVXV63lXTPs9jugCK8BGAsYHg/s0/2019-11-18.png" contain></v-img>
      <v-spacer>
      </v-spacer>
      <v-btn link @click="login()" class="mx-2" fab dark color="blue" icon>
        <v-icon dark>fas fa-sign-out-alt</v-icon>
      </v-btn>
      <v-btn link @click="register()" class="mx-2" fab dark color="blue" icon>
        <v-icon dark>fas fa-registered</v-icon>
      </v-btn>
    </v-app-bar>
    </div>
</template>
<style scoped>
element.style {
    height: 75px;
    margin-top: 0px;
    transform: translateY(0px);
    left: 0px;
    right: 0px;
}
</style>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
        login(){
          this.$router.push("/login");
        },
        register:function(){
          this.$router.push("/register");
        }
      }
}
</script>