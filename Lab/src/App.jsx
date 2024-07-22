import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeaderComponent from "./Component/HeaderComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpaceScience from "./Component/SpaceScience";
import Mathematics from "./Component/Mathematics";
import HomePage from "./Component/Homepage";
import FooterComponent from "./Component/FooterComponent";
import Login from "./Component/Login";
import Register from "./Component/Register";
import UserDetailComponent from "./Component/UserDetailComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/spacescience" element={<SpaceScience />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/items" element={<Item />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<UserDetailComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
