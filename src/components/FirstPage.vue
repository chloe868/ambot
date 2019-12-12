<template>
  <div>
    <Header id="header"></Header>
    <section class="search-sec">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate">
          <div class="row-one">
            <div class="col-lg-12">
              <!-- <h2 style="margin-left:530px;">Find the best service we had...</h2> -->
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
                    <v-text-field
                      type="text"
                      v-model="location"
                      name="input-10-1"
                      label="location"
                    />
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
      </div>
    </section>
  </div>
</template>
<style scoped>
.search-slt {
  width: 90%;
  height: 70px;
  font-family: Raleway-SemiBold;
}
.wrn-btn {
  font-size: 30px;
  width: 200px;
  height: 70px;
  font-family: Raleway-SemiBold;
}
.datepicker {
  font-size: 20px;
  font-family: Raleway-SemiBold;
}
option {
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
}
.v-input {
  margin-top: -14px;
}
.row {
  margin-right: -35px;
  margin-left: 20px;
}

.container {
  width: 100%;
  margin-top: 270px;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
.v-menu__content {
  position: absolute;
  display: inline-block;
  border-radius: 4px;
  max-width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  will-change: transform;
}
</style>
<script>
import Header from "../components/Header.vue";
import Axios from 'axios';
export default {
  components: {
    Header
  },
  props: [],
  mounted() {},
  data() {
    return {
      valid: true,
      select: "",
      transpo: ["car", "motorcycle", "van", "bus", "boat"],
      date: "",
      dater: "",
      location: ""
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    tranpo() {
      return this.$store.state.options.options;
    }
  },
  methods: {
    search() {
      this.$router.push(`/mainpage/${this.select}`);
      // this.$router.push(`/mainpage/${this.location}`);
    }
  }
};
</script>