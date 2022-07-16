<template>
  <nav>
    <router-link class="router-list" to="/" active-class="active">useStringCase</router-link>
    <router-link class="router-list" to="/use-local-storage-hook" active-class="active"
      >useLocalStorage</router-link
    >
    <router-link class="router-list" to="/use-state-hook" active-class="active"
      >useState</router-link
    >
    <router-link class="router-list" to="/use-modal-hook" active-class="active"
      >useModal</router-link
    >
  </nav>
  <router-view class="padding"></router-view>
  <footer>
    <p>
      🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and @Vue3UseHooks contributors
    </p>
  </footer>
</template>

<style scoped>
.router-list {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 0.3rem solid #42b983;
  color: #666;
  padding: 0.5em 1em;
}
.padding {
  padding: 1em 2em;
}
</style>
