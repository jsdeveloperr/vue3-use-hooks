import { readonly, ref } from 'vue';

/**
 * This function is used in reactive state.
 * @param {initial} - The initial argument is the state used during the initial render.
 * @returns - state and set
 */

export function useState(initial:any) {
  const state = ref(initial);
  const set = (val:any) => {
    state.value = val;
  };
  return [readonly(state), set];
}
