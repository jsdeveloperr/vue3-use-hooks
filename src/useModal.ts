import { useState } from './useState';

/**
 * This function is used in reactive modal.
 * @param {initial} - The initial argument is the state used during the initial render.
 * @returns - visible, setVisible, current, openModal, closeModal
 */

const useModal = (initItem = {}, initVisible = false) => {
  const [visible, setVisible] = useState(initVisible);

  const [current, setCurrent] = useState(initItem);

  const openModal = (item:any) => {
    setCurrent(item);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setCurrent();
  };

  return { visible, setVisible, current, openModal, closeModal };
};

export default useModal;