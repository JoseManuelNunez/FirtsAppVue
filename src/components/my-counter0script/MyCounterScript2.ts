import { useCounter } from '@/composables/useCounter';
import { computed, ref, defineComponent } from 'vue';


export default defineComponent({
  props: {
    value: {type: Number, required: true}
  },
  setup(props) {
    const { counter, squareCounter } = useCounter()


  return {
    counter,
    squareCounter
  }
  }
})
