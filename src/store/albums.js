import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("albums/getAlbums", async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/albums`
    );
    return res.data;
  } catch (err) {
    return err;
  }
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: {
      data: null,
      isLoading: false,
      isError: false,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.albums = {
        isLoading: true,
        data: null,
        isError: false,
      };
    });

    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.albums = {
        isLoading: false,
        data: action.payload,
        isError: false,
      };
    });

    builder.addCase(fetchAlbums.rejected, (state) => {
      state.albums = {
        isLoading: false,
        data: null,
        isError: true,
      };
    });
  },
});

export default albumsSlice.reducer;
