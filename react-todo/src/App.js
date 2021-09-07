import "./App.css";
import { Fragment, useState } from "react";
import TodoItem from "./components/TodoItem";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  const showModalHandler = () => {
    setIsModalShow(true);
  };

  const closeModalHandler = () => {
    setIsModalShow(false);
  };

  return (
    <Fragment>
      {isModalShow && <Modal closeModal={closeModalHandler} />}
      {isModalShow && <Overlay closeModal={closeModalHandler} />}
      <h1>My Todos</h1>
      <TodoItem showModal={showModalHandler} />
    </Fragment>
  );
}

export default App;
