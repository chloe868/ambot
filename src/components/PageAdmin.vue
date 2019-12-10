<template>
  <div>
  <HeaderAdmin />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="flexall">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon color="blue">fab fa-facebook</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HeaderAdmin from "../components/HeaderAdmin.vue"
export default {
  components:{
    HeaderAdmin
  },
  data: () => ({
    drawer: false,
    flexall: 6,
    cards: [
      {
        title: "Catalina Car Tours",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOV2tPnIsNviEpIz9vSh-KQ83GsKVUJBabyB6xwQe-9OAZqMA&s"
      },
      {
        title: "Natalie Tours",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83qZMNcpMQjrDKTTm0EG9JureWn9qYmwoGn9pPwicqrD5yCIZ&s"
      },
      {
        title: "Dream of Cebu",
        src:
          "https://apollo-singapore.akamaized.net/v1/files/zi70nd8jv8lp3-PH/image;s=1000x700;olx-st/_2_.jpg"
      },
      {
        title: "MotorCycleCity",
        src:
          "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/breakout/overview/dom/19-softail-breakout-hero.jpg"
      }
    ]
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    dashboard() {
      this.$router.push("/pageadmin");
    },
    notify() {
      this.$router.push("/notifications");
    },
    item() {
      this.$router.push("/items");
    },
    profile() {
      this.$router.push("/profile");
    },
    handleResize() {
      if (window.innerWidth < 1200) {
        this.flexall = 12;
      } else {
        this.flexall = 6;
      }
    }
  }
};
</script>
