import React, { useContext } from "react";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import Modal from "../components/Modal";
import { TaskList } from "../components/Context";
function Home() {
  const { showModal, setShowModal } = useContext(TaskList);
  return (
    <>
      {showModal ? <Modal action={setShowModal} /> : null}
      <Header />
      <Tasks />
    </>
  );
}

export default Home;
