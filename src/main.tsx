import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// styles
import "./index.css";
// routing data
import router from "./routes";
// providers
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SnackbarProvider
    autoHideDuration={2000}
    maxSnack={3}
    style={{ maxWidth: "40vw" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <RouterProvider router={router} />
  </SnackbarProvider>
);
