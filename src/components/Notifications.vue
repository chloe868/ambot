<template>
  <div>
    <HeaderAdmin />
    <v-container fluid>
      <v-data-table :headers="headers" :items="reservations"></v-data-table>
    </v-container>
  </div>
</template>
<script>
import HeaderAdmin from "..//components/HeaderAdmin.vue";
import io from "socket.io-client";
var socket = io.connect("http://localhost:5000");
export default {
  components: {
    HeaderAdmin
  },
  data: () => ({
    drawer: true,
    test: "",
    reservations:[],
    vehicle: [],
    headers: [
      {
        text: "Username",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Date Reserved",  value: "dateReserved",sortable: false },
      { text: "Date Return ", value: "dateReturned", sortable: false },
      { text: "Total ",  value: "totalRate",sortable: false },
      
    ]
  }),
  created(){
    this.onReserveEvent()
  },
  methods: {
    onReserveEvent(){
      socket.on('reserveEvent', (data)=>{
        this.manageReserve(data)
      })
    },
    manageReserve(data){
      this.reservations = data
    },
    dashboard() {
      this.$router.push("/");
    },
    notify() {
      this.$router.push("/notifications");
    },
    profile() {
      this.$router.push("/profile");
    },
    addVehicle() {
      var vehicle = [];
      var addVehicle = "Vehicle";
      this.axios
        .post("http://localhost:5000/retrieveVehicle/" + event)
        .then(response => {
          console.log(response);
          var dataT = response.data;
          // this.org = dataT
          var counter = 0;
          for (counter; counter < dataT.length; counter++) {
            vehicle.push({
              //change the arrangement according sa imong schema...
              name: dataT[counter].name,
              address: dataT[counter].address,
              contact: dataT[counter].contact,
              event: dataT[counter].event
            });
          }
          // console.log(org);
          this.vehicle = vehicle;
        })
        .catch(error => {
          console.log(error);
        });
      return vehicle;
    },
    getReserve(){
      this.$axios
        .get("http://localhost:5000/reservation/get/")
        .then(response => {
          console.log(response)
          this.reservations = response.data
        })
    }
  },
  mounted() {
    this.getReserve();
  }
};
</script>