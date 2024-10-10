import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Filters_css.css"

function Color(){
    const {queries} = useParams()
    const colors=[{"Negru":"#000000"},{"Gri":"#808080"},{"Alb":"#f2f2f2"},{"Rosu":"#ff0000"},{"Orange":"#ff6600"},{"Glaben":"#ffff00"},{"Verde":"#008000"},{"Albastru":"#0000ff"},{"Mov":"#6600cc"},{"Roz":"#ff00ff"},{"Maro":"#663300"},{"Bej":"#d9b38c"},{"Multicolor":"#ffffff"}]
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
    function addMiniProp(q,s1,s2){
        if(!q)return false;
        if(q.includes(s1)){
            let idx1=q.indexOf(`${s1}`)
            let idx2=q.indexOf('&',idx1)
            if(idx2===-1)idx2=q.length
            if(q.substring(idx1+1+s1.length,idx2).includes(s2)){
                let text2=q.substring(idx1+1+s1.length,idx2)
                let one = q.substring(0,idx1+1+s1.length)
                let two = q.substring(idx2,q.length)
                if(text2===`${s2}`)
                return (q.substring(0,idx1-1)+q.substring(idx2,q.length))
                let idx3=text2.indexOf(`${s2}`)
                let text3=text2.substring(0,idx3)
                let text4=text2.substring(idx3+s2.length,text2.length)
                let q2=one+text3+text4+two
                return q2
            }
            else{
                let text=q.slice(0,idx2)+`${s2}`+q.slice(idx2)
                return text;
            }
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
    return(
        <div className="ColorFilters">
            <p className="Title">Culori</p>
            <div className="Culori">
                {colors.map((item,index)=>{
                    return(
                        <Link key={index} className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes(`-${Object.values(colors[index])[0].slice(1)}-`)?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat",`-${Object.values(colors[index])[0].slice(1)}-`)}`}><div className="fColor" style={{backgroundColor:Object.values(colors[index])[0], border:"1px solid black"}}></div>{Object.keys(colors[index])[0]}</Link>
                    )
                })}
                {/* <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Negru-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Negru-")}`}><div className="fColor"></div>Negru</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Gri-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Gri-")}`}>Gri</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Alb-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Alb-")}`}>Alb</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Rosu-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Rosu-")}`}>Rosu</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Orange-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Orange-")}`}>Orange</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Galben-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Galben-")}`}>Galben</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Verde-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Verde-")}`}>Verde</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Albastru-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Albastru-")}`}>Albastru</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Mov-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Mov-")}`}>Mov</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Roz-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Roz-")}`}>Roz</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Maro-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Maro-")}`}>Maro</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Bej-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Bej-")}`}>Bej</Link>
                <Link className={getProp(queries,"colorCat")?getProp(queries,"colorCat").includes("-Multicolor-")?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"colorCat","-Multicolor-")}`}>Multicolor</Link> */}
            </div>
            <p className="line"></p>
            <div className="Reset">
                <p className="fa fa-refresh"></p>
                <Link className="resetButton" to={`/2/products/${removeProp(queries,"colorCat")}`}>Reseteaza</Link>
            </div>
        
        </div>
    )
}

export default Color;
