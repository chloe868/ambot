<template>
  <div>
    <HeaderAdmin />
    <br />
    <br />
    <br />
    <br />
    <v-card class="mx-auto" max-width="500" max-height="700">
      <v-card-text>
        <!-- <input type="file" @change="onFileChanged" /> -->
        <!-- <button @click="onUpload">Upload!</button> -->
        <v-text-field
          class="sign-up"
          type="text"
          readonly
          prepend-icon="mdi-flag"
          placeholder="Company Name"
          v-model="defaultItem.company"
        >Company Name</v-text-field>
        <v-text-field
          class="sign-up"
          readonly
          prepend-icon="mdi-map-marker"
          type="text"
          placeholder="Company Address"
          v-model="defaultItem.comaddress"
        >Company Number</v-text-field>
        <v-text-field
          class="sign-up"
          readonly
          prepend-icon="mdi-phone"
          type="number"
          min="0"
          label=" Contact Number"
          v-model="defaultItem.vcontact"
        />
        <v-text-field
          readonly
          class="sign-up"
          type="email"
          prepend-icon="mdi-email"
          placeholder=" Email"
          v-model="defaultItem.vemail"
        />
        <v-text-field
          class="sign-up"
          prepend-icon="mdi-key-variant"
          :append-icon="eye?'mdi-eye':'mdi-eye-off'"
          @click:append="eye = !eye"
          :type="eye?'text':'password'"
          messages="enter old password to update profile"
          placeholder=" Password"
          v-model="oldpassword"
        />
        <br />

        <center>
          <v-btn
            @click="dialog= true"
            color="primary"
            :disabled="oldpassword !== defaultItem.vpassword"
          >Update profile</v-btn>
        </center>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-file-input chips label="Upload file" prepend-icon="mdi-camera" v-model="file"></v-file-input>

                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.company" label="Company Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.comaddress" label="Company Address"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.vcontact" label="Contact Number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.vemail" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.vpassword" label="New Password"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import HeaderAdmin from "..//components/HeaderAdmin.vue";
export default {
  name: "uploadFile",
  components: {
    HeaderAdmin
  },
  data() {
    return {
      user: {
        name: 0,
        vpassword: "gwapo"
      },
      files: "",
      oldpassword: "",
      eye: false,
      show: false,
      dialog: false,
      update: [],
      editedIndex: -1,
      editedItem: {
        company: "",
        comaddress: "",
        vcontact: 0,
        vemail: "",
        vpassword: ""
      },
      defaultItem: {
        company: "default",
        comaddress: "default",
        vcontact: 0,
        vemail: "default",
        vpassword: ""
      }
    };
  },
  methods: {
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.update[this.editedIndex], this.editedItem);
      } else {
        this.update.push(this.editedItem);
      }
      this.close();
    },
    beforeUpload() {
      this.file = this.$refs.myFileRef.files;
    },
    uploadFile: function() {
      let formData = new FormData();
      formData.append("img", this.file);
      formData.append("details", JSON.stringify(this.editedItem));
      this.$axios
        .post(`http://localhost:5000/uploadMultiple`, formData)
        .then(res => {
          console.log(res.data);
          this.user = res.data.user
          alert(res);
        })
        .catch(error => {
          console.error("file upload failed", error);
        });
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>
<style scoped>
[id="sign-up"]:checked ~ input.sign-up {
  max-height: 40px;
  padding: 10px;
  margin: 10px 0;
  opacity: 1;
}
input {
  padding: 6px;
  border-style: inset;
  color: black;
}
element.style {
  height: 250px;
}
</style>
