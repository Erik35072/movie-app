import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// styles
import "./index.css";
// routing data
import router from "./routes";
// providers
import { SnackbarProvider } from "notistack";
// redux
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { store } from "./providers/store";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        style={{ maxWidth: "40vw" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </PersistGate>
);
