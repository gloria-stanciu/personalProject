<template>
  <body><link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
  <div id="app">
    <router-view />
  </div>
  </body>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
 font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
