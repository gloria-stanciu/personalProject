<template>
  <header>
    <div>{{title}}</div> <hr class="menu-line" noshade>
</header>
</template>

<script>
export default {
  name: "UpcomingEvent",
  components:{
  },
  props: {
    title: null,

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
    margin-bottom: 31px;
    color:  rgba(63, 63, 63, 0.88);
    min-height: 135px;
    width: 100%;
    height: 100%;
    text-align: left;
    }
div{
    font-size: 24px;
}
</style>
