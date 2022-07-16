import { mount } from '@vue/test-utils';
import { mountComposition } from './utils';
import useLocalStorage from '../src/useLocalStorage';
import { nextTick } from 'vue';

const mock = {
  key: 'test',
  value: 'value'
};

beforeEach(() => {
  window.localStorage.clear();
});

describe('useLocalStorage', () => {
  it('should be defined useLocalStorage', () => {
    expect(useLocalStorage).toBeDefined();
  });

  it('should get localStorage value', () => {
    window.localStorage.setItem(mock.key, mock.value);
    const wrapper = mount(
      mountComposition(() => {
        const { value } = useLocalStorage(mock.key);
        return { value };
      })
    );
    nextTick();
    expect(wrapper.vm.value).toEqual(mock.value);
  });

  it('should set localStorage value', () => {
    const wrapper = mount(
      mountComposition(() => {
        const { value } = useLocalStorage(mock.key, mock.value);
        return { value };
      })
    );
    nextTick();
    expect(wrapper.vm.value).toEqual(mock.value);
  });
});
