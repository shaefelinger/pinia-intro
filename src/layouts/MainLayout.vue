<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Counter: {{counterStore.counter}}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {useCounterStore} from "stores/CounterStore";

export default {
setup() {
  return {
    counterStore: useCounterStore()
  }
}
}
</script>
