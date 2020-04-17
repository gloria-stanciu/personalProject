<template>
<body>
<AuthHeader msg="AMOUNTS"></AuthHeader>
<FastAdding></FastAdding>
</body>
</template>

<script>
// @ is an alias to /src
import AuthHeader from "@/components/AuthHeader.vue";
import FastAdding from "@/components/FastAdding.vue";

export default {
  name: "Home",
  components: {
    AuthHeader,
    FastAdding
  },
};
</script>

<style scoped lang="scss">
body{
  margin-top: 50px;
  margin-bottom: 150px;
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%; 
  background: #F4F4F4;
}
</style>