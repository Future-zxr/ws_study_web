<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  name: 'app',
  components: {Login},
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    /*min-height: ;*/
  }
</style>
