// import { FormEvent, useState } from "react";
import NormalForm from "./components/NormalForm/NormalForm";
// import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";

function App() {
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("Clicked");
  // };

  return (
    // <Container>
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
    //     <Modal isOpen={modal} onClose={handleModalClose}>
    //       <Modal.Header>
    //         <h4>This is Modal Title</h4>
    //         <Modal.CloseButton />
    //       </Modal.Header>
    //       <form onSubmit={handleSubmit}>
    //         <button type="submit">Submit</button>
    //       </form>
    //     </Modal>
    //   </div>
    // </Container>
    <Container>
      <NormalForm />
    </Container>
  );
}

export default App;
