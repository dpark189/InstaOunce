
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, passedProps) => {
  return {
    type: OPEN_MODAL,
    modal,
    passedProps
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
