import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Inventory from "./Pages/Inventory/Inventory";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import Login from "./Pages/Login/Longin/Login";
import Register from "./Pages/Login/Register/Register";
import NotFount from "./Pages/Shared/NotFount/NotFount";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<RequireAuth></RequireAuth>}></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
