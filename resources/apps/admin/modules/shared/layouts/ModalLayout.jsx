import Modal from 'react-modal';
import '../assets/style/modal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

export const ModalLayout = ({modalIsOpen, children}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};
