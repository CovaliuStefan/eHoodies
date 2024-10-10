import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Images from "../../data2/images/index.js";
import "./itemCard_css.css"
import {handleUpdateFavorites} from "../../../firebase/utils";

function ItemCard({item, currentUser, favorite}){
    const [imageNumber,setImageNumber]=useState(0);
    return(
        <div className="ItemCard" onMouseEnter={()=>setImageNumber(1)} onMouseLeave={()=>setImageNumber(0)}>
            {item.category && <>
            <Link to={`/2/item/gen=${item.gen}&category=${item.category[item.category.length-1]}&name=${item.name}&color=${item.colors[0]||'color'}&id=${item.id}&groupId=${item.groupId}`}>
           {/* <img className="Image" src={item.image[imageNumber]} alt=""/> */}
           <img className="Image" src={require(`../../data2${item.image[imageNumber]}`)} alt=""/>
           {/* <img className="Image" src={require(`../../data2${item.image[imageNumber]}`).default} alt=""/> */}
            </Link>
            <div onClick={()=>handleUpdateFavorites(currentUser,item.id)} className={favorite?`AddToFavorites fa fa-heart`:`AddToFavorites fa fa-heart-o`}></div>
           <p className="Name">{item.name}</p>
           <p className="Price">{item.price}</p>
           <div className="Colors">
            {item.colors ? item.colors.map((i,index)=>{
                return <div className="LittleColor" key={index} style={{backgroundColor:`#${i}`, width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>
            }) : ''}
            </div>  
            </>}
        </div>
    )
}

export default ItemCard;