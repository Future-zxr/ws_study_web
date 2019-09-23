<template>
    <div id="note" class="note">
      <span>笔记专栏</span>
    </div>
</template>

<script>
    export default {
        name: "Note",
      data(){
          return{
            user_id:17
          }
      }
    }
</script>

<style scoped>
  div{
    margin: 0;
    padding: 0;
    border: none;
  }
  .note{
    width: 100%;
    height: 800px;
    background-color: greenyellow;
  }

</style>
