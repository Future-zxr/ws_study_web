<template>
    <div id="header_box_right_login_yes" class="header_box_right_login_yes">
      <span><router-link class="router_link" to="/my">Logined</router-link></span>
    </div>
</template>

<script>
    export default {
        name: "HeaderBoxRightLoginYes"
    }
</script>

<style scoped>
  .router_link{
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    line-height: 30px
  }
  .header_box_right_login_yes {
    width: 100px;
    height: 30px;
    text-align: center;
  }
</style>
