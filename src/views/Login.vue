<template>
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form">
            <v-text-field
              v-model="username"
              placeholder="Login"
              name="login"
              :prepend-icon="'mdi-account'"
              type="email"
            ></v-text-field>
            <v-text-field
              id="password"
              placeholder="Password"
              name="password"
              :prepend-icon="'mdi-lock'"
              type="password"
              v-model="password"
            ></v-text-field>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
              <button type="submit" class="btn btn-login float-right"  @click="login">Submit</button>
            </div>
            <br>
            <br>
            <div class="word">
              <h1 style="font-size:20px; margin-top:35%;">
                Don't have an account? Click
                <a @click="register">Register!!..</a>
              </h1>
            </div>
          </form>
        </div>
        <div class="col-md-8 banner-sec">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="https://media.licdn.com/dms/image/C561BAQFj57SmFUgXew/company-background_10000/0?e=2159024400&v=beta&t=s0P5tQcgs3u14sD7wNdISUOgxGXd6B9Gcrz1fIfm990"
                  alt="First slide"
                >
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                    <h2><img src="https://lh3.googleusercontent.com/-JE8EnkoJfs4/XdNtJ5QuntI/AAAAAAAACjM/99vSSc4c6xcuz2MBNlVVXV63lXTPs9jugCK8BGAsYHg/s0/2019-11-18.png"/></h2>
                    
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");

.login-block[data-v-26084dc2] {
    background: dodgerblue;
    background: -webkit-gradient( linear, left top, left bottom, from(#1E90FF), to(#0000FF) );
    background: linear-gradient( to bottom, #1E90FF, #0000FF );
    float: left;
    width: 95%;
    height: 80%;
    padding: 50px 0;
    margin-top: 8%;
    margin-left: 3%;
}
.login-sec h2[data-v-26084dc2] {
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 30px;
    color: dodgerblue;
}
.img-fluid[data-v-26084dc2] {
    max-width: 100%;
    height: 562px;
}
.word{
  font-family: 'Courier New', Courier, monospace;
 font-size:  1.5rem;
}
.login-sec h2[data-v-26084dc2]:after {
    content: " ";
    width: 100px;
    height: 5px;
    background:dodgerblue;
    display: block;
    margin-top: 20px;
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto;
}

.container[data-v-26084dc2] {
    background: #fff;
    border-radius: 10px;
    height: 85%;
    -webkit-box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
    margin-top: 3%;}
/* .banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;} */
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.btn-login[data-v-26084dc2] {
    background:white ;
    color: #fff;
    background-color: dodgerblue;
    font-weight: 600;
}
.login-sec .copy-text i {
  color: rgb(63, 124, 238);
}
.login-sec .copy-text a {
  color: rgb(74, 163, 204);
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: dodgerblue;
}
.img-fluid {
    max-width: 100%;
    height: 711px;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background:dodgerblue;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.btn-login {
  background: dodgerblue;
  color: #fff;
  font-weight: 600;
}

</style>
<script>
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
            this.$router.push('/reserved');
          }else{
            alert(resp.data.sms)
          }
        })
      },
    
  }
};
</script>
