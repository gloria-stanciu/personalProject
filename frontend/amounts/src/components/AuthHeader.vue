<template>
  <v-app-bar class="header" window color=#138f56 height=60px>
    <span style="float:left; margin-left:60px; color:#fff; font-size:24px; font-weight:700">
      <router-link style="text-decoration:none; color:#fff; margin-right:60px" to="/">{{ msg }}</router-link>
    </span>
      <router-link style="text-decoration:none; color:#fff; font-size:20px; float:left; margin-left:30px;" to="/income">Income</router-link>
      <router-link style="text-decoration:none; color:#fff; font-size:20px; float:left; margin-left:30px;" to="/costs">Costs</router-link>
      <router-link style="text-decoration:none; color:#fff; font-size:20px; float:left; margin-left:30px;" to="/debts">Debts</router-link>
      <router-link style="text-decoration:none; color:#fff; font-size:20px; float:left; margin-left:30px;" to="/goals">Goals</router-link>
    <v-spacer></v-spacer>
      <v-btn style="float:right; margin-right:60px; font-weight: 700; color:#138F56" depressed regular color=#fff>
        <router-link style="text-decoration:none; color:#138f56" to="/signUp">Sign up</router-link>
      </v-btn>
      <v-btn style="float:right; margin-right:60px; font-weight: 700; color:#138F56" depressed regular color=#fff class="#138F56--text">
        <router-link style="text-decoration:none; color:#138f56" to="/login">Log in</router-link>
      </v-btn>
  </v-app-bar>
</template>


<script>
export default {
  name: "AuthHeader",
  components:{
  },
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header{
  position: fixed;
  background-color: #138F56;
  top: 0px;
  margin: 0px auto;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
