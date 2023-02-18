import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "./store/users";

import Card from "./components/Card";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModal] = useState({ open: false, id: null });

  const users = useSelector((state) => state.users.users.data);
  const loading = useSelector((state) => state.users.users.isLoading);
  const error = useSelector((state) => state.users.users.isError);
  const dispatch = useDispatch();

  const openModal = (id) => {
    setModal((modalOpen) => {
      return {
        ...modalOpen,
        open: true,
        id,
      };
    });
  };

  const closeModal = () => {
    setModal((modalOpen) => {
      return {
        ...modalOpen,
        open: false,
        id: null,
      };
    });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      {error && <p>Something went wrong!</p>}
      {users &&
        users.map((user) => (
          <Card
            userName={user.name}
            id={user.id}
            openModal={openModal}
            key={user.id}
          />
        ))}
      {modalOpen.open && <Modal closeModal={closeModal} id={modalOpen.id} />}
    </div>
  );
}

export default App;
