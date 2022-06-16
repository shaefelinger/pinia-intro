import {defineStore} from 'pinia'
import {useLocalStorage} from "@vueuse/core";

export const useCounterStore = defineStore('CounterStore', {
  // state
  state() {
    return {
      counter: useLocalStorage('myCounter', 1)
    }
  },
  // getters
  getters: {
    doubleCounter() {
      return this.counter*2
    },
    textCounter() {
      return `Der Counter steht bei ${this.counter} !!!`
    }
  },
  // actions
  actions: {
    addTen() {
      this.counter += 10
    }
  }
})
