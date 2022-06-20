import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function AddItem({ newItem, setNewItem, handleSubmit, addItem }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function submitHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="actions">
        <button className="btn" onClick={submitHandler}>
          Add Item
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          addItem={addItem}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default AddItem;
