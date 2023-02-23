
import "./stely.css"
import { useNavigate } from "react-router-dom"
import { authorContext } from "../../App"
import { useContext } from "react"
const Nav=()=>{
    const author=useContext(authorContext)
    const token=author.token
    const setToken=author.setToken
   const myOrder=()=>{
        navgate("/mycart")
    }
const logout=()=>{
    localStorage.clear();
    setToken(null)


    navgate("/login")
}

const navgate=new useNavigate()
    return(
        <div className="mainNav">

<div onClick={()=>{navgate("/Home")}} className="mNav logh"><img src="https://res.cloudinary.com/ddsrkj1dx/image/upload/v1677127565/blue_repicthousebase_1484336386-1_d6xet3.png" ></img></div>
<div className="mNav" onClick={()=>{navgate("/About")}}>About </div>
<div className="mNav"onClick={()=>{navgate("/Contact")}}>Contact</div>
{/* <div className="mNav"onClick={()=>{navgate("/GetApi")}}>Advertisement </div> */}
<div className="mNav"onClick={()=>{navgate("/intro")}}>Introduction</div>
<div className="mNav log"><img src="https://res.cloudinary.com/ddsrkj1dx/image/upload/v1677127010/logout-icon-vector-21679682_mdtxcq.jpg" onClick={logout}></img>
</div>
<div onClick={myOrder}><i  class='fas fa-shopping-cart mNav' ></i></div>
<div className="mNav cartSpan" ><span  className="cartSpan"></span> </div>


        </div>
    )
}
export default Nav