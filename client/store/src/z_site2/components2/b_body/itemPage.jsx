import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import item_data from "../../data2/items-data";
import "./itemPage_css.css"
import {useSelector, useDispatch} from 'react-redux';
import { addCartItem } from "../../../redux/Cart/cart.actions";
import { getProducts, resetProductsArray } from "../../../redux/Products/products.actions";
import { handleUpdateCart, handleUpdateFavorites } from "../../../firebase/utils";

const mapState = ({user, products, cart}) =>({
    currentUser: user.currentUser,
    cartItemsArray: cart.cartItemsArray,
    productsArray: products.productsArray
});

function ItemPage(){
    const {currentUser, productsArray, cartItemsArray} = useSelector(mapState);
    const dispatch = useDispatch()

    const {queries} = useParams()
    // const params = new URLSearchParams(queries)
    const [marime,setMarime]=useState('Alege marimea')
    const [showmarime,setShowMarime]=useState(0)
    const culoriref=useRef(null)
    const imaginiref=useRef(null)

        function getProp(q,s1){
        if(!q)return false;
        let idx1=q.indexOf(`${s1}`)
        if(idx1>=0){
            let idx2=q.indexOf('&',idx1)
            if(idx2===-1)idx2=q.length
            let one = q.substring(idx1+1+s1.length,idx2)
            return one;
        }else return false;
        }

        const scrollculori = (scrollOffset) => {
            // console.log("scroll culori")
        culoriref.current.scrollLeft += scrollOffset;
        };
        const scrollimagini = (scrollOffset) => {
            // console.log("scroll imagini")
        imaginiref.current.scrollLeft += scrollOffset;
        };

        // function checkQuery(item){
        //     if(params)
        //     if(item.category[item.category.length-1]===params.get("category") && item.gen===params.get("gen") && item.name===params.get("name") && item.colors[0]===params.get("color"))
        //     return true
        //     else return false
        //     else return false
        // }
        const result = productsArray
        // item_data.filter(checkQuery)
        const mainResult = result.filter(item=>item.id === getProp(queries,"id"))[0]
        // result.filter(item => item.id === getProp(queries,"id"))
         
        useEffect(()=>{window.scrollTo({ top: 0, behavior: 'smooth' });},[])
        useEffect(()=>{
            // console.log(cartItemsArray)
            dispatch(resetProductsArray())
            // culoriref.current.scrollLeft=0;
            // imaginiref.current.scrollLeft=0;
            // console.log(getProp(queries,"groupId"))
            const filters={
                "groupId":{"operator":"==","value":getProp(queries,"groupId")}
            }
            getProp(queries,"groupId") && dispatch(getProducts(filters))
        },[dispatch,queries])

    return(<>
        {(result.length && mainResult)?<div className="itemPage">
            <div className="contentItemPage">
            <div className="left">
                <div className="imagebuttons">
                    <div className="imagebutton left fa fa-chevron-left" onClick={() => scrollimagini(-imaginiref.current.offsetWidth)}></div>
                    <div className="imagebutton rigth fa fa-chevron-right" onClick={() => scrollimagini(imaginiref.current.offsetWidth)}></div>
                </div>
            <div className="images" ref={imaginiref}>
                {mainResult && mainResult.image.map((item,index)=>{return(<img className={'itemPageImg'} key={index} src={require(`../../data2${item}`)} alt=""/>)})}
                {/* {mainResult && mainResult.image.map((item,index)=>{return(<img className={'itemPageImg'} key={index} src={require(`../../data2${item}`).default} alt=""/>)})} */}
                {/* require(`../../data2${item.image[imageNumber]}`).default */}
            </div>

            </div>
            <div className="info">
                <p className="nume" >{mainResult && mainResult["name"]}</p>
                <p className="pret">{`${mainResult && mainResult["price"]} lei`}</p>
                <div className="marime">
                    <p className="marimeTitle">Marime</p>
                    {/* <p className="marimeAleasa" onClick={showmarime===0?()=>setShowMarime(1):()=>setShowMarime(0)}>{marime}</p> */}
                    <div className="marimi">
                        <p className="marimeAleasa" onClick={showmarime===0?()=>setShowMarime(1):()=>setShowMarime(0)}>{marime}</p>
                        {(result.length && mainResult)?Object.keys(mainResult["size"]).map((item,index)=>{return(<p key={index} onClick={()=>{setMarime(`${item}`); setShowMarime(0);}} style={{display:`${showmarime?'':'none'}`}} className={`itemPageSizes`}>{`${item} ${mainResult["size"][item]?"":" : Out of stock."}`}</p>)}):''}</div> 
                </div>
                    {/* {result.length?mainResult["size"].map((item,index)=>{return(<p key={index} onClick={()=>{setMarime(`${Object.keys(item)}`); setShowMarime(0);}} className={index===2?`itemPageSizes`:`itemPageSizes`}>{`${Object.keys(item)} : ${Object.values(item)}`}</p>)}):''} */}
                <div className="culoare">
                    <p className="colorname"><span className="title">Culoare: </span>{mainResult && mainResult["colorname"]}</p>
                    <div className="colorbuttons">
                        <div className="colorbutton left fa fa-chevron-left" onClick={() => scrollculori(-culoriref.current.offsetWidth)}></div>
                        <div className="colorbutton rigth fa fa-chevron-right" onClick={() => scrollculori(culoriref.current.offsetWidth)}></div>
                    </div>
                </div>
                <div className="culori" ref={culoriref}>{result.length && result.map((item,index)=>{
                    return(<Link key={index} className={`itemPageColors`} to={`/2/item/gen=${item["gen"]}&category=${item["category"][item["category"].length-1]}&name=${item["name"]}&color=${item.color}&id=${item.id}&groupId=${item.groupId}`}>{<div className="color" style={{padding:'0 5px'}}>{item.image.length?<img src={require(`../../data2${item.image[0]}`)} alt=""/>:<div className="litcollor" style={{backgroundColor:`#${item.color}`,width:'20px',height:'20px',borderRadius:'50%'}}/>}</div>}</Link>)})}
                    {/* return(<Link key={index} className={`itemPageColors`} to={`/2/item/gen=${item["gen"]}&category=${item["category"][item["category"].length-1]}&name=${item["name"]}&color=${item.color}&id=${item.id}&groupId=${item.groupId}`}>{<div className="color" style={{padding:'0 5px'}}>{item.image.length?<img src={require(`../../data2${item.image[0]}`).default} alt=""/>:<div className="litcollor" style={{backgroundColor:`#${item.color}`,width:'20px',height:'20px',borderRadius:'50%'}}/>}</div>}</Link>)})} */}
                </div>
                {/* <div className="buy" onClick={()=>dispatch(addCartItem(cartItemsArray,mainResult.id,1))}>Cumpara</div> */}
                <div className="buyContainer">
                    <div className="buy" style={{backgroundColor:currentUser ? currentUser.cart[mainResult.id]?'red':'' : (cartItemsArray.filter(function(e) { return e.productId === mainResult.id; }).length > 0) ?'red':'', color:currentUser ? currentUser.cart[mainResult.id]?'':'' : (cartItemsArray.filter(function(e) { return e.productId === mainResult.id; }).length > 0) ?'':''}} onClick={()=>{currentUser ? handleUpdateCart(currentUser,mainResult.id,1) : dispatch(addCartItem(cartItemsArray,mainResult.id,1))}}>{currentUser ? currentUser.cart[mainResult.id]?'In cos':'Adauga in cos' : (cartItemsArray.filter(function(e) { return e.productId === mainResult.id; }).length > 0) ?'In cos':'Adauga in cos'}</div>
                    <div onClick={()=>handleUpdateFavorites(currentUser,mainResult.id)} className={currentUser?.favorites.includes(mainResult.id)?`AddToFavorites fa fa-heart`:`AddToFavorites fa fa-heart-o`}></div>
                </div>
            </div>
            </div>
        </div>:''}
        </>
    )
}

export default ItemPage;
/* <div className="culori" ref={culoriref}>{mainResult["colors"].map((item,index)=>{
    // function checkQuery2(it){
    //     if(it.category[it.category.length-1]===mainResult["category"][mainResult.category.length-1] && it.gen===mainResult.gen && it.name===mainResult.name && it.colors[0]===item)
    //     return true
    //     else return false
    // }
    // let result2 = item_data.filter(checkQuery2)
    // function checkQuery2(it){
    //     if(it.color===item)
    //     return true
    //     else return false
    // }
    // let result2 = result.filter(checkQuery2)
    let result2 = result.filter(it => it.color === item)
    console.log(result2)
    return(<Link key={index} className={`itemPageColors`} to={`/2/item/gen=${mainResult["gen"]}&category=${mainResult["category"][mainResult["category"].length-1]}&name=${mainResult["name"]}&color=${item}&id=${mainResult.id}&groupId=${mainResult.groupId}`}>{<div className="color" style={{padding:'0 5px'}}>{result2.length?<img src={require(`../../data2${result2[0].image[0]}`).default} alt=""/>:<div className="litcollor" style={{backgroundColor:`#${item}`,width:'20px',height:'20px',borderRadius:'50%'}}/>}</div>}</Link>)})}
</div> */