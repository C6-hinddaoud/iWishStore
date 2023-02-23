import "./style.css"
import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authorContext } from "../../App";
const Items=()=>{
const[item,setItem]=useState([]);
   useEffect(() => {
      axios
        .get(`http://localhost:5000/getItem`)
        .then((result) => {
          console.log("result", result);
         setItem(result.data.result)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    const navigate = useNavigate();
    const allInfoo=useContext(authorContext)
    const itemInfo=allInfoo.itemInfo
    const setItemInfo=allInfoo.setItemInfo
const delOneItem=()=>{

}
const addOneItem=()=>{
   
}
const addToCart=()=>{
   
}
const goToBuy=()=>{
   
navigate("/info")
}
return(
//    <div className="mainItem">

// <div className="supIteam"></div>

//    </div>

<div className="body-body-body">
      <div className="home-card-category-container">
        {item.length > 0 &&
          item.map((item) => (
            <div>
            <div className="card-category-wrapper">
              <img
                src={item.image}
                alt={item.name}
                className="card-category-image"
              />
              <div className="card-category-intro">
                <h1 className="card-category-intro-title">{item.name}</h1>
                <p
                  className="card-category-intro-p"
                  onClick={() => {
                    dispatch(setCategoryId(item.id));
                    // navigate(`/AddNeedy2/${item.id}`);
                  }}
                >
                  here are our donations in the <br></br>
                  <span>'{item.name}'</span>
                  section .<br></br>
                  <br></br>it's a tender service.to get <br />and feel with each other. 
                </p>
               
              </div>
             
            </div>
            <div className="goToBuy"> <span className="goToBuy">Price: '{item.salary}'</span></div>
            {/* <div><input className="countnum" type={"number"} min="1" ></input></div>
             <div className="card-category-image">
               <button onClick={addOneItem} className="btnmin">-</button>

               <button onClick={addToCart} className="btnAdd">Add</button>
               <button onClick={delOneItem} className="btnInc">+</button>
             </div> */}

             <div><button onClick={()=>{goToBuy
            setItemInfo(item)
            // console.log("jj",item)
            // console.log("p", itemInfo)
            navigate("/info")
            } }className="goToBuy">showMore</button></div>
             
             </div>
          ))}
      </div>
    </div>




)

}

 export default Items