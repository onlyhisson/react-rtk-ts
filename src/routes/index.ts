const HOME = "/";

const POSTS = "/posts";
const POST_ADD = `${POSTS}/create`;
const POST_EDIT = `${POSTS}/update`;
const POST_DETAIL = `${POSTS}/detail`;

const routes = {
  home: HOME,
  posts: POSTS,
  addPost: POST_ADD,
  editPost: POST_EDIT,
  postDetail: POST_DETAIL,
};

export default routes;
