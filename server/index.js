import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";
import { Provider } from "react-redux";
import createStore, { initializeSession } from "../src/store";
import Home from "../src/pages/Home";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/*", (req, res) => {
  const store = createStore();

  const dataRequire = store.dispatch(Home.serverFetch());

  Promise.resolve(dataRequire)
    .then(() => {
      const jsx = (
        <Provider store={store}>
          <App />
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

function htmlTemplate(reactDom, reduxState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
