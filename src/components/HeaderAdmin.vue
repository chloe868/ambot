<template>
  <div>
    <v-app-bar fixed app color="beige" >
      <v-btn @click.stop="drawer = !drawer"  icon>
        <v-icon color="blue">fas fa-bars</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn link @click="logout()" class="mx-2" fab dark color="blue" icon>
        <v-icon dark>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>
     <!-- dashboard part -->
    <v-navigation-drawer height="910" class="overflow-hidden" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYUEwHoe6jCtja8EvyKoVmICZj84fN2q5zQpzwddQuyjmU75o&s"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Catalina Car Rentals</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item two-line v-for="(item , i)  in menu" :key="i" :to="item._click">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  margin-left: 1150%;
}
.v-list-item--dense,
.v-list--dense .v-list-item {
  min-height: 75px;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: false,
      menu: [
        { icon: "fas fa-home", title: "Dashboard", _click: "/pageadmin" },
        { icon: "fas fa-user", title: "Profile", _click: "/profile" },
        {
          icon: "fas fa-bell",
          title: "Notifications",
          _click: "/notifications"
        },
        { icon: "fab fa-product-hunt", title: "Items", _click: "/items" }
      ]
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    navigate(name) {
      if (this.$route.path !== `${name}`) {
        console.log(name);
        
        this.$router.replace(`/${name}`);
      } else {
        this.drawer = false;
      }
    },
    dashboard() {
      this.navigate("/pageadmin");
    },
    notify() {
      this.navigate("/notifications");
    },
    items() {
      this.navigate("/items");
    },
    profile() {
      this.navigate("/profile");
    },
    handleResize() {
      if (window.innerWidth < 1200) {
        this.flexall = 12;
      } else {
        this.flexall = 6;
      }
    },
    logout(){
      this.$router.push({path: "/login"});
    }
  }
};
</script>
