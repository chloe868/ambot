import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import MainPage from "../components/MainPage";
import FirstPage from "../components/FirstPage";
import Reserved from "../components/Reserved";
import Practice from "../components/Practice";
import Notifications from "../components/Notifications";
import HeaderAdmin from "../components/HeaderAdmin";
import Profile from "../components/Profile";
import AddItemPage from "../views/AddItemPage";
import PageAdmin from "../components/PageAdmin";
import EditItem from "../components/EditItem";
import items from "../components/items";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstPage
  },
  {
    path: "/header",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path:"/mainpage/:filter?",
    name:"mainpage",
   
    component:MainPage,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/edititem",
    name:"edititem",
    component:EditItem,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/items",
    name:"items",
    component:items,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/pageadmin",
    name:"pageadmin",
    component:PageAdmin,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/notifications",
    name:"notifications",
    component:Notifications,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/headeradmin",
    name:"headeradmin",
    component:HeaderAdmin,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/practice",
    name:"practice",
    component:Practice,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/additem",
    name:"additem",
    component:AddItemPage,
    meta: {
        tokenRequired: false
    }
  },
  {
    path:"/login",
    name:"login",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta:{
      tokenRequired: true
    }

  },
  {
    path:"/register",
    name:"register",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    meta: {
      tokenRequired: false
    }
  },
  {
    path:"/reserved/:id",
    name:"reserved",
    component:Reserved,
    meta: {
      tokenRequired: false
  }
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../components/Reserved.vue")

  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
