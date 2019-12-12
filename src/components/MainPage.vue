<template>
  <div>
    <Header id="head"></Header>
    <form action="#" method="post" novalidate="novalidate">
      <div class="row-one">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-select
                  v-model="select"
                  :items="transpo"
                  :rules="[v => !!v || 'Item is required']"
                  label="Options"
                  select
                  return-object
                  required
                ></v-select>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field type="text" v-model="location" name="input-10-1" label="location"/>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field
                  type="date"
                  v-model="dater"
                  :prepend-icon="'mdi-calendar'"
                  name="input-10-1"
                  label="date reserved"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <div class="form-control search-slt">
                <v-text-field
                  label="date returned"
                  type="date"
                  v-model="date"
                  :prepend-icon="'mdi-calendar'"
                  name="input-10-1"
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
              <button type="button" class="btn btn-primary wrn-btn" @click="search()">
                <a>Search</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="h1 text-center" v-if="filteredList.length == 0">
      <br>
      <br>No results found
    </div>
    <v-card v-else class="d-inline-block" v-for="(item, i) in filteredList" :key="i" cols="12">
      <v-container>
        <v-row justify="space-between">
          <v-col class="col-3">
            <v-img :src="item.imageSRC" style="width:300px;height:240px; border:2px solid grey;"></v-img>
          </v-col>
          <v-col class="col-6">
            <v-card-title class="headline">{{item.name}}</v-card-title>
            <div>
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:200px;height:5px;color:dodgerblue ">
            <v-card-title class="headline">Status:{{item.status}}</v-card-title>
            <v-card-title class="headline">Location:{{item.location}}</v-card-title>
          </v-col>
          <div class="vertical"></div>
          <v-col class="col-3">
            <v-card-title>Sitting Capacity:{{item.sitingcapacity}}</v-card-title>
            <!-- <v-card-title>Color:{{item.color}}</v-card-title> -->
            <v-card-title>Brand:{{item.brand}}</v-card-title>
            <!-- <v-card-title>Rate:{{item.rate}}</v-card-title> -->
          </v-col>
          <div class="verticalone"></div>
          <v-col class="col=6">
            <v-card-title class="company">Company:{{item.company}}</v-card-title>
            <v-card-title class="price">Price:{{item.rate}}</v-card-title>
            <v-btn class="primary" v-on:click="reserved(item._id)">Reserved</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br>
    <br>
    <br>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
// import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Header
    // Footer
  },
  props: {
    name: String,
    value: null,
    id: String,
    disabled: Boolean,
    required: Boolean
  },
  data: () => ({
    select: null,
    location: "",
    temp_value: null,
    ratings: [1, 2, 3, 4, 5],
    items: [],
    transpo: ["car", "motorcycle", "van", "bus", "boat"],
    date: new Date(),
    dater: new Date()
  }),
  computed: {
    filteredList() {
      return this.items.filter(data => {
        console.log(data);
        return (
          data.name.toLowerCase().includes(this.select.toLowerCase()) &&
          data.location.toLowerCase().includes(this.location.toLowerCase())
        );
      });
    },
    tranpo() {
      return this.$store.state.options.options;
    }
  },
  methods: {
    star_over: function(index) {
      var self = this;
      if (!this.disabled) {
        this.temp_value = this.value;
        return (this.value = index);
      }
    },
    star_out: function() {
      var self = this;
      if (!this.disabled) {
        return (this.value = this.temp_value);
      }
    },
    set: function(value) {
      var self = this;
      if (!this.disabled) {
        this.temp_value = value;
        return (this.value = value);
      }
    },
    search() {
      // if (this.select !== this.$route.params.filter) {
      //   this.$router.push(`/mainpage/${this.select}`);
      // }
      var data = {
        name: this.select,
        location: this.location
      };
      axios.get("http://localhost:5000/search", data).then(res => {
        this.items = res.data.item;
      });
    },
    reserved(id) {
      sessionStorage.setItem("item_id", id);
      if (!loggedIn) {
        this.$router.push("/login");
      } else {
        this.$router.push("/reserved/"+id);
      }
    }
  },
  mounted() {
    this.select = this.$route.params.filter ? this.$route.params.filter : "";
    axios
      .get("http://localhost:5000/getItems")
      .then(res => {
        console.log(res.data);
        this.items = res.data.items;
      })
      .catch(err => {
        console.log(err);
      });
  },

  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
}

.vertical {
  border-left: 1px solid grey;
  height: 260px;
  margin-left: -27%;
  margin-top: 0.5%;
}

.verticalone {
  border-left: 1px solid grey;
  height: 260px;
  margin-top: 0.5%;
}

.container {
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
}

.row[data-v-109177d0] {
  margin-right: -35px;
  margin-left: -65px;
  margin-top: -1px;
}

.row-one[data-v-109177d0][data-v-109177d0] {
  margin-right: 12%;
  margin-left: 15%;
  margin-top: 5%;
}

.v-card[data-v-109177d0]:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 4px sp;
  width: 85%;
  margin-top: 50px;
  margin-left: 8%;
  /* border: 2px solid dodgerblue; */
}

.search-slt[data-v-109177d0][data-v-109177d0] {
  width: 90%;
  height: 70px;
  font-family: Raleway-SemiBold;
  /* border: 2px solid dodgerblue; */
}

.theme--light.v-sheet {
  background-color: #ffffff;
  border-color: #1e90ff;
  height: 290px;
  color: rgba(0, 0, 0, 0.87);
}

.row {
  margin-right: -12px;
  margin-left: -12px;
  margin-top: 50px;
}

.search-slt {
  width: 90%;
  height: 70px;
  font-family: Raleway-SemiBold;
}

.datepicker {
  font-size: 16px;
  font-family: Raleway-SemiBold;
}

.col-lg-3 {
  -ms-flex: 0 0 25%;
  -webkit-box-flex: 0;
  flex: 0 0 20%;
  width: 5%;
}

.theme--light.v-select .v-select__selections {
  color: rgba(0, 0, 0, 0.87);
  margin-top: -20px;
  font-size: 25px;
}

.wrn-btn {
  font-size: 35px;
  width: 200px;
  height: 70px;
  font-family: Raleway-SemiBold;
}

#head {
  background-color: whitesmoke;
}

h1,
h2 {
  font-size: 15px;
}

.company,
.price {
  margin-left: 75px;
}

.primary {
  margin-top: 50px;
}

.v-btn:not(.v-btn--round).v-size--default[data-v-109177d0] {
  height: 56px;
  min-width: 194px;
  padding: 0 16px;
  margin-left: 75px;
  margin-top: 69px;
}
</style>
