import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataAbout } from "../store";

const About = (props) => {
  useEffect(() => {
    props.fetchDataAbout();
  }, []);

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

About.serverFetch = fetchDataAbout;

const mapStateToProps = (state) => ({
  posts: state.data,
});

const mapDispatchToProps = {
  fetchDataAbout,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
