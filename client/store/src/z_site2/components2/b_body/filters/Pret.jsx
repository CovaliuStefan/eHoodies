import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Filters_css.css"

function Pret(){
    const {queries} = useParams()
    const [peste,setPeste]=useState(0)
    const [sub,setSub]=useState(1000)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${peste}`)
    }
    function addMiniProp(q,s1,s2){
        if(!q)return false;
        if(q.includes(s1)){
            q=removeProp(q,s1)
            q=q+`&${s1}=${s2}`
            return q;
        }else{
            q=q+`&${s1}=${s2}`
            return q;
        }
    }
    function removeProp(q,s1){
        if(!q)return false;
        if(q.includes(s1)){
        let idx1=q.indexOf(`${s1}`)
        let idx2=q.indexOf('&',idx1)
        if(idx2===-1)idx2=q.length
        let one = q.substring(0,idx1-1)
        let two = q.substring(idx2,q.length)
        let q2=one+two
        return q2} else return q
    }
    //  function pestepeste(event){
    //     console.log("peste-target: "+event.target.value+" sub: "+sub)
    //     if(event.target.value<=parseInt(sub)-10)
    //     setPeste(event.target.value)
    //  }
    //  function subsub(event){
    //     console.log("sub-target: "+event.target.value+" peste: "+peste)
    //     if(event.target.value>=parseInt(peste)+10)
    //     setSub(event.target.value)
    //  }
    return(
        <div className="PriceFilters">
            <p className="Title">Pret</p>
            {/* <div className="Pret">
                price
            </div> */}
            <form onSubmit={handleSubmit} className="priceForm">
            {/* <Link to={`/2/products/${queries}&${peste}`}>click</Link> */}
            <div className="labels">
            <label className="priceLabel">
                {/* Peste: */}
                <input
                type="text"
                value={peste}
                onChange={e => setPeste(e.target.value)}
                />
            </label>
            <p style={{margin:"0 10px"}}>:</p>
            <label className="priceLabel">
                {/* Peste: */}
                <input
                type="text"
                value={sub}
                onChange={e => setSub(e.target.value)}
                />
            </label>
            </div>
            {/* <input type="submit" value="Save"/> */}
            </form>
            <div className="slide">
                <div className="progress" style={{left:`${peste/10}%`,right:`${(1000-sub)/10}%`}}></div>
            </div>
            <div className="multi-range-input">
                <input type="range" className="range-min" min="0" max="1000" value={peste} onChange={(event)=>setPeste(event.target.value<=parseInt(sub)-10?event.target.value:parseInt(peste))}/>
                <input type="range" className="range-max" min="0" max="1000" value={sub} onChange={(event)=>setSub(event.target.value>=parseInt(peste)+10?event.target.value:sub)}/>
            </div>
            <p></p>
            <p className="line"></p>
            <div className="down">
            <div className="Apply">
            {/* <p className="fa fa-check"></p> */}
                <Link className="applyButton fa fa-check" to={`/2/products/${addMiniProp(queries,"priceCat",`${peste}:${sub}`)}`}>Aplica</Link>
            </div>
            <div className="Reset">
                {/* <p className="fa fa-refresh"></p> */}
                <Link onClick={()=>{setPeste(0);setSub(1000)}} className="resetButton fa fa-refresh" to={`/2/products/${removeProp(queries,"priceCat")}`}> Reseteaza</Link>
            </div>
            </div>
        </div>
    )
}

export default Pret;
