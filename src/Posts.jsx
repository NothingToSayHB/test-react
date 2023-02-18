import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/posts";
import Loader from "./components/Loader";
import Card from "./components/Card";
import { useParams } from "react-router-dom";

function Posts() {
  const posts = useSelector((state) => state.posts.posts.data);
  const loading = useSelector((state) => state.posts.posts.isLoading);
  const error = useSelector((state) => state.posts.posts.isError);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, []);

  return (
    <div className="Posts">
      {loading && <Loader />}
      {error && <p>Something went wrong!</p>}
      {posts &&
        posts.map((post) => <Card postTitle={post.title} key={post.id} />)}
    </div>
  );
}

export default Posts;
