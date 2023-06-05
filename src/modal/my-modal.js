import React, { useState } from 'react';
import Modal from './modal';

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className='modal-btn' onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && (
        <Modal closeModal={closeModal}>
          <p>apna component</p>
        </Modal>
      )}
    </>
  );
};
export default MyModal;
