import React, { Suspense } from "react";
import path from "path";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";
import { Provider } from "react-redux";
import createStore, { initializeSession } from "../src/store";
import router from "../src/router";
import { StaticRouter } from "react-router-dom/server";
import Post from "../src/pages/Post";

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static("./build"));

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("/*", (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  // const test = router.filter((route) => {
  //   console.log(route.path, req.url);
  //   if (route.path === req.url) {
  //     console.log(route.path);
  //   } else {
  //     console.log("not found");
  //   }
  // });

  // when route.path is dynamic like /post/:id generate a new route object

  var a;

  const test = router
    .filter((route) => {
      if (route.path.includes(":id")) {
        return true;
      }
      return false;
    })
    .map((route) => {
      const newRoute = { ...route };
      const p = req.url.split("/");
      const id = p[p.length - 1];
      a = id;
      newRoute.path = route.path.replace(":id", id);
      return newRoute;
    })
    .filter((route) => {
      if (route.path === req.url) {
        return true;
      }
      return false;
    })
    .map((route) => route.element)
    .filter((route) => route.serverFetch)
    .map((route) => store.dispatch(route.serverFetch(a)));

  const dataRequire = router
    .filter((route) => req.url === route.path)
    .map((route) => route.element)
    .filter((route) => route.serverFetch)
    .map((route) => store.dispatch(route.serverFetch()));

  Promise.all([...dataRequire, ...test])
    .then(() => {
      const jsx = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <App />
            {/* </Suspense> */}
          </StaticRouter>
        </Provider>
      );

      const app = ReactDOMServer.renderToString(jsx);

      const reduxState = store.getState();

      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(htmlTemplate(app, reduxState));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

function htmlTemplate(reactDom, reduxState) {
  return ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script  src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
