<template>
  <q-page padding>
    <h4>Pinia-Demo</h4>
    <div class="row q-gutter-sm q-mt-sm">
      <q-input type="number" v-model.number="counterStore.counter"></q-input>
      <q-btn @click="counterStore.counter++">add 1</q-btn>
    </div>
      <p>{{counterStore.counter}}</p>
  </q-page>
</template>

<script>
import {useCounterStore} from "stores/CounterStore";

export default {
  setup() {
    return {
      counterStore: useCounterStore()
    }
  }
  // data, methods, computed, etc.
}
</script>
