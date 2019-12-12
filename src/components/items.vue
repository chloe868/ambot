<template>
  <div>
    <HeaderAdmin/>
    <!-- -->
    <v-data-table :headers="headers" :items="vehicle" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>List of Items</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card @submit.prevent="onSubmit" enctype="multipart/form-data">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-img
                    :src="editedItem.imageSRC?editedItem.imageSRC:placeHolder"
                    height="200px"
                    @click="$refs.file.click()"
                  ></v-img>
                  <form enctype="multipart/form-data">
                    <div class="fields">
                      <label>Upload File</label>
                      <br>
                      <input type="file" ref="file" @change="handleFileUpload">
                    </div>
                    <div class="fields">
                      <!-- <button @submit.prevent="onSubmit">Submit</button> -->
                    </div>
                  </form>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-select v-model="editedItem.name" :items="items" label="Standard"></v-select>
                      <!-- <v-text-field v-model="editedItem.name" label="Kind of Vehicle"></v-text-field> -->
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.brand" label="Brand"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.sitingcapacity"
                        type="Number"
                        label="Sitting Capacity"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.location" label="Location"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.rate" type="Number" label="Rate"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="onSubmit">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
        <v-icon small @click="deleteItem(item)">delete</v-icon>
      </template>
      <template v-slot:item.info="{ item }">
        <v-dialog v-model="dialog2" width="500">
          <template v-slot:activator="{ on }">
            <v-icon small class="mr-2" v-on="on">mdi-information</v-icon>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Details</v-card-title>

            <v-card-text>
              <img :src="'http://localhost:5000/files/'+ item.img">
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import HeaderAdmin from "..//components/HeaderAdmin.vue";
import axios from "axios";
import helper from "../services/helper.js";
export default {
  components: {
    HeaderAdmin
  },
  data() {
    return {
      dialog2: false,
      dialog: false,
      headers: [
        { text: "Type of Vehicle", value: "name", sortable: false },
        { text: "Brand", value: "brand", sortable: false },
        { text: "Sitting Capacity", value: "sit", sortable: false },
        { text: "Location", value: "loc", sortable: false },
        { text: "Rate", value: "rate", sortable: false },
        { text: "Actions", value: "action", sortable: false },
        { text: "", value: "info", sortable: false }
      ],
      items: ["Van", "Bus", "Motorcycle", "Boat"],
      editedIndex: -1,
      vehicle: [],
      placeHolder: "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
      editedItem: {
        imageSRC: null,
        name: "",
        brand: "",
        sitingcapacity: 0,
        location: "",
        rate: ""
      },
      defaultItem: {
        imageSRC: "",
        name: "",
        brand: "",
        sitingcapacity: null,
        location: "",
        rate: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   }
  // },
  created() {
    //this.initialize();
    helper
      .getItems()
      .then(resp => {
        console.log("items: ", resp.data);
        const entries = Object.entries(resp.data);
        console.log("each: ", entries[0][1]);
        entries[0][1].forEach(element => {
          let tempObj = {
            img: element.imageSRC,
            name: element.name,
            brand: element.brand,
            sit: element.sitingcapacity,
            loc: element.location,
            rate: element.rate
          };
          console.log("temp: ", tempObj);
          this.vehicle.push(tempObj);
        });
      })
      .catch(err => {
        alert("error");
      });
  },
  methods: {
    dashboard() {
      this.$router.push("/");
    },
    notify() {
      this.$router.push("/notifications");
    },
    item() {
      this.$router.push("/item");
    },
    profile() {
      this.$router.push("/profile");
    },
    initialize() {
      this.vehicle = [
        {
          img: "",
          name: "Car",
          brand: "Ferrari",
          sit: 0,
          loc: "Talisay",
          rate: "300/day"
        }
      ];
    },
    editItem(item) {
      this.editedIndex = this.vehicle.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.vehicle.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.vehicle.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.editedItem.imageSRC = URL.createObjectURL(this.file);
      console.log(this.file);
    }
  },
  async onSubmit() {
    if (
      this.editedItem.imageSRC == null ||
      this.editedItem.name == "" ||
      this.editedItem.brand == "" ||
      this.editedItem.sitingcapacity == "" ||
      this.editedItem.location == "" ||
      this.editedItem.rate == ""
    ) {
      alert("all fields are required!!");
    } else {
      const formData = new FormData();
      formData.append("file", this.file);
      console.log(this.file);
      try {
        await axios
          .post("http://localhost:5000/uploadImage", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(resp => {
            this.editedItem.imageSRC = resp.data.file.filename;
            console.log("data: ", resp.data);
            console.log("image: ", resp.data.file.filename);
            helper
              .addItem(this.editedItem)
              .then(resp => {
                this.close();
              })
              .catch(err => {
                this.close();
              });
          });
      } catch (err) {
        console.log(err);
        //this.message = err.response.file.error;
      }
    }
  }
};
</script>