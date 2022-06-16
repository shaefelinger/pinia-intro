# Pinia

## Was ist Pinia?

Neue State-Management-Library - offizieller Nachfolger von VUEX

[https://pinia.vuejs.org/](https://pinia.vuejs.org/)

### Vorteile (gegenüber VUEX)

- Einfachere Syntax - keine Mutations, kein überflüssiger Boilerplate-Code
- Modular ohne Konfiguration
- DevTools Support
- TypeScript Support
- klein, ca. 1kb

------

## Install

[Zu Quasar hinzufügen](https://quasar.dev/quasar-cli-vite/state-management-with-pinia)

```text
quasar new store <store_name>
```

> ##### quasar cli muss aktuell sein :
>
> check mit `quasar info` :
>
> ```
> ...
> @quasar/app-webpack
> ...
> ```
>
> Update mit:
>
> ```text
> npm i -d @quasar/cli@latest
> // oder:
> yarn global add @quasar/cli
>
> quasar upgrade -i
> ```

------

## Store definieren

```js
defineStore('<StoreName>', { <config> })
```

z.B `/stores/CounterStore.js`

```js
import { defineStore } from "pinia";

export const useCounterStore = defineStore('CounterStore', {
    // state
    // getters
    // actions
})
```

##### Convention:

- im `stores`-folder
- defineStore -  gleicher Name wie Filename
- Export-Variable-name:  `use` -prefix

### State

```js
state() {
    return {
      counter: 1,
    };
  },
```

> Funktion, returns Object (wie z.B. data in Options-Api)

## State im Component benutzen

```vue
<template>
	<h6>{{counterStore.counter}}</h6>
</template>

<script>
import {useCounterStore} from 'stores/CounterStore.js'

export default {
  setup() {
    return {
      counterStore: useCounterStore();
    }
  }
}
</script>
```

- In Options-API, `setup()` wie Lifecycle-hook verwenden

- in `<template>` direkt verwenden: `counterStore.counter`

- im Code mit `this.`  z.B. computed

  ```js
  computed: {
   		doubleCounter() {
        return this.counterStore.counter * 2;
      },
  ```

## Getters

```js
getters: {
    doubleCounter() {
      return this.counter * 2;
    }
 },
```

> wie computed-property: gibt einen berechneten Wert zurück

## Actions

ändern den Store

```js
actions: {
  addTen() {
    this.counter += 10;
  },
}
```

## Async Actions

Beispiel mit axios:

```js
import { defineStore } from 'pinia';
import axios from'axios'

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

```

------

### Reset

```js
todoStore.$reset()
```

------

## Persistent State

VueUse - Sammlung von Utlility-composables

[https://vueuse.org/](https://vueuse.org/)

installieren:

```
npm i @vueuse/core
// oder
yarn add @vueuse/core
```

Im Store:

```js
import {useLocalStorage} from '@vueuse/core';
...
  state() {
    return {
      counter: useLocalStorage("myCounter", 1),
    };
  },
```

------

## Hot Module Replacement

Weniger reloaden im Development:

import `acceptHMRUpdate`   und am Ende des Stores hinzufügen:

```js
import { defineStire, acceptHMRUpdate } from 'pinia'
...

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(<StoreName>, import.meta.hot))
}
```

https://pinia.vuejs.org/cookbook/hot-module-replacement.html
