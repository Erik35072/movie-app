import { MainPage, MoviePage, NotFoundPage } from "./pages";

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

export default routes;
