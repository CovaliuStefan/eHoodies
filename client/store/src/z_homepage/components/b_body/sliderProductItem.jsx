import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sliderProductItemCss.css";
import {handleUpdateFavorites} from "../../../firebase/utils";

function SliderProductItem({obj,idx,numberOfItemsToShow,currentUser,favorite}){
    // srcA={obj.image[imageNumberSlider]}
    const [imageNumberSlider,setImageNumberSlider]=useState(0);
    //style={{width:`${(80-numberOfItemsToShow+1)/numberOfItemsToShow}vw`}}
    return(
        <div className="sliderProductItem">
            <div onMouseEnter={()=>setImageNumberSlider(1)} onMouseLeave={()=>setImageNumberSlider(0)} className={`slide-div`} key={idx} >
                <div className="image-container" >
                    <Link to={`/2/item/gen=${obj.gen}&category=${obj.category[obj.category.length-1]}&name=${obj.name}&color=${obj.colors[0]||'color'}&id=${obj.id}&groupId=${obj.groupId}`}>
                    <img className="pointer" src={require(`../../../z_site2/data2${obj.image[imageNumberSlider]}`)} alt="" style={{width:`${window.innerWidth>500?80/numberOfItemsToShow-1:80}vw`}}/>
                    {/* <img className="pointer" src={require(`../../../z_site2/data2${obj.image[imageNumberSlider]}`).default} alt="" style={{width:`${window.innerWidth>500?80/numberOfItemsToShow-1:80}vw`}}/> */}
                    </Link>
                    <div onClick={()=>handleUpdateFavorites(currentUser,obj.id)} className={favorite?`AddToFavorites fa fa-heart`:`AddToFavorites fa fa-heart-o`}></div>
                </div>
                <div className="under-image-container">
                    <p className="Slider-product-name">{obj.name}</p>
                    <p className="Slider-product-price">{obj.price}</p>
                    <div className="Slider-product-colors">
                            {obj.colors ? obj.colors.map((i,index)=>{
                            return <div className="LittleColor" key={index} style={{backgroundColor:`#${i}`, width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>
                            }) : <div className="LittleColorNone" style={{backgroundColor:"rgba(255, 255, 255, 0)", width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SliderProductItem;