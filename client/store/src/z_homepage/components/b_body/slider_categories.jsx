import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import item_data from "../../../z_site2/data2/items-data";
import categorii from "../../../z_site2/data2/categorii";
import "./slider_categories_css.css"
function SliderCategories({gen,ctgr,title,description}){

    const [slideIndex, setSlideIndex] = useState(0);
    const [numberOfItemsToShow ,setNumberOfItemsToShow] = useState(4);
    function scrollR(){
        if(slideIndex===ctgr.length-numberOfItemsToShow){
            setSlideIndex(0)
        }
        else if(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2))+numberOfItemsToShow<=ctgr.length){
            setSlideIndex(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2)));
        }
        else{
            setSlideIndex(slideIndex+(ctgr.length-slideIndex-numberOfItemsToShow));
        }
    }
    function scrollL(){
        if(slideIndex===0){
            setSlideIndex(ctgr.length-numberOfItemsToShow)
        }
        else if(slideIndex-(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2))>=0){
        setSlideIndex(slideIndex-(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2)))
        }
        else if(slideIndex>0){
            setSlideIndex(0)
        }
    }

    const handleResize = ()=>{
        if(window.innerWidth<500){
            setNumberOfItemsToShow(1)
        }
        else if(window.innerWidth<770){
            setNumberOfItemsToShow(2)
        }
        else if(window.innerWidth>770 && window.innerWidth<=1500){
            setNumberOfItemsToShow(3)
        }
        else if(window.innerWidth>1500 && window.innerWidth<=2000){
            setNumberOfItemsToShow(4)
        }
        else if(window.innerWidth>2000 && window.innerWidth<=3000){
            setNumberOfItemsToShow(5)
        }
        else if(window.innerWidth>3000){
            setNumberOfItemsToShow(6)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize,false)
        // if(window.innerWidth<770){
        //     setNumberOfItemsToShow(2)
        // }
        // else if(window.innerWidth>770 && window.innerWidth<=1500){
        //     setNumberOfItemsToShow(3)
        // }
        // else if(window.innerWidth>1500 && window.innerWidth<=2000){
        //     setNumberOfItemsToShow(3)
        // }
        // else if(window.innerWidth>2000 && window.innerWidth<=3000){
        //     setNumberOfItemsToShow(5)
        // }
        // else if(window.innerWidth>3000){
        //     setNumberOfItemsToShow(6)
        // }

        handleResize()

        return () =>{
            window.removeEventListener('resize',handleResize,false)
        }
    },[])
    return(
        <div className="Slider_images">
            <div className="top">
                <div className="text">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div> 
            <div className="buttons">
                <button onClick={()=>scrollL()} className="buttonSlide fa fa-chevron-left"></button>
                <button onClick={()=>scrollR()} className="buttonSlide fa fa-chevron-right"></button>
            </div>
            </div>
            <div className="hidden">
            <div className="items" style={{transform:`translate(-${slideIndex*(window.innerWidth>500?80/numberOfItemsToShow:81)}vw)`, transitionDuration:"1s"}}>
            {
                ctgr.map((item,index)=>{
                    function checkQuery(i){
                        if(i["category_name"]===gen && i["collections"][item])
                        return true
                        else return false
                    }
                    const result = categorii.filter(checkQuery)
                    return(
                        <Link key={index} className="link_all" to={`/2/products/gen=${gen}&ctgr=${item}`}>
                            <div className="item" style={{width:`${window.innerWidth>500?80/numberOfItemsToShow-1:80}vw`}}>
                                <img className="image" src={result.length?result[0]["collections"][item]["bannerNoDefault"]:''} alt=""/>
                                {/* <img className="image" src={result.length?result[0]["collections"][item]["banner"]:''} alt=""/> */}
                                <p className="title">{result.length?result[0]["collections"][item]["title"]:''}</p>
                                <p className="text">{result.length?result[0]["collections"][item]["text"]:''}</p>
                                </div>
                        </Link>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}
export default SliderCategories;