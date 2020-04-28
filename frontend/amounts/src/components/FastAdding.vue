<template>
  <header>
    <form>
        <label>Label</label>
        <br>
        <input v-model="label" type="text" placeholder="Salary" required>
        <br>
        <label>Amount</label>
        <br>
        <input v-model="amount" type="text" placeholder="1000$" required>
        <ButtonGreen class="button1" name="Add income"/>
        <ButtonGreen class="button2" name="Add cost"/>
    </form>
  </header>
</template>


<script>
import ButtonGreen from "@/components/ButtonGreen.vue"
export default {
  name: "FastAdding",
  components:{
      ButtonGreen
  },
  props: {
    label: null,
    amount: null,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button1{
    float:left;
    width: 45%;
}
.button2{
    float: right;
    width: 45%;
}
label{
  padding-top: 10px;
  font-size: 20px;
  color: #3F3F3F;
}
form{
  display: inline-block;
  color:  rgba(63, 63, 63, 0.88);
  // margin: 8px 0px;
  text-align: left;
}
input{
    display: inline-block;
    font-size: 18px;
    padding: 5px 8px;
    margin: 8px 0;
    border: 0.5px solid #DEE4E1;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
}
header{
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    margin-bottom: 35px;
    text-align: left;
}
</style>
