<template>
    <button type = "type">{{name}}</button>
</template>

<script>
export default {
    name: "Button",
    props:{
        name: String,
        type: String
    }
}
</script>

<style scoped lang="scss">
   button{
       background: none;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        width: 20%;
        padding: 0px 20px;
        margin: 0px 0;
        border: none;
        border-radius: 5px;
        margin-top: 0px;
   }
</style>