<template>
  <header>
    <div>{{title}}</div> <hr class="menu-line" noshade>
    <table>
        <tr>
            <span style=" color: #B62222; font-weight:700; font-size:15px; float:left; padding-top: 5px">{{main}}</span>
            <span style="color: #686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span>
        </tr>
        <tr>
            <span style="float:left; color: #B6B5B5; font-size:13px"> {{name}}</span>
            <span style="color: #B6B5B5; float:right; font-size: 13px">{{detail}}</span>
        </tr> 
    </table>
    <table>
        <tr>
            <span style=" color: #B62222; font-weight:700; font-size:15px; float:left; padding-top: 5px">{{main}}</span>
            <span style="color: #686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span>
        </tr>
        <tr>
            <span style="float:left; color: #B6B5B5; font-size:13px"> {{name}}</span>
            <span style="color: #B6B5B5; float:right; font-size: 13px">{{detail}}</span>
        </tr> 
    </table>
    <table>
        <tr>
            <span style=" color: #B62222; font-weight:700; font-size:15px; float:left; padding-top: 5px">{{main}}</span>
            <span style="color: #686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span>
        </tr>
        <tr>
            <span style="float:left; color: #B6B5B5; font-size:13px"> {{name}}</span>
            <span style="color: #B6B5B5; float:right; font-size: 13px">{{detail}}</span>
        </tr> 
    </table>
</header>
</template>

<script>
export default {
  name: "UpcomingEvent",
  components:{
  },
  props: {
    title: null,
    main: null,
    name: null,
    amount: null,
    detail: null
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.simple-line{
    margin-top: 3px;
    border: 1px solid #F4F4F4;  ;
}
table{
    display: inline-table;
    width: 100%;
    padding: 0;
    margin:0;
}
.menu-line{
    margin: 3px 0px;
    border:1.5px solid #F4F4F4;    
}
header{
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    color:  rgba(63, 63, 63, 0.88);
    // min-width: 376px;
    min-height: 200px;
    width: 100%;
    height: 100%;  
    padding: 5px 10px;
    text-align: left;
    margin-bottom: 35px;
    }
div{
    font-size: 24px;
}
</style>
