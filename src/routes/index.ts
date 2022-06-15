const LOGIN = "/login";

const HOME = "/home";

const NEWS = "/";

const FUNDING = "funding";

const COUNTER = "/counter";

const POSTS = "/posts";
const POST_ADD = `${POSTS}/create`;
const POST_EDIT = `${POSTS}/update`;
const POST_DETAIL = `${POSTS}/detail`;

const routes = {
  login: LOGIN,
  home: HOME,
  news: NEWS,
  funding: FUNDING,
  posts: POSTS,
  addPost: POST_ADD,
  editPost: POST_EDIT,
  postDetail: POST_DETAIL,
  counter: COUNTER,
};

export default routes;
