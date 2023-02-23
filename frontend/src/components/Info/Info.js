import "./style.css"
import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authorContext } from "../../App";
const Information=()=>{
const[item,setItem]=useState([]);
///////////////////////GET
//const cart = []
let cart = JSON.parse(localStorage.getItem("myWatchList")) || []
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
  let sum2
  if(parseInt(document.getElementsByClassName("cartSpan")[1].innerHTML)>=0){
  let sum1= document.getElementsByClassName("countnum")[0].value
  sum2= document.getElementsByClassName("cartSpan")[1].innerHTML
  
  sum2=parseInt(sum1)+parseInt(sum2)
  document.getElementsByClassName("cartSpan")[1].innerHTML=sum2
  document.getElementsByClassName("countnum")[0].value=1
  console.log(sum2)
  } else {

   
      let sum1= document.getElementsByClassName("countnum")[0].value
      document.getElementsByClassName("cartSpan")[1].innerHTML=sum1
       sum2=document.getElementsByClassName("cartSpan")[1].innerHTML
      sum2=parseInt(sum1)+parseInt(sum2)
      console.log(sum2)

  }
}
const goToBuy=()=>{
   
}
return(
//    <div className="mainItem">

// <div className="supIteam"></div>

//    </div>

<div className="body-body-body">
      <div className="home-card-category-container">
       <div>
         
            <div>
            <div className="card-category-wrapper">
              <img
                src={itemInfo.image}
                alt={itemInfo.name}
                className="card-category-image"
              />
              <div className="card-category-intro">
                <h1 className="card-category-intro-title">{itemInfo.name}</h1>
                <p
                  className="card-category-intro-p"
                  onClick={() => {
                    dispatch(setCategoryId(itemInfo.id));
                    // navigate(`/AddNeedy2/${item.id}`);
                  }}
                >
                  here are our donations in the <br></br>
                  <span>'{itemInfo.salary}'</span>
                  section .<br></br>
                  <br></br>it's a tender service.to get <br />and feel with each other. 
                </p>
               
              </div>
              
            </div>
            <span className="goToBuysalary">{itemInfo.salary}</span>
            <div><input className="countnum" type={"number"} min="1" ></input></div>

             <div className="card-category-image">

             
               {/* <button onClick={addOneItem} className="btnmin">-</button> */}

               <button onClick={addToCart} className="btnAdd">Add To Cart</button>
               {/* <button onClick={delOneItem} className="btnInc">+</button> */}
             </div>

             {/* <div><button onClick={goToBuy} className="goToBuy">Add</button></div> */}
             
             </div>
          
      </div>
      </div>
    </div>




)

}

 export default Information