import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { IPost } from "./interfaces/post.interface";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    user: "1",
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // prepare & reducer 참고, https://redux-toolkit.js.org/api/createslice
    postAdded: {
      reducer: (state, action: PayloadAction<IPost>) => {
        state.push(action.payload);
      },
      prepare: (title: string, content: string, userId: string) => {
        // prepare callback은 복수의 인자,
        // 랜덤 유니크 id, 기타 동기 로직 실행이 가능
        // https://redux.js.org/tutorials/essentials/part-4-using-data
        return {
          payload: {
            id: nanoid(), // 위 리듀서에 랜덤 숫자 코드는 넣지 않는다.
            title,
            content,
            date: new Date().toISOString(),
            user: userId,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content }: IPost = action.payload;
      const existringPost = state.find((post) => post.id === id);
      if (existringPost) {
        existringPost.title = title;
        existringPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export const selectOrderedPosts = (state: RootState): IPost[] => {
  const posts: IPost[] = state.posts;
  return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
};

export const selectPostOne =
  (postId: string | undefined) => (state: RootState) => {
    const post = state.posts.find(
      (post: { id: string | undefined }) => post.id === postId
    );
    if (!post) {
      return {
        id: "",
        title: "",
        content: "",
        date: "",
      };
    }
    return post;
  };

export default postsSlice.reducer;
