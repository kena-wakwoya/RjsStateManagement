import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CakeContainer from "./component/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
