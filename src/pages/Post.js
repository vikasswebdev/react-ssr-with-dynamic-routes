import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostData } from "../store";
import { useParams, parsePath } from "react-router-dom";

const Post = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchPostData(id);
  }, [props]);

  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>{props.posts.userId}</li>
        <li>{props.posts.id}</li>
        <li>{props.posts.title}</li>
        <li>{props.posts.body}</li>
      </ul>
    </div>
  );
};

Post.serverFetch = (id) => {
  return fetchPostData(id);
};

const mapStateToProps = (state) => ({
  posts: state.data,
});

// const mapDispatchToProps = {
//   fetchPostData,
// };

const mapDispatchToProps = {
  fetchPostData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
