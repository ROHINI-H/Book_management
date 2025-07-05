import "./Components/style.css"
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState("Rohini");
  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </>
  )
}

export default App;