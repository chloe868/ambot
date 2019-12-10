<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="350">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>

      <v-card>
         <br>

        <v-card-text><DatePicker ref="datepicker" /></v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="(dialog = false,getDate())">Set Date</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import DatePicker from "./DatePicker";
export default {
  components: {
    DatePicker
  },
  data() {
    return {
      dialog: false
    };
  },
  methods:{
      getDate(){
        alert(this.$refs.datepicker.picker)
      }
  }
};
</script>