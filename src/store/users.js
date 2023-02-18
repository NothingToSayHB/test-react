import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (err) {
    return err;
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      data: null,
      isLoading: false,
      isError: false,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.users = {
        isLoading: true,
        data: null,
        isError: false,
      };
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = {
        isLoading: false,
        data: action.payload,
        isError: false,
      };
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.users = {
        isLoading: false,
        data: null,
        isError: true,
      };
    });
  },
});

export default usersSlice.reducer;
