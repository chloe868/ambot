<template>
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Register</h2>
          <form class="login-form">
            <v-text-field v-model="data.firstname" label="Firtsname" required></v-text-field>
            <v-text-field v-model="data.lastname" label="Lastname" required></v-text-field>
            <v-text-field v-model="data.address" label="Address" required></v-text-field>
            <v-text-field v-model="data.age" label="Age" type="number" min="1" required></v-text-field>

            <v-text-field
              v-model="data.contactnumber"
              label="Contact Number"
              type="string"
              min="0"
              required
            ></v-text-field>
            <v-text-field v-model="data.email" label="E-mail" required></v-text-field>
            <v-text-field v-model="data.username" label="Username" required></v-text-field>
            <v-text-field v-model="data.password" label="Password" type="password" required></v-text-field>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
              <button type="submit" class="btn btn-login float-right" v-on:click="submit()">Submit</button>
            </div>
            <br>
            <br>
            <div>
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
.login-block[data-v-63ae9146] {
    background: #1E90FF;
    background: -webkit-gradient( linear, left top, left bottom, from(#1E90FF), to(#0000FF) );
    background: linear-gradient( to bottom, #1E90FF, #0000FF );
    /* float: left; */
    width: 90%;
    height: 85%;
    margin-top: 6.5%;
    margin-left: 5%;
    /* margin-right: 45%; */
    padding: 50px 0;
}
/* .banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;} */
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.container {
    max-width: 1141px;
    height: 99%;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.img-fluid {
    width: 98%;
    height: 714px;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
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
/* .banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;} */
</style>
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
      password: null
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
    }
  }
};
</script>


