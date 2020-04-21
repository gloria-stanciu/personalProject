<template>
  <header>
    <div><span class="Balance">Balance</span> <a>{{amount}}</a></div>
  </header>
</template>

<script>
export default {
  name: "Balance",
  components:{
  },
  props: {
    amount: null,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
  float: right;
  padding: 0px 10px;
}
header{
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    color:  rgba(63, 63, 63, 0.88);
    min-width: 376px;
    width: 376px;
    padding: 5px 10px;
    // margin: 8px 0;
    text-align: left;
}
div{
  font-size: 30px;
  color: #686868;
}
</style>
