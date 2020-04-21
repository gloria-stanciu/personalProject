<template>
  <header>
    <div>{{title}}</div> <hr class="menu-line" noshade>
    <table>
        <tr>
            <td rowspan="2"><span style="color: rgba(63, 63, 63, 0.88); font-size: 16px; float:left;">{{main}}</span></td>
            <td><span style="color:#686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span></td>
            </tr>
        <tr>
            <td><span style="color: #DEE4E1; float:right; font-size: 13px; font-weight: 500">{{detail}}</span></td>
        </tr> 
    </table>
    <table>
        <tr>
            <td rowspan="2"><span style="color: rgba(63, 63, 63, 0.88); font-size: 16px; float:left; ">{{main}}</span></td>
            <td><span style="color:#686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span></td>
            </tr>
        <tr>
            <td><span style="color: #DEE4E1; float:right; font-size: 13px; font-weight: 500">{{detail}}</span></td>
        </tr> 
    </table>
    <table>
        <tr>
            <td rowspan="2"><span style="color: rgba(63, 63, 63, 0.88); font-size: 16px; float:left;">{{main}}</span></td>
            <td><span style="color:#686868; float:right; font-size: 20px; font-weight: 700">{{amount}}</span></td>
            </tr>
        <tr>
            <td><span style="color: #DEE4E1; float:right; font-size: 13px; font-weight: 500">{{detail}}</span></td>
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
    min-width: 376px;
    min-height: 200px;
    width: 376px;
    padding: 5px 10px;
    // margin: 8px 0;
    text-align: left;
    }
div{
    font-size: 24px;
}
</style>
