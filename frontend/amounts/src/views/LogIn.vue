<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
  <h1>Log in!</h1>
   <div>
    <br>
    <v-form class="vue-form" ref="form" v-model="valid" lazy-validation>
       <label>Username</label>
      <br>
      <input v-model="auth.username" placeholder="john.smith">
      <br>
      <label>Password</label>
      <br>
      <input v-model="auth.password" type="password" placeholder="*****">
    </v-form>
      <br><br>
      <v-btn depressed large color=#138F56 class="white--text"  @click="login">Log in!</v-btn>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";
import{mapActions} from 'vuex'

export default {
  name: "logIn",
  components: {
  HeaderAndPageBackground,
  },
  data(){
    return{
      auth: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions(['authUser']),
    login: async function(){
      try{
        const login = await this.authUser(this.auth)
         if (login == true)
          this.$router.push({path: "/home"})
      }catch(err){
        this.error = err
      }
    },
  }
};
</script>

<style scoped lang="scss">
div{
  text-align: center;
}
.white--text{
  color: #fff !important;
  font-weight: 700;
  width: 20%;
  border-radius: 5px;
}
.vue-form{
  box-shadow: 1px 1px 4px 4px #DEE4E1;
  border-radius: 5px;
  background-color: #fff;
  display: inline-block;
  color:  rgba(63, 63, 63, 0.88);
  width: 20%;
  padding: 12px;
  margin: 8px 0;
  text-align: left;
}
input{
  font-size: 18px;
  padding: 12px 12px;
  margin: 8px 0;
  border: 0.5px solid #DEE4E1;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}
label{
  padding-top: 10px;
  font-size: 20px;
  font-weight: 600;  
}
h1{
  font-size: 41px;
  font-weight: 700;
  padding-top: 50px;
  text-align: center;
  color:  #138F56;
  padding-bottom: 10px;
}
body{
  margin-top: 150px;
  background: url(../assets/Coins.png);
  position: fixed;  
  width: 100%;
  height: 100%; 
}
</style>