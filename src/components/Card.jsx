import { Link } from "react-router-dom";

function Card({ userName, postTitle, id, openModal }) {
  const userBody = (
    <>
      <Link to={`/posts/${id}`} className="card__button">
        posts
      </Link>
      <button onClick={() => openModal(id)} className="card__button">
        albums
      </button>
    </>
  );

  return (
    <div className="card">
      <p>{userName ? userName : postTitle}</p>
      {userName && userBody}
    </div>
  );
}

export default Card;
