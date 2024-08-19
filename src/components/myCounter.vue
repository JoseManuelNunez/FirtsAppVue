<template>
    <section>
      <h3>Couner: {{ counter }}</h3>
      <h3>Squere: {{ squareCounter }}</h3>
  
      <div>
        <button class="p-5 bg-blue-500 mr-2 hover:bg-blue-700 rounded-lg" @click="counter = counter + 1">+1</button>
        <button class="p-5 bg-red-500 hover:bg-red-700 rounded-lg" @click="counter = counter - 1">-1</button>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

  const { counter, squareCounter } = useCounter()
  // import { computed, ref } from 'vue';

  // interface IProps {
  //   value: number
  // }
  
  //  const props = defineProps<IProps>()
  
  // const counter = ref(props.value);
  // const squareCounter = computed(() => counter.value * counter.value)
  </script>
  
  <style scoped>
  h1 {
    color: aqua;
  }
  </style>
  