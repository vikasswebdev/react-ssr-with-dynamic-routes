import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route
          key={route.path}
          element={<route.element />}
          path={`${route.path}`}
        />
      ))}
    </Routes>
  );
};

export default App;
