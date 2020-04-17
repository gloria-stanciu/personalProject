<template>
    <button  >{{name}}</button>
</template>

<script>
export default {
    name: "Button",
    props:{
        name: String,
    }
}
</script>

<style scoped>
   button{
     background-color: #138F56;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
   }
</style>