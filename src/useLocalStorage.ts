import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

const useLocalStorage = (storageKey: any, defaultValue = '') => {
  const value = ref(null);
  const init = () => {
    const item = localStorage.getItem(storageKey);
    if (item !== null) {
      value.value = parseItem(item);
      return;
    }
    /* @ts-ignore*/
    value.value = defaultValue;
  };

  const parseItem = (item: any) => {
    let value = null;
    try {
      value = JSON.parse(item);
    } catch {
      value = item;
    }

    return value;
  };

  const handler = (event: any) => {
    if (event.key === storageKey) {
      value.value = event.newValue ? parseItem(event.newValue) : null;
    }
  };

  let initialized = false;

  if (typeof window !== 'undefined') {
    init();
    initialized = true;
  }

  onMounted(() => {
    if (!initialized) {
      init();
    }

    window.addEventListener('storage', handler, true);
  });

  watchEffect(() => {
    if (value.value) {
      localStorage.setItem(storageKey, JSON.stringify(value.value));
    }
  });

  onUnmounted(() => {
    window.removeEventListener('storage', handler);
  });

  const remove = () => {
    try {
      localStorage.removeItem(storageKey);
      value.value = null;
    } catch (error) {
      // localStorage can throw.
      console.error(error);
    }
  };

  return {
    value,
    remove
  };
};

export default useLocalStorage;