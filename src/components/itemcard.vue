<template>
  <div class="additem_card">
    <div class="kindofvehicle">
     Kind of Vehicle:  {{ kind }} <br />
     Brand:  {{ brand }}
    </div>
    <div class="sittingcapacity">Sitting Capacity : {{ sit }}</div>
    <div class="location">Location: {{ location }}</div>
    <div class="rate">Rate: {{ rate }}</div>
    <v-btn
      color="primary"
      class="md-accent delete_btn"
      v-on:click="$emit('deleteArtistById', id)"
    >
      Delete
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AddItemCard",
  props: {
    id: String,
    kind: String,
    brand: String,
    sit: String,
    location: String
  }
};
</script>

<style scoped>
.additem_card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 150px;
  width: 300px;
  display: grid;
  padding: 10px 10px 0px 10px;
  grid-row-gap: 8px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  grid-template-areas:
    "kindofvehicle kindofvehicle"
    "brand sittingcapacity location "
    "rate"
    "deleteBtn deleteBtn ";
}
.kindofvehicle {
  grid-area: kindofvehicle;
  font-size: 20px;
  text-align: center;
  color: var(--txt-dark-color);
}
.sittingcapacity {
  grid-area: sittingcapacity;
}
.location {
  grid-area: location;
  justify-self: end;
}
.rate {
  grid-area: rate;
  justify-self: end;
}
.delete_btn {
  grid-area: deleteBtn;
}
</style>