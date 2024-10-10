import React, { useState } from "react";
// import Images from "../../../z_site2/data2/images/index.js";
import "./banner_home_css.css";
// import item_data from "../../../z_site2/data2/items-data.js";
import banners_data from "../../data/banners-data.js";

function Banner_home(){
    // const images=[]
    // for (var key of Object.keys(Images)) {
    //     images.push(Images[key])
    // }
    // images.shift()
    const [slideIndex, setSlideIndex] = useState(1)

    function nextSlide(){
    
        if(slideIndex !== banners_data.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === banners_data.length){
            setSlideIndex(1)
        }
    }

    function prevSlide(){
        
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(banners_data.length)
        }
    }
    return(
        <div className="Slider">
            {/* <img src={Images.image3} alt="" /> */}
            <div className="banner_container">
            {banners_data.map((obj,idx)=>{
                return(
                    <div className={slideIndex === idx +1 ? "slide active-slide" : "slide"} key={idx}>
                        {slideIndex ===idx +1 && (<img src={obj.imageNoDefault} alt=""/>)}
                        {/* {slideIndex ===idx +1 && (<img src={obj.image} alt=""/>)} */}
                        {/* <img src={obj.image} alt=""/> */}
                        {/* <p>{obj.text}</p> */}
                    </div>
                )
            })}
            <button onClick={()=>nextSlide()} className="buttonSlide next fa fa-chevron-right"></button>
            <button onClick={()=>prevSlide()} className="buttonSlide prev fa fa-chevron-left"></button>

            <div className="container-dots">
                {Array.from({length:banners_data.length}).map((item,idx)=>{
                    return(
                        <div onClick={()=>setSlideIndex(idx+1)} key={idx} className={slideIndex === idx +1 ? "dot active-dot" : "dot"}>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    );
    
}

export default Banner_home;