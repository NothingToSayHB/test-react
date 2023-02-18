import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users";
import albumsReducer from "./albums";
import postsReducer from "./posts";

export default configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
    posts: postsReducer,
  },
});
