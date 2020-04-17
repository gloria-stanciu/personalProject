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
  name: "Balance",
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
}
.button2{
    float: right;
}
label{
  padding-top: 10px;
  font-size: 20px;
  color: #3F3F3F;
}
form{
    // border: 1.5px solid #DEE4E1;
  display: inline-block;
  color:  rgba(63, 63, 63, 0.88);
  margin: 8px 0;
  text-align: left;
}
input{
    display: inline-block;
  font-size: 18px;
  padding: 12px 12px;
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
    margin-top: 100px;
    min-width: 396px;
    min-height: 217px;
    padding: 11px 12px 5px;
    margin: 8px 0;
    text-align: left;
}
</style>
