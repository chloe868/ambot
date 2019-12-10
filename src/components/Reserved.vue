<template>
  <div class="container">
    <v-card :loading="loading" class="mx-auto my-12" max-width="800">
      <v-subheader height="200">
        <h1>Reservation Form</h1>
      </v-subheader>
      <v-card-title></v-card-title>
      <v-card-text>
        <v-form lazy-validation ref="form">
          <v-row align="center" class="mx-0">
            <v-col>
              <v-text-field
                :rules="[rules.required]"
                v-model="dateReserve"
                :type="'date'"
                @change="checkReservedDate(dateReserve)"
                :prepend-icon="'mdi-calendar'"
                name="input-10-1"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :rules="[rules.required]"
                v-model="dateReturn"
                @change="checkReturnDate(dateReturn)"
                :type="'date'"
                :disabled="!dateReserve"
                :prepend-icon="'mdi-calendar'"
                name="input-10-1"
                label="date returned"
              ></v-text-field>
            </v-col>

            <!-- <v-row align="center" class="mx-0"> -->
            <!-- <v-text-field
              :rules="[rules.required]"
              v-model="vehicle"
              :type="'text' "
              :prepend-icon="'mdi-map-marker'"
              name="input-10-1"
              label="username"
            ></v-text-field>-->
          </v-row>
          <v-row align="center" class="mx-1">
            <!-- <v-row align="center" class="mx-0"> -->

            <!-- <v-text-field
              :rules="[rules.required]"
              v-model="payable"
              type="number"
              readonly
              :prepend-icon="'mdi-item'"
              name="input-10-1"
              label="total payable"
            ></v-text-field>-->
          </v-row>
        </v-form>
        <p class="display-3 text-center">&#8369;{{payable}}</p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="white--text" text @click="reserve">Reserve</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import helper from "../services/helper.js";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    vehicle: "",
    item: sessionStorage.getItem("id"),
    dateReturn: null,
    dateReserve: null,
    payable: 0,
    rules: {
      required: value => !!value || "Required."
    }
  }),
  mounted() {},
  methods: {
    reserve() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
        
        this.$axios
          .post("", {
            accountId: user._id,
            dateReserved: this.dateReserve,
            dateReturned: this.dateReturn,
            totalRate: this.payable
          })
          .then(res => {
            // 
            this.$router.push("/mainpage");
          })
          .catch(err => {
            // 
          });
      }
    },
    checkReservedDate(value) {
      var date = new Date();
      var current = {
        date: date.getDate(),
        year: date.getFullYear(),
        month: date.getMonth()
      };
      var reserveDate = value.split("-");
      var reserved = {
        date: Number(reserveDate[2]),
        year: Number(reserveDate[0]),
        month: Number(reserveDate[1])
      };
      if (
        !(
          reserved.month >= current.month &&
          reserved.year >= current.year &&
          reserved.date >= current.date
        )
      ) {
        alert("errors");
        this.dateReserve = null;
      }
    },
    checkReturnDate(value) {
      var reserveDate = this.dateReserve.split("-");
      var reserved = {
        date: Number(reserveDate[2]),
        year: Number(reserveDate[0]),
        month: Number(reserveDate[1])
      };
      var returnDate = value.split("-");
      var returned = {
        date: Number(returnDate[2]),
        year: Number(returnDate[0]),
        month: Number(returnDate[1])
      };
      if (
        reserved.month <= returned.month &&
        reserved.year <= returned.year &&
        reserved.date <= returned.date
      ) {
        // this.payable = 1000;
        this.$axios
          .post("http://localhost:5000/calculate", { id: this.item })
          .then(res => {
            sessionStorage.clear();
            var ratings = res.data;
            // calculate
            // this.payable = calculated;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("errorx");
        this.dateReturn = null;
      }
    }
  },
  mounted() {
    // if not logged in  direct to login
    sessionStorage.setItem("item_id", this.$route.params.item);
  }
};
</script>
<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 4px;
  /* -webkit-text-stroke-width: thick; */
  max-width: 500px;
}
.theme--light.v-subheader {
  /* color: rgba(0, 0, 0, 0.54); */
  background-color: #1976d2;
  height: 100px;
}
.v-card__actions .v-btn.v-btn {
  padding: 0 8px;
  background-color: #1976d2;
  margin-left: 300px;
  width: 135px;
}
</style>