import "./Components/style.css"
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import userContext from "./utils/userContext";

function App() {
  const [userName, setUserName] = useState("Rohini");
  return (
    <>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </userContext.Provider>

    </>
  )
}

export default App;