import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { handleUpdateCart } from "../../firebase/utils";
import { resetCartArray } from "../../redux/Cart/cart.actions";

const mapState = ({user}) =>({
    currentUser: user.currentUser,
});

function Success(){
    const dispatch = useDispatch()
    const {currentUser} = useSelector(mapState);

    useEffect(()=>{
        if(currentUser)
        handleUpdateCart(currentUser,"clearCart",0)
        else
        dispatch(resetCartArray())
    },[dispatch,currentUser])
    
    return (
        <div>
            <p>Success Page</p>
            <Link to="/">Home</Link>
        </div>
    )
} 
export default Success;