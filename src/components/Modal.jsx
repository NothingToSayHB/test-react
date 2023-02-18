import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../store/albums";
import Loader from "./Loader";

function Modal({ closeModal, id }) {
  const albums = useSelector((state) => state.albums.albums.data);
  const loading = useSelector((state) => state.albums.albums.isLoading);
  const error = useSelector((state) => state.albums.albums.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums(id));
  }, []);
  console.log(albums);
  return (
    <div className="modal">
      <div className="modal__body">
        {albums && albums.map((album) => <p key={album.id}>{album.title}</p>)}
        {error && <p>something went wrong</p>}
        {loading && (
          <div className="center">
            <Loader />
          </div>
        )}
        <button onClick={closeModal}>close</button>
      </div>
    </div>
  );
}

export default Modal;
