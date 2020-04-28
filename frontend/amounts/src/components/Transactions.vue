<template>
  <header>
    <div>Transactions<button>See all</button></div><hr class="menu-line" noshade>
    <table>
        <tr>
          <td><span style="font-weight:700; font-size: 20px; float:left; padding-top: 5px">{{main}}</span></td>
          <td class="left" rowspan="2"><span style="float:right; font-size: 24px; font-weight: 700;">{{amount}}</span></td>
        </tr>
        <tr><span style="float:left; color: #B6B5B5; font-size:13px"> {{date}}</span></tr> 
    </table>
    <table>
        <tr>
          <td><span style="font-weight:700; font-size: 20px; float:left; padding-top: 5px">{{main}}</span></td>
          <td class="left" rowspan="2"><span style="float:right; font-size: 24px; font-weight: 700;">{{amount}}</span></td>
        </tr>
        <tr><span style="float:left; color: #B6B5B5; font-size:13px"> {{date}}</span></tr> 
    </table>
    <table>
        <tr>
          <td><span style="font-weight:700; font-size: 20px; float:left; padding-top: 5px">{{main}}</span></td>
          <td class="left" rowspan="2"><span style="float:right; font-size: 24px; font-weight: 700;">{{amount}}</span></td>
        </tr>
        <tr><span style="float:left; color: #B6B5B5; font-size:13px"> {{date}}</span></tr> 
    </table>
    <table>
        <tr>
          <td><span style="font-weight:700; font-size: 20px; float:left; padding-top: 5px">{{main}}</span></td>
          <td class="left" rowspan="2"><span style="float:right; font-size: 24px; font-weight: 700;">{{amount}}</span></td>
        </tr>
        <tr><span style="float:left; color: #B6B5B5; font-size:13px"> {{date}}</span></tr> 
    </table>
    <table>
        <tr>
          <td><span style="font-weight:700; font-size: 20px; float:left; padding-top: 5px">{{main}}</span></td>
          <td class="left" rowspan="2"><span style="float:right; font-size: 24px; font-weight: 700;">{{amount}}</span></td>
        </tr>
        <tr><span style="float:left; color: #B6B5B5; font-size:13px"> {{date}}</span></tr> 
    </table>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Transactions",
  components:{
  },
  props: {
    main: null,
    amount: null,
    date: null,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-line{
    margin: 3px 0px;
    border:1.5px solid #F4F4F4;    
}
.left{
  font-weight: 700;
}
table{
    display: inline-table;
    width: 100%;
    padding: 0;
    margin:0;
}
button{
  float: right;
  background: none;
  cursor: pointer;
  color: #138F56;
  font-size: 14px;
  font-weight: 700;
  padding: 0px;
  margin: 12px;
  border: none;
  border-radius: 5px;
   }
header{
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    color:  rgba(63, 63, 63, 0.88);
    width: 100%;
    height: 845px;
    padding: 5px 10px;
    // margin: 10px 0;
    text-align: left;
}
div{
  font-size: 30px;
  color: #686868;
}
</style>
