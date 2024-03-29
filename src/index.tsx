import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import {Provider} from "react-redux";
import {setupStore, persistor} from "@/store";
import {PersistGate} from "redux-persist/integration/react";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
