import React ,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {logOut} from '../../redux/User/user.actions';
import { getTransactions, resetTransactionsArray } from "../../redux/Transactions/transactions.actions";
import "./profilePage_css.css";

const mapState = ({user,products,transactions}) =>({
    currentUser: user.currentUser,
    transactionsArray: transactions.transactionsArray
});

function ProfilePage(){

    const dispatch = useDispatch()
    const {currentUser, transactionsArray} = useSelector(mapState);
    const [showTransactions,setShowTransactions] = useState(false);
    const result = transactionsArray

    useEffect(()=>{
        dispatch(resetTransactionsArray())
        if(currentUser){
        const filters={
            "email":{"operator":"==","value":`${currentUser.email}`}
        }
        currentUser && dispatch(getTransactions(filters,"desc")) }
    },[dispatch,currentUser])

    return(
        <div className="ProfilePage">
            <div className="top">
                <Link style={{margin:"10px",color:"unset",textDecoration:"unset"}} className="back fa fa-chevron-left" to="/"></Link> 
                <p style={{margin:"10px",textTransform:"capitalize"}}>{currentUser?.displayName}</p>
                {currentUser && <p style={{margin:"10px"}} onClick={()=>logOut()}>Log out</p>}
            </div>
            {result.length?<p style={{textAlign:"center"}} onClick={()=>setShowTransactions(!showTransactions)}>{showTransactions?"Hide Transactions":`Show All My ${result.length} Transactions`}</p>:<p>Buy Something</p>}

            {(result.length && showTransactions)?
                result.map((item,index)=>{
                    // let date = new Date(item.aAaFastDATA.date_numeric)
                    let dateCal = new Date(item.aAaFastDATA.date_numeric).toLocaleDateString("en-US")
                    let dateHour = new Date(item.aAaFastDATA.date_numeric).toLocaleTimeString("en-US")
                    return(
                        <div key={index}>
                            {/* <p style={{margin:"0 10px"}}>{index+1}. {item.customer_details.email}</p> */}
                            {/* <p style={{margin:"0 10px"}}>{item.customer_details.name}</p> */}
                            <div className="topT">
                                <p style={{margin:"0 10px"}}>{index+1}.</p>
                                <p style={{margin:"0 10px"}}>{item.amount_total/100}{item.amount_total%100?`.${item.amount_total%100}`:""}$</p>
                                <p style={{margin:"0 10px"}}>{dateCal}</p>
                                <p style={{margin:"0 10px"}}>{dateHour}</p>
                            </div>
                            {/* <p style={{margin:"0 10px"}}>{`${date}`}</p> */}
                            <div style={{display:"",marginBottom:"2vh"}}>{
                                item.aAaFastDATA.items.map((item,index)=>{
                                    return(
                                        <div key={index} style={{display:"flex"}}>
                                            <p style={{margin:"0 5px"}}>{item.amount_total?`${item.amount_total/100}${item.amount_total%100?`.${item.amount_total%100}`:''}$`:''}</p>
                                            <p style={{margin:"0"}}>({item.itemName}:</p>
                                            <p style={{margin:"0"}}>x{item.quantity})</p>
                                        </div>
                                    )
                                })
                                }</div>
                        </div>
                    )
                }):''
            }

            {/* <Link to="/"> Home </Link> */}

        </div>

    )
}

export default ProfilePage;