import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Longin/Login";
import NotFount from "./Pages/Shared/NotFount/NotFount";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<RequireAuth></RequireAuth>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="'/signup" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
