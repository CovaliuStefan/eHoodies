import React, {useEffect} from "react";
// import ItemsData from "../../data2/items.json"
import ItemCard from "./itemCard";
import "./items_css.css"
// import item_data from "../../data2/items-data";
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, resetProductsArray } from "../../../redux/Products/products.actions";

const mapState = ({user, products}) =>({
    currentUser: user.currentUser,
    productsArray: products.productsArray
});

function Items({queries,sort}){
    // const params = new URLSearchParams(queries)
    const dispatch = useDispatch()
    const {currentUser, productsArray} = useSelector(mapState); 
    
    // function checkQuery(item){
    //     // console.log(item)
    //     // if(item.category.includes(params.get('category')) || item.category.includes(params.get('sub_category1')))
    //     if(params)
    //     if(item.gen===params.get("gen"))
    //     if(item.primaryInGroup)
    //     if(params.get("sub_ctgr1"))
    //         if(item.category.includes(params.get("sub_ctgr1")))
    //         return true;
    //         else return false;
    //     else if(params.get("ctgr2"))
    //         if(item.category.includes(params.get("ctgr2")))
    //         return true;
    //         else return false;
    //     else if(params.get("ctgr"))
    //         if(item.category.includes(params.get("ctgr")))
    //         return true;
    //         else return false;
    //     else return false;
    //     else return false;
    //     else return false;
    // }
    // const result = item_data.filter(checkQuery)

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
    
    const result = productsArray

    useEffect(()=>{
        dispatch(resetProductsArray())
        // getProp(queries,'priceCat') && console.log(getProp(queries,"priceCat").split(':')[0])
        const filters={
            "category":getProp(queries,'sub_ctgr1')?{"operator":"array-contains","value":`${getProp(queries,'sub_ctgr1')}`}:getProp(queries,'ctgr2')?{"operator":"array-contains","value":`${getProp(queries,'ctgr2')}`}:getProp(queries,'ctgr')?{"operator":"array-contains","value":`${getProp(queries,'ctgr')}`}:null,
            "gen":getProp(queries,'gen')?{"operator":"==","value":`${getProp(queries,'gen')}`}:null,
            "color":getProp(queries,'colorCat')?{"operator":"in","value":getProp(queries,"colorCat").slice(1,-1).split('--')}:null,
            "brand":getProp(queries,'brandCat')?{"operator":"==","value":getProp(queries,"brandCat").slice(1,-1).split('--')}:null, //FIRST ELEMENT
            "onSale":getProp(queries,'saleCat')?{"operator":"==","value":true}:null, 
            "size":getProp(queries,'sizeCat')?{"operator":"==","value":getProp(queries,"sizeCat").slice(1,-1).split('--')[0]}:null, //FIRST ELEMENT
            "price1":getProp(queries,'priceCat')?{"operator":">=","value":getProp(queries,"priceCat").split(':')[0]}:null, //FIRST ELEMENT
            "price2":getProp(queries,'priceCat')?{"operator":"<=","value":getProp(queries,"priceCat").split(':')[1]}:null, //LAST ELEMENT
            "primaryInGroup":{"operator":"==","value":true}
            // "price":{"operator":"","value":""},
            // "name":{"operator":"==","value":"unu"},
            // "id" :{"operator":"in","value":"id"}
        }
        dispatch(getProducts(filters,sort))
    },[dispatch,queries,sort])
    return(
        <div className="Items">
            {result.map((item,index)=>{
                return <ItemCard className="Card" key={index} item={item} currentUser={currentUser} favorite={currentUser?.favorites.includes(item.id)}/>
            })}
        </div>
    )
    
}

export default Items;