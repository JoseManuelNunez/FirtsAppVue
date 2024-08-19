<template>
  <h1 class="text-3xl font-bold underline">mi primera app</h1>
  <hr />
  <myCounter :value="41" />
  <myCounterScript :value="64" />
  <myCounterScript2 :value="55" />
</template>

<script lang="ts" setup>
import myCounter from './components/myCounter.vue';
import myCounterScript from './components/myCounterScript.vue';
import myCounterScript2 from './components/my-counter0script/myCounterScript2.vue';
</script>
