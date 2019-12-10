<template>
  <div class="addItem_page">    
    <div class='title_page'>AddItem</div>
    <v-btn class="md-icon-button md-raised md-primary additem_btn"
        @click="showAddItem = true">
      <v-icon>add</v-icon>
    </v-btn>

    <div class='result_part'>
      <div v-for='add in addStore' v-bind:key="add._id">
        <AddItemCard 
              v-bind:id="add._id"
              v-bind:firstName="add.firstName"
              v-bind:lastName="add.lastName"
              v-bind:nationality="add.nationality"
              v-bind:birthDate="add.birthDate"
              v-on:deleteArtistById='deleteArtistById'/>
      </div>

    <AddItem v-if="showAddItem"
                    v-on:cancel='showAddItem=false'/>
                    
    </div>
  </div>
</template>


<script>
  // Import Components
  import AddItemCard from '@/components/itemcard.vue'
  import AddItem from '@/components/items.vue'
  export default {
    name: 'ArtistListPage',
    components:{
      AddItemCard,
      AddItem
    },
    data() {
      return {
        addStore: [],
        showAddItem : false
      }
    },
    methods: {
      // Decomment the following function for do the question 2
      // addArtist(artist){
      //   // TODO question 2
      // }
      // Decomment the following function for do the question 3
      // deleteArtistById(artistId) {
      //   // TODO question 3
      // },
    }
  }
</script>

<style lang="scss" scoped>
  .additempage{
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 2fr 65px;
    grid-template-rows: 50px 1fr
  }
  .title_page{
    align-self: center;
    text-align: center;
    grid-area: titlePage;
    font-size: 24px;
    color: var(--txt-dark-color);
  }
  .additem_btn{
    grid-area: addBtn;
    align-self: center;
  }
  
  .result_part{
    grid-area: addItem_page;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }
</style>