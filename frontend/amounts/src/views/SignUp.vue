<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
 <div>
    <h1>Sign up!</h1>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";


export default {
  name: "SignUp",
  components: {
  HeaderAndPageBackground
  }
};
</script>

<style scoped lang="scss">
div{
  text-align: center;
  color:  rgba(63, 63, 63, 0.88);
}
h1{
  font-size: 41px;
  font-weight: lighter;
  padding-top: 50px;
}
body{
  margin-top: 150px;
  width: 100%;
  height: auto;
  background: url(../assets/Coins.png);
  background-size: initial;
}
</style>