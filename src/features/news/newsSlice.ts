import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { sub } from "date-fns";

const initialState = [{}];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
