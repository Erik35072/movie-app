import { createBrowserRouter } from "react-router-dom";
import { MainPage, MoviePage, NotFoundPage } from "./pages";
import Layout from "./components/layout";

interface Routes {
  path: string;
  Component: () => JSX.Element;
  withLayout: boolean;
}

const routes: Routes[] = [
  { path: "/", Component: MainPage, withLayout: true },
  { path: "/movie/:id", Component: MoviePage, withLayout: true },
  { path: "*", Component: NotFoundPage, withLayout: false }
];

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

export default router;
