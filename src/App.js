import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import Login from "./Pages/Login/Longin/Login";
import Register from "./Pages/Login/Register/Register";
import NotFount from "./Pages/Shared/NotFount/NotFount";
import Inventory from "./Pages/Inventory/Inventory";
import ManageItems from "./Pages/ManageItems/ManageItems/ManageItems";
import InventoryDetail from "./Pages/Home/InventoryDetail/InventoryDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventoryItem/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
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
