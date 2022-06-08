import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { User } from "./interfaces/user.interface";

const initialState = [
  { id: "0", name: "Jenny Park" },
  { id: "1", name: "Lisa Sue" },
  { id: "2", name: "Jeff Buckley" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state: RootState) => state.users;

export const selectUser =
  (userId: string) =>
  (state: RootState): User | undefined => {
    const sUser = state.users.find((user) => user.id === userId);
    return sUser;
  };

export default usersSlice.reducer;
