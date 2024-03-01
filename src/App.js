import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ResContextProvider from "./context/ResContextProvider";
import { Provider } from "react-redux";
import appStore from "./store/store";

function App() {
  return (
    <Provider store={appStore}>
      <ResContextProvider>
        <div className="App">
          {/* <Main  /> */}
          <Header />
          <Outlet />
        </div>
      </ResContextProvider>
    </Provider>
  );
}

export default App;
