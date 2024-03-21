import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// styles
import "./index.css";
// routing data
import routes from "./routes";
import Layout from "./components/layout";

const router = createBrowserRouter(
  routes.map(({ path, Component, withLayout }) => ({
    path,
    loader: () => <div>Loading...</div>,
    Component: () =>
      withLayout ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Component />
      )
  }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
