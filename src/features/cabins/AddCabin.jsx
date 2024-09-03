/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, SetIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => SetIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => SetIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => SetIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
