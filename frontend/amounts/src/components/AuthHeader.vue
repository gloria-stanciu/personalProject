<template>
  <header>
    <div>
        <a>{{ msg }}</a>
        <Button name="Income"/>
        <Button name="Costs"/>
        <Button name="Debts"/>
        <Button name="Goals"/>
    </div>
    <ul class="list-right">
      <li class="rigth"><router-link to="/home"><img src="../assets/HomeButton.png"></router-link></li>
      <li class="right"><router-link to="/login"><img src="../assets/MyProfileButton.png"></router-link></li>
    </ul>
  </header>
</template>


<script>
import Button from "@/components/Button.vue";

export default {
  name: "AuthHeader",
  components:{
    Button
  },
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
    position: relative;
    color: #fff;
    text-decoration: none;
    padding-right: 45px;
}
div{
  background-color: #138f56;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  color: #ffffff;
  display: inline-flex;
  padding-left:70px;
}
body{
    position: fixed;
    width: 100%;
    height: auto; /* Used in this example to enable scrolling */
    background-size: initial;
}
header{
  position: fixed;
  background-color: #138F56;
  top: 0px;
  margin: 0px auto;
  padding: 5px;
  width: 100%;
  min-width: 800px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
ul{
    float:right;
  list-style-type: none;
  padding-top: 5px;
  margin: 0;
  text-align: right;
}
li{
  display: inline-block;
  position: relative;
  font-size: 10px;
  padding-right: 10px;
}
</style>
