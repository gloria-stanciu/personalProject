<template>
<body>
  <header>
    <Header msg="Amounts" />
    <ul>
      <li> <Button name="Sign up!"/></li>
      <li> <Button name="Log in!"/></li>
    </ul>
  </header>
  <div>
    <h1>Manage your money!</h1>
    <h2>Easy, fast and all in one place!</h2>
    <h3>Track your debts, create goals and keep track of your costs.<br> Sign up now!</h3>
  </div>
  </body>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";


export default {
  name: "Default",
  components: {
  Header,
  Button
  }
};
</script>

<style scoped>

h1,h2,h3{
  text-align: center;
  color:  rgba(63, 63, 63, 0.88);
}
h1{
  font-size: 90px;
  font-weight: lighter;
  padding-top: 120px;
}
h2{
  font-size: 40px;
  font-weight: lighter;
  padding-top: 20px;
}
h3{
  font-size: 30px;
  font-weight: lighter;
  padding-top: 150px;
  padding-bottom: 100px;
}
body{
  margin-top: 150px;
  width: 100%;
  height: auto; /* Used in this example to enable scrolling */
  background: url(../assets/Coins.png);
  background-size: initial;
}
header{
  position: fixed;
  background-color: #138F56;
  top: 0px;
  margin: 0px auto;
  padding: 12px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
ul{
  position: relative;
  float: right;
  list-style-type: none;
  padding-right: 70px;
  margin: 0;
  text-align: right;
}
li{
  display: inline-block;
  position: relative;
  font-size: 10px;
  padding-right: 30px;
}
</style>
