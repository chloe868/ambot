<template>
  <v-row justify="center">
    <v-date-picker v-model="picker" color="indigo" range></v-date-picker>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        picker: []
      }
    },
  }
</script>