import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
  state() {
    return {
      todos: ['nix drin']
    }
  }
})
