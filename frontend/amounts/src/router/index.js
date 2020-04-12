import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../views/Default.vue";
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Default",
    component: Default
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path:"/login",
    name:"LogIn",
    component: LogIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
