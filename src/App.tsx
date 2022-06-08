import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "features/home/Home";
import { Counter } from "features/counter/Counter";
import { PostsList } from "features/posts/PostsList";
import { AddPostForm } from "features/posts/AddPostForm";
import { SinglePostPage } from "features/posts/SinglePostPage";
import { EditPostForm } from "features/posts/EditPostForm";
import Layout from "./components/layout";
import routes from "routes";
import "./App.css";
import { ThemeProvider } from "context";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.counter} element={<Counter />} />
            <Route path={routes.posts} element={<PostsList />} />
            <Route path={routes.addPost} element={<AddPostForm />} />
            <Route path={routes.postDetail}>
              <Route path=":id" element={<SinglePostPage />} />
            </Route>
            <Route path={routes.editPost}>
              <Route path=":id" element={<EditPostForm />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
