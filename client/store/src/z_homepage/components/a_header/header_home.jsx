import React, { useState, useEffect } from "react";
import {Link ,NavLink, useParams} from 'react-router-dom';
import "./header_home_css.css";
import categoriiHeader from "../../../z_site2/data2/categorii";
import {useSelector, useDispatch} from 'react-redux';
import { resetProductsArray, resetSearchProductsArray, getSearchProducts } from "../../../redux/Products/products.actions";
import ItemCard from "../../../z_site2/components2/b_body/itemCard";

const mapState = ({user, products}) =>({
    currentUser: user.currentUser,
    // productsArray: products.productsArray,
    searchProductsArray: products.searchProductsArray,
});

function HeaderHome(){
    const {queries} = useParams()    
    const [genSelect,setGenSelect]=useState(0)
    const [showMore,setShowMore]=useState(0)
    const [searchShow,setSearchShow]=useState(0)
    const [searchValue,setSearchValue]=useState('')
    const [showMoreCategory,setShowMoreCategory]=useState('')
    const dispatch = useDispatch()
    const {currentUser,searchProductsArray} = useSelector(mapState);
    // const searchResultItems = productsArray
    const searchResultItems = searchProductsArray

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
    function submitSearch(e){
        e.preventDefault()
        console.log("pressed")
        // if(categoriiHeader[genSelect]["sub_ctgr1"][searchValue] || categoriiHeader[genSelect]["collections"][searchValue])
        // console.log(Object.keys(categoriiHeader[genSelect]["sub_ctgr1"][searchValue]))
        for(const prop in categoriiHeader[genSelect]["sub_ctgr1"]){
            if(prop === searchValue)
            console.log(`${prop} : ${searchValue}`)
            // else
            for(const prop2 in categoriiHeader[genSelect]["sub_ctgr1"][prop]){
                if(prop2 === searchValue)
                console.log(`${prop}-${prop2} : ${searchValue}`)
                if(categoriiHeader[genSelect]["sub_ctgr1"][prop][prop2].includes(searchValue))
                console.log(`${prop}-${prop2}-[] : ${searchValue}`)
            }
            // console.log(categoriiHeader[prop]["sub_ctgr1"])
        }
    }
    function changeSearchValue(e){
        e.preventDefault()
        // console.log("changed!")
        dispatch(resetSearchProductsArray())
        const filters={
            "keywords":{"operator":">","value":`${e.target.value}`}
        }
        e.target.value !== "" ? dispatch(getSearchProducts(filters)) : dispatch(resetSearchProductsArray());
        setSearchValue(e.target.value)
    }
    useEffect(()=>{
        if(getProp(queries,"gen")==="man")
        setGenSelect(0)
        else if(getProp(queries,"gen")==="woman")
        setGenSelect(1)
        else if(getProp(queries,"gen")==="child")
        setGenSelect(2)

        dispatch(resetProductsArray())
    },[queries,dispatch])

    return(
        <div className="Header_home">
            <div className="Row1">
                <div className="Stanga">
                    <div className="Filtre">
                        <p className={genSelect===0?"activeGenFiltru":"genFiltru"} onClick={()=>setGenSelect(0)}>Barbati</p>
                        <p className={genSelect===1?"activeGenFiltru":"genFiltru"} onClick={()=>setGenSelect(1)}>Femei</p>
                        <p className={genSelect===2?"activeGenFiltru":"genFiltru"} onClick={()=>setGenSelect(2)}>Copii</p>
                    </div>
                    <div className="Meniu">
                        <p  onClick={()=>setShowMore(1)} className="ImagineMeniu fa fa-bars"></p>
                        <p className="meniu">Meniu</p>
                    </div>
                </div>
                
                <div className="Logo_header">
                    <Link to="/" style={{textDecoration:"none",color:"unset"}}>
                    <p className="logo_header">Magazin Online</p>
                    </Link>
                </div>
                <div className="Dreapta">
                    <Link to={"/profile"}>
                        <p className="fa fa-user-o"></p>
                    </Link>
                    <p className="fa fa-bell-o"></p>
                    <Link to={"/favorites"}>
                        <p className="fa fa-heart-o"></p>
                    </Link>
                    <Link to={"/cart"}>
                        <p className="fa fa-shopping-cart"></p>
                    </Link>
                </div>
            </div>

            <div className="Row2">
                <div className="Categorii">
                    { Object.keys(categoriiHeader[genSelect].sub_ctgr1).map((item,index)=>{
                        return(
                            <NavLink key={index} className={"ctgrHeader"} style={({isActive})=>{return{textDecoration:(isActive||getProp(queries,"category")===item)?"underline":"none"}}}  to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}`}>{item}</NavLink>
                            )
                        })
                    }
                </div>
                <div className="Search" onClick={()=>setSearchShow(1)}>
                    <p className="fa fa-search imagineSearch"></p>
                    <p className="searchBar">Cauta branduri, categorii sau produse</p>
                </div>
            </div>
            {showMore?
                <div className="moreDiv">
                    <div className="moreHeader">
                        <p>name</p>
                        <p onClick={()=>setShowMore(0)} className="fa fa-times closeButton"></p>
                    </div>
                    <div className="moreFiltre">
                        <p onClick={()=>setGenSelect(0)} className={genSelect===0?`active`:''} >Barbati</p>
                        <p onClick={()=>setGenSelect(1)} className={genSelect===1?`active`:''} >Femei</p>
                        <p onClick={()=>setGenSelect(2)} className={genSelect===2?`active`:''} >Copii</p>
                    </div>
                    <div className="Categorii">
                    { Object.keys(categoriiHeader[genSelect].sub_ctgr1).map((item,index)=>{
                        return(
                            <div key={index}>
                                <p onClick={()=>{showMoreCategory===item?setShowMoreCategory(''):setShowMoreCategory(item)}} className={showMoreCategory===item?"showMoreCat active":"showMoreCat"}>{item}</p>
                                {showMoreCategory===item && <Link onClick={()=>setShowMore(0)} to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}`}>Toate Produsele</Link>}
                                {showMoreCategory===item && Object.keys(categoriiHeader[genSelect].sub_ctgr1[item]).map((item2,index)=>{
                                    return(
                                        <div key={index}>
                                            <Link className={"showMoreCatTwo"} onClick={()=>setShowMore(0)} to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}&ctgr2=${item2}`}>{item2}</Link>
                                        </div>
                                    )
                                })}

                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                :''
            }
            {searchShow?
            <div className="searchDiv">
                <p onClick={()=>setSearchShow(0)}>searchDivParagraph</p>
                <form onSubmit={(e)=>submitSearch(e)}>
                <input type="text" placeholder="Cauta branduri, categorii sau produse" autoFocus value={searchValue} onChange={(e)=>changeSearchValue(e)}/>
                </form>
                {/* <p>{searchValue}</p> */}
                {searchValue && Object.keys(categoriiHeader[genSelect]["sub_ctgr1"]).map((item,index)=>{
                    return (
                        <div key={index}>
                            {/* <p>{item===searchValue?item:''}</p> */}
                            <Link to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}`}>{item===searchValue?item:''}</Link>
                            {
                                Object.keys(categoriiHeader[genSelect]["sub_ctgr1"][item]).map((item2,index2)=>{
                                    return (
                                        <div key={index2}>
                                            {/* <p>{item2===searchValue?`${item}-${item2}`:''}</p> */}
                                            <Link style={{display:"block"}} to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}&ctgr2=${item2}`}>{item2===searchValue?`${item}-${item2}`:''}</Link>
                                            {/* <p>{categoriiHeader[genSelect]["sub_ctgr1"][item][item2].includes(searchValue)?`${item}-${item2}-[]`:''}</p> */}
                                            <Link style={{display:"block"}} to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}&ctgr2=${item2}&sub_ctgr1=${searchValue}`}>{categoriiHeader[genSelect]["sub_ctgr1"][item][item2].includes(searchValue)?`${item}-${item2}-[]`:''}</Link>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    )
                })
                }
                {searchValue && Object.keys(categoriiHeader[genSelect]["collections"]).map((item,index)=>{
                    return (
                        <div key={index}>
                            {/* <p>{item===searchValue?item:''}</p> */}
                            <Link to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}`}>{item===searchValue?item:''}</Link>
                            {
                                // <p>{categoriiHeader[genSelect]["collections"][item]["items"].includes(searchValue)?`${item}-items-[]`:''}</p>
                                <Link to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}&ctgr2=${searchValue}`}>{categoriiHeader[genSelect]["collections"][item]["items"].includes(searchValue)?`${item}-items-[]`:''}</Link>
                            }
                            
                        </div>
                    )
                })
                }
                {searchResultItems.length ?
                    searchResultItems.map((item,index)=>{
                        return (
                            <div key={index}>
                            <ItemCard className="Card" key={index} item={item} currentUser={currentUser} favorite={currentUser?.favorites.includes(item.id)}/>
                            <Link to={`/2/item/gen=${item.gen}&category=${item.category[item.category.length-1]}&name=${item.name}&color=${item.colors[0]||'color'}&id=${item.id}&groupId=${item.groupId}`}>
                                <p>{item.name} : {item.price}</p>
                            </Link>
                        </div>
                        )
                    })
                :'noDBItems'}
            </div>
            :''
            }
        </div>
    )
}

export default HeaderHome;
