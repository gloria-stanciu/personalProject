<template>
<body>
<HeaderAndPageBackground msg="Amounts">
</HeaderAndPageBackground>
 <div>
    <h1>Manage your money!</h1>
    <h2>Easy, fast and all in one place!</h2>
    <h3>Track your debts, create goals and keep track of your costs.<br><span style="color: #138f56">Sign up now!</span></h3>
  </div>
</body>
</template>

<script>
import HeaderAndPageBackground from "@/components/HeaderAndPageBackground.vue";


export default {
  name: "Default",
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
  margin-bottom: auto;
  background: url(../assets/Coins.png);
  position: fixed;
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
}
</style>