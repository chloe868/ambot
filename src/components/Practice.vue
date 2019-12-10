<template>
  <div>
    <Header id="head"></Header>
    <v-card class="d-inline-block mx-auto" v-for="(item, i) in items" :key="i" cols="12">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img :src="item.src" style="width:300px;height:250px"></v-img>
          </v-col>
          <v-col class="mb-3">
            <v-card-title class="headline" v-text="item.itemname"></v-card-title>
            <v-card-subtitle v-text="item.price"></v-card-subtitle>
            <div>
              <v-rating v-model="rating"></v-rating>
            </div>
            <hr style="width:250px;" />
            <v-card-subtitle v-text="item.color"></v-card-subtitle>
            <v-card-subtitle v-text="item.brand"></v-card-subtitle>
            <v-btn class="primary" @click="reserved()">Reserved</v-btn>
          </v-col>
          <div class="vertical"></div>
          <v-col>
            <v-card-subtitle v-text="item.company"></v-card-subtitle>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: "",
        src:
          "https://images.dealer.com/ddc/vehicles/2019/Hyundai/Santa%20Fe%20XL/SUV/trim_SE_f0031a/color/Becketts%20Black-RB5-8%2C8%2C8-640-en_US.jpg",
        itemnamme: "Supdasffsdafsafa",
        price: "P1500 per day",
        brand: "toyota",
        company: "cebu reant"
      },
      {
        color: "#952175",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs7kaoUewSBHa7T6rUyWHNdqUuKnCwvuAAexV7xdkPy4w4a2D&s",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "https://hondaph.com/wp-content/uploads/2019/09/XRM_MOTARD_RED.png",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "http://perthsuretaxi.com/images/ser-img3.jpg",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "http://toyota.com.ph/wp-content/uploads/2018/06/HH1303-F-01.png",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "http://designmella.com/images/bus-passenger-bus.png",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCvga2xBbSBzDGZETF_ueWyNWzvGgsgBTiAvT8j96VhHy3h4v&s",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LkhXzxAXZj8qR4D6rM7QJYMeKtUPlQhzoriPu10GPv4mWOYg&s",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
      {
        color: "#952175",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfeR566GQF0vDZJvqq_JZp0ZQAZ-XzCuSkCYVlI717nN-79S&s",
        itemname: "Halcyon Days",
        price: "P1000 per day",
        brand: "hyundai",
        company: "carts"
      },
    ]
  })
};
</script>
<style scoped>
.vertical {
  border-left: 1px solid grey;
  height: 260px;
  margin-left: -5%;
  margin-top: 1%;
}
.container {
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
}
.row[data-v-109177d0] {
  display: flex;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-right: -35px;
  margin-left: -65px;
  margin-top: -1px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 4px;
  width: 100%;
  margin-top: 50px;
}
.row {
  margin-right: -12px;
  margin-left: -12px;
  margin-top: 50px;
}
.search-sec {
  padding: 2rem;
}
.search-slt {
  width: 90%;
  height: calc(3rem + 2px) !important;
  font-family: Raleway-SemiBold;
}

.datepicker {
  font-size: 16px;
  height: calc(3rem + 2px) !important;
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
  margin-left: 5%;
}
.v-input {
  margin-top: -14px;
}
.row-one[data-v-109177d0] {
  margin-right: 1%;
  margin-left: 15%;
  margin-top: 5%;
}
.wrn-btn {
  font-size: 16px;
  height: calc(3rem + 2px) !important;
  font-family: Raleway-SemiBold;
}
#head {
  background-color: whitesmoke;
}
.primary {
  margin-top: 30px;
}
</style>

