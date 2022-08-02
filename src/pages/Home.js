import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

const Home = (props) => {
  useEffect(() => {
    if (props.posts.length <= 0) {
      props.fetchData();
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

Home.serverFetch = fetchData;

const mapStateToProps = (state) => ({
  posts: state.data,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
