<template>
    <button >{{name}}</button>
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
     /* background-color: #ffffff; */
     padding: 10px 10px;
     cursor: pointer;
     border: none;
     border-radius: 5px;
     color: #138F56;
     font-weight: 600;
     position: relative;
     font-size: 15px;
     text-align: center;
     margin: 2px 2px;
   }
</style>