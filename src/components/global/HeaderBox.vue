<template>
    <div id="header_box" class="header_box">
      <div class="header_box_inner">
        <header-box-left></header-box-left>
        <header-box-right></header-box-right>
      </div>
    </div>
</template>

<script>
    import HeaderBoxLeft from "./headerbox/HeaderBoxLeft";
    import HeaderBoxRight from "./headerbox/HeaderBoxRight";
    export default {
        name: "HeaderBox",
      components: {HeaderBoxRight, HeaderBoxLeft}
    }
</script>

<style scoped>

  .header_box{
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    height: 40px;
    background-color: #000000;
  }
  .header_box .header_box_inner{
    width: 1215px;
    margin: 0 auto;
    height: 40px;
    background-color: black;
    display: flex;
    justify-content: space-between;
  }

</style>
