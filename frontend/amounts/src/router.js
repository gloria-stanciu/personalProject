import Vue from "vue";
import VueRouter from "vue-router";
import Default from "./views/Default.vue";
import SignUp from "./views/SignUp.vue"
import LogIn from "./views/LogIn.vue"
import Home from "./views/Home.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
    },
    {
      path:"/home",
      name:"Home",
      component: Home,
      meta: {
        protected: true
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if(to.meta.protected){
    try{
      const token = localStorage.getItem('token')
      if(token){
        next()
      }else{next('/auth')}
    }catch(err){
      next('/auth')
    }
    }else{
      next()
  }
})

export default router;
