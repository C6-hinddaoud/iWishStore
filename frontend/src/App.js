import "./App.css";
import { Route,Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/login/Login";
import { useEffect ,useState,createContext,useContext } from "react";
import Items from "./components/Items/Items";
import Information from "./components/Info/Info";
import Nav from "./components/Navbar/Nav"
import InforCart from "./components/cart/Cart";
//import Items from "./components/Items/Items";

export const authorContext=createContext()
function App() {
  const[itemInfo,setItemInfo]=useState({})
  const[token,setToken]=useState((localStorage.getItem("token"))||"");
  return (
  
  <authorContext.Provider value={{token,setToken,itemInfo,setItemInfo}}>
  <div className="App">
    
<Routes>
<Route path="/register" element={<Register></Register>}></Route>
<Route path="/login" element={<Login></Login>}></Route>
<Route path="/Item" element={<><Nav></Nav><Items></Items></>}></Route>

<Route path="/info" element={<><Nav></Nav><Information></Information></>}></Route>

<Route path="/mycart" element={InforCart}></Route>
</Routes>


  </div>;
  </authorContext.Provider>
  )
}

export default App;
