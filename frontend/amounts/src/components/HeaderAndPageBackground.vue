<template>
  <header>
    <div>
        <a>
            <router-link to="/">{{ msg }}</router-link>
        </a>
    </div>
    <ul>
      <li> <router-link to="/signUp"><Button name="Sign up!"/></router-link></li>
      <li> <router-link to="/login"><Button name="Log in!"/></router-link></li>
    </ul>
  </header>
</template>


<script>
import Button from "@/components/Button.vue";

export default {
  name: "HeaderAndPageBackground",
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
    color: #fff;
    text-decoration: none;
}
div{
  background-color: #138f56;
  font-weight: 100;
  font-size: 24px;
  text-align: left;
  color: #ffffff;
  display: inline-flex;
  padding-left:70px;
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
