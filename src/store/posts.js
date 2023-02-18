import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/getPosts", async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return res.data;
  } catch (err) {
    return err;
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      data: null,
      isLoading: false,
      isError: false,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = {
        isLoading: true,
        data: null,
        isError: false,
      };
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = {
        isLoading: false,
        data: action.payload,
        isError: false,
      };
    });

    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = {
        isLoading: false,
        data: null,
        isError: true,
      };
    });
  },
});

export default postsSlice.reducer;
