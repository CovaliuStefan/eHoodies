import React, { useEffect, useState } from "react";
import './slider_products_css.css';
// import item_dataNoFilter from "../../../z_site2/data2/items-data.js";
import SliderProductItem from "./sliderProductItem";
import { getProductsReturn } from "../../../redux/Products/products.actions";
import {useSelector} from 'react-redux';

const mapState = ({user}) =>({
    currentUser: user.currentUser,
});

function Slider_products({title, category, gen, color, brand, onSale, size}){

    const {currentUser} = useSelector(mapState); 

    // function checkQuery(item){
    //     if(item.primaryInGroup)
    //     return true 
    //     else return false
    // }
    const [item_data,setItem_data]=useState([])
    // const item_data = item_dataNoFilter.filter(checkQuery)
    const [slideIndex, setSlideIndex] = useState(0);
    const [numberOfItemsToShow ,setNumberOfItemsToShow] = useState(4);
    
    function scrollR(){
        if(slideIndex===item_data.length-numberOfItemsToShow){
            setSlideIndex(0)
        }
        else if(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2))+numberOfItemsToShow<=item_data.length){
            setSlideIndex(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2)));
        }
        else{
            setSlideIndex(slideIndex+(item_data.length-slideIndex-numberOfItemsToShow));
        }
    }

    function scrollL(){
        if(slideIndex===0){
            setSlideIndex(item_data.length-numberOfItemsToShow)
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
        // console.log(`Slider_products --> ResizeListener`)
        window.addEventListener('resize',handleResize,false)
        handleResize()
        return () =>{
            // console.log(`Slider_products --> StopResizeListener`)
            window.removeEventListener('resize',handleResize,false)
        }
    },[])
    useEffect(()=>{
        // window.addEventListener('resize',handleResize,false)
        // if(window.innerWidth<770){
        //     setNumberOfItemsToShow(2)
        // }
        // else if(window.innerWidth>770 && window.innerWidth<=1500){
        //     setNumberOfItemsToShow(3)
        // }
        // else if(window.innerWidth>1500 && window.innerWidth<=2000){
        //     setNumberOfItemsToShow(4)
        // }
        // else if(window.innerWidth>2000 && window.innerWidth<=3000){
        //     setNumberOfItemsToShow(5)
        // }
        // else if(window.innerWidth>3000){
        //     setNumberOfItemsToShow(6)
        // }

        // handleResize()

        const filters={
            "category":category?{"operator":"array-contains","value":`${category}`}:null,
            "gen":gen?{"operator":"==","value":`${gen}`}:null,
            "color":color?{"operator":"in","value":color}:null,
            "brand":brand?{"operator":"==","value":brand}:null,
            "onSale":onSale?{"operator":"==","value":true}:null, 
            "size":size?{"operator":"==","value":size}:null,
            "primaryInGroup":{"operator":"==","value":true}
        }
        
        getProductsReturn(filters).then((item)=>{
            console.log(`Slider_products {${title}}--> getProductsReturn`)
            setItem_data(item)
        }).catch((err)=>{console.log("ERROR " +err)})

        // return () =>{
        //     window.removeEventListener('resize',handleResize,false)
        // }

    },[category, gen, color, brand, onSale, size ,title])

    return(
        <div className="Slider_products">
            <div className="Slider-title-div">
                <p className="Slider_title">{title}</p>
                <div className="buttons">
                <button onClick={()=>scrollL()} className="buttonSlideA fa fa-chevron-left"></button>
                <button onClick={()=>scrollR()} className="buttonSlideA fa fa-chevron-right"></button>
                </div>
            </div>
            <div className="hidden">
            <div className="Slides" style={{transform:`translate(-${slideIndex*(window.innerWidth>500?80/numberOfItemsToShow:81)}vw)`, transitionDuration:"1s"}}>
            {item_data?.length && item_data.map((obj,idx)=>{
                return(
                    <SliderProductItem className="SliderProductItem" key={idx} obj={obj} idx={idx} currentUser={currentUser} favorite={currentUser?.favorites.includes(obj.id)} numberOfItemsToShow={numberOfItemsToShow}/>
                )
            })}
            </div>
            </div>
        </div>
    );
    
}
export default Slider_products;