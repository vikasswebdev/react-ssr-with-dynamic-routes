import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../store";

const Home = (props) => {
  // useEffect(() => {
  //   if (props.posts.length <= 0) {
  //     props.fetchData();
  //   }
  // }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {props.posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <li key={post.id}>{post.title}</li>
          </Link>
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
