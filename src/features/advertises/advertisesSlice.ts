import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IAdvertisement } from "./interfaces/advertisement.interface";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "타이틀1",
    subTitle: "서브타이틀1",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
  },
  {
    id: "2",
    title: "타이틀2",
    subTitle: "서브타이틀2",
    img: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58",
  },
  {
    id: "3",
    title: "타이틀3",
    subTitle: "서브타이틀3",
    img: "https://images.unsplash.com/photo-1635280370067-59d389602df1",
  },
  {
    id: "4",
    title: "타이틀4",
    subTitle: "서브타이틀4",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35",
  },
];

const newsSlice = createSlice({
  name: "advertises",
  initialState,
  reducers: {},
});

export const selectAdvertises = (state: RootState) => state.advertises;

export default newsSlice.reducer;
