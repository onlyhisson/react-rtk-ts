import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import postsReducer from "features/posts/postsSlice";
import usersReducer from "features/users/usersSlice";
import themeReducer from "features/theme/themeSlice";
/**
 * 비동기 함수 처리를 위해 thunk 리덕스 함수룰 사용해야하는데
 * 이때 redux-thunk 미들웨어를 리덕스 store 생성시 추가해야 한다.
 * configureStore 함수는 이미 자동으로 이 세팅이 되어 있어서 thunks 를 사용할 수 있다.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
