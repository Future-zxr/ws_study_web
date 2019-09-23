<template>
    <div id="index" class="index">
      <header-box></header-box>
      <router-view></router-view>
      <footer-box></footer-box>
    </div>
</template>

<script>

    import HeaderBox from "./global/HeaderBox";
    import FooterBox from "./global/FooterBox";
    export default {
        name: "Index",
      components: {FooterBox, HeaderBox},
    }
</script>

<style scoped>
 .index{
    margin: 0;
    padding: 0;
    border: none;
  }
</style>
