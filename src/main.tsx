import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Connecting Redux to React
// Wrap the entire App to the provides to use the store in any component.
import { Provider } from "react-redux";
import store from "./state";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      // Wrap <App /> in the Provider
    }
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
