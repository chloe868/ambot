<template>
  <div>
    <HeaderAdmin />
    <v-container fluid>
      <v-data-table :headers="headers" :items="vehicle"></v-data-table>
    </v-container>
  </div>
</template>
<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
export default {
  components: {
    HeaderAdmin
  },
  data: () => ({
    drawer: true,
    vehicle: [],
    headers: [
      {
        text: "Username",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Date Reserved", sortable: false },
      { text: "Date Return ", sortable: false },
      { text: "Total ", sortable: false },
      
    ]
  }),
  methods: {
    addVehicle() {
      var vehicle = [];
      var addVehicle = "Vehicle";
      this.axios
        .post("http://localhost:8000/retrieveVehicle/" + event)
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
    }
  },
  mounted() {
    this.addVehicle();
  }
};
</script>