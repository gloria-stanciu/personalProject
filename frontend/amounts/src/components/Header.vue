<template>
<div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  background-color: #138f56;
  font-weight: 100;
  font-size: 15px;
  text-align: left;
  color: #ffffff;
  display: inline-flex;
  padding-left:70px;
}
</style>
