<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
  <h1>Sign up!</h1>
  <div>
    <br>
    <form>
      <label>Fullname</label>
      <br>
      <input v-model="fullname" placeholder="John SMITH">
      <br>
      <label>Username</label>
      <br>
      <input v-model="username" placeholder="john.smith">
      <br>
      <label>Email</label>
      <br>
      <input v-model="email" placeholder="john.smith@email.com">
      <br>
      <label>Password</label>
      <br>
      <input v-model="password" type="password" placeholder="*****">
    </form>
      <br><br>
      <button> Create account!</button>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";
import Button from "@/components/Button.vue"

export default {
  name: "SignUp",
  components: {
  HeaderAndPageBackground
  }
};
</script>

<style scoped lang="scss">
div{
  display: block;
  text-align: center;
}
form{
  border: 1.5px solid #DEE4E1;
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
button{
  background-color: #138F56;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}
</style>