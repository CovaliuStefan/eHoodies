import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, resetProductsArray } from "../../redux/Products/products.actions";
import { resetCartArray, addCartItem ,setCart } from "../../redux/Cart/cart.actions";
import { handleFetchCart, handleUpdateCart } from "../../firebase/utils";

import productsTypes from "../../redux/Products/products.types";

const mapState = ({user, products, cart}) =>({
    currentUser: user.currentUser,
    productsArray: products.productsArray,
    cartItemsArray: cart.cartItemsArray
});

function CartPage(){
    const dispatch = useDispatch()
    const {currentUser, productsArray, cartItemsArray} = useSelector(mapState);
    const result = productsArray

    function removeFromCart(currentUser,itemId,quantity){
        if(currentUser)
        handleUpdateCart(currentUser,itemId,quantity)
        dispatch(addCartItem(cartItemsArray,itemId,quantity))
    }

    useEffect(()=>{
        if(currentUser){
            handleFetchCart(currentUser).then(([arr,data])=>{
                const dataArr = Object.keys(data).map((item)=>{return{productId:item, quantity:data[item]}})
                dispatch(setCart(dataArr))
            }).catch((err)=>{
                console.log("ERROR " +err)
            })
        }
    },[dispatch,currentUser])

    useEffect(()=>{
        dispatch(resetProductsArray())
        const cartIDs=cartItemsArray.map((item)=>{
            return (
                item.productId
            )
        })
        const filters={
            "id":{"operator":"in","value":cartIDs}
        }
        cartIDs.length ? dispatch(getProducts(filters)) : dispatch({type: productsTypes.GET_PRODUCTS ,payload: []});
    },[dispatch,cartItemsArray])

    // useEffect(()=>{
    //     if(currentUser){
    //     handleFetchCart(currentUser).then(([arr,data])=>{
    //         dispatch(resetProductsArray())
    //         cartRef.current = data
    //         const filters={
    //             "id":{"operator":"in","value":arr}
    //         }
    //         arr.length ? dispatch(getProducts(filters)) : dispatch({type: productsTypes.GET_PRODUCTS ,payload: []});
    //     }).catch((err)=>{
    //         console.log("ERROR " +err)
    //     }) }
    //     else{
    //         const cartIDs=cartItemsArray.map((item)=>{
    //             return (
    //                 item.productId
    //             )
    //         })
    //         const filters={
    //             "id":{"operator":"in","value":cartIDs}
    //         }
    //         cartIDs.length ? dispatch(getProducts(filters)) : dispatch({type: productsTypes.GET_PRODUCTS ,payload: []});
    //     }
    //     // dispatch(resetProductsArray())
    //     // if(currentUser){
    //     //     const cartIDs=currentUser.cart.map((item)=>{
    //     //         return (
    //     //             item.productId
    //     //         )
    //     //     })
    //     //     const filters={
    //     //         "id":{"operator":"in","value":cartIDs}
    //     //     }
    //     // cartIDs.length && dispatch(getProducts(filters)) }
    //     // else {
    //     //     const cartIDs=cartItemsArray.map((item)=>{
    //     //         return (
    //     //             item.productId
    //     //         )
    //     //     })
    //     //     const filters={
    //     //         "id":{"operator":"in","value":cartIDs}
    //     //     }
    //     //     cartIDs.length && dispatch(getProducts(filters)) 
    //     // }
    // },[dispatch,currentUser,cartItemsArray])
    return (
        <div className="favoritesPage">
            <p>Cart Page</p>
            {result.length?
                result.map((item,index)=>{
                    const itemObject = cartItemsArray.filter(it =>it.productId === item.id)[0]
                    return(
                        <div key={index} style={{display:"flex"}}>
                            <p style={{margin:"0 10px"}}>{item.name}</p>
                            <p style={{margin:"0 10px"}}>quantity:{itemObject?.quantity}</p>
                            <p style={{margin:"0 10px"}} onClick={()=>removeFromCart(currentUser,item.id,0)}>Delete Item</p>
                        </div>
                    )
                }):
                    <p>Your cart is empty!</p>
            }
            <Link to="/"> Home </Link>
            <p onClick={()=>dispatch(resetCartArray())}>Clear Cart</p>
        </div>
    )
}

export default CartPage;

//*** UTILS FUNCTIONS *** / CART WITH COLLECTIONS

//PENTRU CARTUL COLECTIA DIN USER
// export const handleFetchCart2 = async (userAuth) =>{
//     console.log("HANDLE FETCH CART ITEMS")
//     return new Promise((resolve,reject)=>{
//         if(!userAuth) reject("No user") ;
//         const {uid}=userAuth;
//         const cartRef = doc(firestore, "users",`${uid}`,"moreUserInfo","cartItems");
//         getDoc(cartRef).then(snapshot=>{
//             // const arr =[...Object.keys(snapshot["_document"]["data"]["value"]["mapValue"]["fields"])]
//             const arr =[...Object.keys(snapshot.data())]
//             resolve([arr,snapshot.data()])
//         }).catch(err => {
//             reject(err);
//         })
//     })
// } 

//PENTRU CARTUL COLECTIA DIN USER
// export const handleUpdateCart2 = async (userAuth,itemId,incrementValue) =>{
//     console.log("HANDLE UPDATE CART")
//     if(!userAuth) return ;
//     const {uid}=userAuth;
//     const cartRef = doc(firestore, "users",`${uid}`,"moreUserInfo","cartItems");
//     const snapshot = await getDoc(cartRef)
//     if(snapshot.exists()){
//         const data = snapshot.data()
//         if(data[itemId] + incrementValue <= 0 || incrementValue===0){
//             await updateDoc(cartRef, {
//                 [itemId]: deleteField()
//             });
//         }else{
//             await updateDoc(cartRef, {
//                 [itemId]: increment(incrementValue||1)
//             }); 
//         }
//         // console.log("HANDLE UPDATE CART")
//         return data;
//     }
//     return []
// } 