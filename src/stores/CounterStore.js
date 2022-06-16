import {defineStore} from 'pinia'

export const useCounterStore = defineStore('CounterStore', {
  // state
  state() {
    return {
      counter: 1
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
