<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
  <h1>Sign up!</h1>
  <div>
    <br>
    <v-form class="vue-form" ref="form" v-model="valid" lazy-validation>
      <label>Fullname</label>
      <br>
      <input v-model="reg.fullName" type="text" placeholder="John SMITH" required>
      <br>
      <label>Username</label>
      <br>
      <input v-model="reg.username" type="text" placeholder="john.smith" required>
      <br>
      <label>Email</label>
      <br>
      <input v-model="reg.email" type="text" placeholder="john.smith@email.com" required>
      <br>
      <label>Password</label>
      <br>
      <input v-model="reg.password" type="password" placeholder="*****" required>
    </v-form>
      <br><br>
      <v-btn depressed large color=#138F56 class="white--text"  @click="signUp">Create account!</v-btn>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import ButtonGreen from "@/components/ButtonGreen.vue"
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";
import { mapActions, mapState } from 'vuex'

export default {
  name: "signUp",
  components: {
    HeaderAndPageBackground,
  },
  data: function(){
    return{
      reg: {
        fullName: '',
        username: '',
        email: '',
        password: ''}
      }
  },
  methods:{
     ...mapActions(['register']),
    signUp: async function(){
      try{
        const signUp = await this.register(this.reg)
        if(signUp == true)
          this.$router.push({name: "LogIn"})
      }catch(err){
        this.error = err
      }
    },
  }
};
</script>

<style scoped lang="scss">
.white--text{
  color: #fff !important;
  font-weight: 700;
  width: 20%;
  border-radius: 5px;
}
div{
  text-align: center;
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
  min-width: 100%;
  min-height: 100%; 
}
</style>