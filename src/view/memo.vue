<script setup lang="ts">

</script>

<template>
  <h2>Daily Task</h2>
  <p>something</p>
  <div class="boxContainer">
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      <div style="background-color:blue"></div>
      
  </div>
</template>

<style>
.boxContainer {
    display: grid;
    grid-template-columns: repeat(3,153px);
    grid-template-rows: 40px repeat(4,115px);
    grid-auto-rows: 50px;
    gap: 1em;
}
</style>