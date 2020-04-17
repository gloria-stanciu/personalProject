<template>
  <header>
    <div><span class="Balance">Balance</span> <a>{{amount}}$</a></div>
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
    margin-top: 100px;
    color:  rgba(63, 63, 63, 0.88);
    min-width: 396px;
    min-height: 71px;
    padding: 11px 12px 5px;
    margin: 8px 0;
    text-align: left;
}
div{
  margin-top: 11.5px;
  font-size: 30px;
  color: #686868;
}
</style>
