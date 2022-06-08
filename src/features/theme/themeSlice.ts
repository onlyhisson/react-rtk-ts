import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type ThemeType = "light" | "dark";

const initialState: ThemeType = "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggled: {
      reducer: (state, action: PayloadAction<any>) => {
        state = action.payload;
      },
      prepare: (type: ThemeType) => {
        return {
          payload: type,
        };
      },
    },
  },
});

export default themeSlice.reducer;
