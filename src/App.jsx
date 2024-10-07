import Postlist from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <Postlist isPosting={isModalOpen} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
}

export default App;
