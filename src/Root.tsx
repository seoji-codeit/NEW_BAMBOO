import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import stores from "./stores";
import App from "components/App";

function Root() {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
