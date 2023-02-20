import {StrictMode} from 'react';
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

import {AdminApp} from "./AdminApp";

import {store} from "./store";

ReactDOM.createRoot(document.getElementById('app')).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/panel_admin">
        <AdminApp/>
      </BrowserRouter>
    </Provider>
  // </StrictMode>
)