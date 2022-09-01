import React from "react";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";
import CarsList from "./components/Carslist";

export const AuthContext = React.createContext();

function Home() {
  return (
    <>
      <div>Homepage</div>
      <h1>Time to Focus!</h1>
      <Navigation/>
    </>
  );
}

function App() {
  //pasing our state to authcontext
  const user = { name: "tylerJusfly", age: 85 };
  return (
    //any value within this auth context will be available to all components
    <AuthContext.Provider value={user}>
      <section>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<UserProfile />} />
            <Route path="/cars" element={<CarsList/>} />
          </Routes>
        </BrowserRouter>
      </section>
    </AuthContext.Provider>
  );
}

export default App;
