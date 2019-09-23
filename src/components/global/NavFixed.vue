<template>
    <div id="nav_fixed" class="nav_fixed">
      悬浮导航
    </div>
</template>

<script>
    export default {
        name: "NavFixed"
    }
</script>

<style scoped>
  .nav_fixed{
    width: 40px;
    height: 140px;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: pink;
  }
</style>
