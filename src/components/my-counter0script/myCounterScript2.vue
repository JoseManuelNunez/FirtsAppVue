<template>
    <section>
      <h3>Couner: {{ counter }}</h3>
      <h3>Squere: {{ squareCounter }}</h3>
  
      <div>
        <button @click="counter = counter + 1">+1</button>
        <button @click="counter = counter - 1">-1</button>
      </div>
    </section>
  </template>
  
  <script lang="ts" src="./MyCounterScript2.ts">
  </script>
  
  <style scoped> 
  h1 {
    color: aqua;
  }
  </style>
  