<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
  <h1>Log in!</h1>
   <div class="card-header">
    <br>
    <form >
      <label>Username</label>
      <br>
      <input v-model="auth.username" placeholder="john.smith">
      <br>
      <label>Password</label>
      <br>
      <input v-model="auth.password" type="password" placeholder="*****">
    </form>
      <br><br>
      <ButtonGreen @click="login" name="Log in!"></ButtonGreen>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import ButtonGreen from '@/components/ButtonGreen.vue'
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";
import{mapActions} from 'vuex'

export default {
  name: "logIn",
  components: {
  HeaderAndPageBackground,
  ButtonGreen
  },
  data: function(){
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
  display: block;
  text-align: center;
}
form{
  // border: 1.5px solid #DEE4E1;
  box-shadow: 1px 1px 4px 4px #DEE4E1;
  border-radius: 5px;
  background-color: #fff;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  color:  rgba(63, 63, 63, 0.88);
  width: 20%;
  padding: 12px;
  margin: 8px 0;
  text-align: left;
}
input{
  display: inline-block;
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
  margin-bottom: 150px;
  background: url(../assets/Coins.png);
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%; 
}
</style>