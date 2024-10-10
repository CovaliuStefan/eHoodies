import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, resetProductsArray } from "../../redux/Products/products.actions";
import { resetCartArray, addCartItem } from "../../redux/Cart/cart.actions";
import { handleUpdateCart } from "../../firebase/utils";
import StripeCheckout from "../../checkout/stripe-checkout/stripe-checkout";
import "./cartPage_css.css";

// import productsTypes from "../../redux/Products/products.types";

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
        if(itemId==="clearCart" && currentUser)
        handleUpdateCart(currentUser,"clearCart",quantity)
        else if(itemId==="clearCart")
        dispatch(resetCartArray())
        else if(currentUser)
        handleUpdateCart(currentUser,itemId,quantity)
        else
        dispatch(addCartItem(cartItemsArray,itemId,quantity))
    }

    function pretCart(array){
        let sum = 0;
        console.log(array)
        for (let i = 0; i < array.length; i++) {
            if(currentUser)
            sum += array[i].price * currentUser.cart[array[i].id];
            else {
                let qu = cartItemsArray.filter(it =>it.productId === array[i].id)[0]
                if(qu)
                sum += array[i].price * qu.quantity }
        }
        return sum;
    }

    useEffect(()=>{
        dispatch(resetProductsArray())
        if(!currentUser){
        const cartIDs=cartItemsArray.map((item)=>{
            return (
                item.productId
            )
        })
        const filters={
            "id":{"operator":"in","value":cartIDs}
        }
        cartIDs.length && dispatch(getProducts(filters)) }
        else{
            const cartIDs=Object.keys(currentUser["cart"])
            const filters={
                "id":{"operator":"in","value":cartIDs}
            }
            cartIDs.length && dispatch(getProducts(filters))
        }
    },[dispatch,cartItemsArray,currentUser])

    return (
        <div className="cartPage">
            <div className="top">
                <Link style={{margin:"10px",color:"unset",textDecoration:"unset"}} className="back fa fa-chevron-left" to="/"></Link> 
                <p style={{margin:"10px",textTransform:"capitalize"}}>Cart</p>
                {result.length?<p>Total {pretCart(result)}$</p>:'Total 0$'}
            </div>
            <div className="checkandclear">
                <StripeCheckout/>
                <p className="clearCartBtn" onClick={()=>removeFromCart(currentUser,"clearCart",1)}>Clear Cart</p>
            </div>
            {result.length?
                result.map((item,index)=>{
                    const itemObject = currentUser? currentUser.cart[item.id] : cartItemsArray.filter(it =>it.productId === item.id)[0]
                    return(
                        <div key={index} style={{display:"flex"}} className="cartItem">
                            <Link to={`/2/item/gen=${item.gen}&category=${item.category[item.category.length-1]}&name=${item.name}&color=${item.colors[0]||'color'}&id=${item.id}&groupId=${item.groupId}`}>
                                <img className="Image" style={{width:"100px"}} src={require(`../../z_site2/data2${item.image[0]}`)} alt=""/>
                                {/* <img className="Image" style={{width:"100px"}} src={require(`../../z_site2/data2${item.image[0]}`).default} alt=""/> */}
                            </Link>
                            <p style={{margin:"0 10px"}}>{item.name}</p>
                            <p style={{margin:"0"}} onClick={()=>removeFromCart(currentUser,item.id,-1)}>-</p>
                            <p style={{margin:"0 10px"}}>quantity:{currentUser ? itemObject : itemObject?.quantity}</p>
                            <p style={{margin:"0"}} onClick={()=>removeFromCart(currentUser,item.id,1)}>+</p>
                            <p style={{margin:"0 10px"}} onClick={()=>removeFromCart(currentUser,item.id,0)}>Delete Item</p>
                            <p style={{margin:"0 10px"}}>price:{currentUser ? itemObject*item.price : itemObject?.quantity*item.price}$</p>
                        </div>
                    )
                }):
                    <p className="emptyCart">Your cart is empty!</p>
            }
            {/* {result.length?
                <p>Total {pretCart(result)}</p>:''
            } */}
            {/* <Link to="/"> Home </Link> */}
        </div>
    )
}

export default CartPage;