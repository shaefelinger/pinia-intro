import { defineStore } from 'pinia';
import axios from 'axios'

export const useTodoStore = defineStore('TodoStore', {
  state() {
    return {
      todos: ['nix drin']
    }
  },
  actions: {
    async fetchData() {
      try {
        this.todos=await axios.get('https://jsonplaceholder.typicode.com/todos')
      } catch(error) {
        // error handling
      }
    }
  }
})
