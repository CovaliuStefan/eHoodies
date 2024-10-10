import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, resetProductsArray } from "../../redux/Products/products.actions";
import ItemCard from "../../z_site2/components2/b_body/itemCard";

const mapState = ({user, products}) =>({
    currentUser: user.currentUser,
    productsArray: products.productsArray
});

function FavoritesPage(){
    const dispatch = useDispatch()
    const {currentUser, productsArray} = useSelector(mapState);

    const result = productsArray

    useEffect(()=>{
        dispatch(resetProductsArray())
        if(currentUser.favorites){
        const filters={
            "id":currentUser.favorites.length?{"operator":"in","value":currentUser.favorites}:{"operator":"in","value":["0"]}
        }
        currentUser.favorites.length && dispatch(getProducts(filters)) }
    },[dispatch,currentUser])
    return (
        <div className="favoritesPage">
            <p>Favorites Page</p>
            {result.length?
                result.map((item,index)=>{
                    return(
                        // <div key={index}>{item.name}</div>
                        // <p onClick={()=>handleUpdateFavorites(currentUser,item.id)} key={index}>{item.name}</p>
                        <ItemCard key={index} item={item} currentUser={currentUser} favorite={currentUser?.favorites.includes(item.id)}/>
                    )
                }):
                    <p>No Favorite Items!</p>
            }
            <Link to="/"> Home </Link>
        </div>
    )
}

export default FavoritesPage;
