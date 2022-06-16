<template>
  <q-page padding>
    <h4>Pinia-Demo</h4>
    <div class="row q-gutter-sm q-mt-sm">
      <q-input type="number" v-model.number="counterStore.counter"></q-input>
      <q-btn @click="counterStore.counter++">add 1</q-btn>
      <q-btn @click="counterStore.addTen">add 10</q-btn>
    </div>
    <div class="row q-gutter-sm q-mt-sm">
      <p>Counter: {{counterStore.counter}}</p>
      <p>Double Counter: {{counterStore.doubleCounter}}</p>
      <p>Text Counter: {{counterStore.textCounter}}</p>
    </div>
  </q-page>
</template>

<script>
import {useCounterStore} from "stores/CounterStore";

export default {
  setup() {
    return {
      counterStore: useCounterStore()
    }
  },
  // computed: {
  //   doubleCounter() {
  //     return this.counterStore.counter * 2
  //   }
  // }
  // data, methods, computed, etc.
}
</script>
