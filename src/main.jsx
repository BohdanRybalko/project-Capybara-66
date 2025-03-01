import React from "react"
import ReactDOM from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from "./components/App.jsx"

import { persistor, store } from "./redux"
import "modern-normalize/modern-normalize.css"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
