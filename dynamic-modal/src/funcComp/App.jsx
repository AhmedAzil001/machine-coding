import { useState } from "react";
import "../App.css";
import Modal from "./Modal";

function App() {
  const d =
    "Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.";

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <h1>This is a Modal Demo</h1>
      {isOpen ? (
        <Modal title={"Modal Title"} description={d} toggleModal={toggleModal} />
      ) : (
        <button onClick={toggleModal}>Open</button>
      )}
    </div>
  );
}

export default App;
