import Router from "preact-router";
import Home from "../pages/home";
import PostIndex from "../pages/posts";
import PostCreate from "../pages/posts/create";
import PostEdit from "../pages/posts/edit";

function Routes() {
  return (
    <Router>
      <Home path="/" />
      <PostIndex path="/daftarproduk" />
      <PostCreate path="/daftarproduk/create" />
      <PostEdit path="/daftarproduk/edit/:id" />
    </Router>
  );
}

export default Routes;
