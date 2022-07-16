# Vue3 Use Hooks

<p align="center">Reusability and Composition functions.</p>

## :sunflower: Introduction

Vue Use Hooks implemented as vue composition functions.

## :package: Installation

```bash
# install with yarn
yarn add vue3-use-hooks
# install with npm
npm install vue3-use-hooks
```

## :sparkles: useModal

```vue
<script setup lang="ts">
import { useModal } from 'vue3-use-hooks';

const contrubitors = [
    {
    id: 1,
    emoji: '👨',
    fullname: 'Abdulnasır Olcan',
    programmer: 'Frontend Developer',
    },
    {
    id: 2,
    emoji: '👩',
    fullname: 'Büşra Şanlıbayrak',
    programmer: 'Frontend Developer',
    },
    {
    id: 3,
    emoji: '🧑‍',
    fullname: 'Mehmet Varol',
    programmer: 'Frontend Developer',
    },
];
const { visible, setVisible, current, openModal, closeModal } = useModal();

const handleButton = () => {
    openModal(contrubitors);
    setVisible(true);
};
</script>

<template>
  <div class="modal-vue">
    <!-- button show -->
    <button class="btn fourth" @click="handleButton">show model</button>

    <!-- overlay -->
    <div class="overlay" v-if="visible"></div>

    <!-- modal -->
    <div class="modal" v-if="visible">
      <div class="modal-header">Modal Header</div>
      <button class="close" @click="closeModal">x</button>
      <div class="modal-content" v-for="contrubitor in current" :key="contrubitor.id">
        <ul>
          <li>
            <p>{{ contrubitor.emoji }}</p>
            <h1>{{ contrubitor.fullname }}</h1>
            <span>{{ contrubitor.programmer }}</span>
          </li>
        </ul>
      </div>
      <div class="modal-footer">Modal Footer</div>
    </div>
  </div>
</template>
```

## :sparkles: useState

```vue
<script setup lang="ts">
import { useState } from 'vue3-use-hooks';
const [count, setCount] = useState(0);

</script>

<template>
  <div>
    <p><b>Count: </b> {{ count }}</p>
    <button class="fourth" @click="setCount(count - 1)">Decrement</button>
    <button class="fourth" @click="setCount(count + 1)">Increment</button>
  </div>
</template>
```

## :sparkles: useStringCase

```vue
<script setup lang="ts">
import { reactive } from 'vue';
import { useStringCase } from 'vue3-use-hooks';

const state = reactive({
    name: 'imelda white',
    gender: 'female',
    company: 'NEUROCELL',
    email: 'Imeldawhite@nr.com',
    balance: '3,814.49',
    about: 'Veniam fugiat pariatur adipisicing do consequat.',
    address: 'bulwer place, lemoyne, district of columbia, 5597',
});

const { camelCase, kebabCase, pascalCase, upperCase, lowerCase, sentenceCase, capitalizeCase } = useStringCase();

</script>

<template>
   <div>
    <p><b>CamelCase: </b>{{ camelCase(state.about) }}</p>
    <p><b>CapitalizeCase: </b>{{ capitalizeCase(state.name) }}</p>
    <p><b>SentenceCase: </b>{{ sentenceCase(state.company) }}</p>
    <p><b>KebabCase: </b>{{ kebabCase(state.balance) }}</p>
    <p><b>PascalCase: </b>{{ pascalCase(state.address) }}</p>
    <p><b>LowerCase: </b>{{ lowerCase(state.email) }}</p>
    <p><b>UpperCase: </b>{{ upperCase(state.gender) }}</p>
  </div>
</template>
```

## License

MIT
