import React from "react";
import { Link } from "react-router-dom";
// import item_data from "../../../z_site2/data2/items-data";
import "./category_image_css.css"
import categorii from "../../../z_site2/data2/categorii";
function CategoryImage({gen,ctgr,title,description}){

    return(
        <div className="categoryImage">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            <Link className="link_all" to={`/2/products/gen=${gen}&ctgr=${ctgr}`}>
            <div className="all">
            <div className="left">
                <div className="text">
                    <div className="title">{categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]?categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["title"]:`${title}`}</div>
                    <div className="moreText">{categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]?categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["text"]:`${description}`}</div>
                    <button>Catre</button>
                </div>
            </div>
            <div className="right">
                <img src={categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]? categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["bannerNoDefault"]: categorii[0]["collections"]["one"]["bannerNoDefault"]} alt="" />
                {/* <img src={categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]? categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["banner"]: categorii[0]["collections"]["one"]["banner"]} alt="" /> */}
                <div className="text">
                    <div className="title">{categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]?categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["title"]:`${title}`}</div>
                    <div className="moreText">{categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]?categorii[gen==="man"?0:gen==="woman"?1:gen==="child"?2:0]["collections"][ctgr]["text"]:`${description}`}</div>
                    <button style={{color:"unset", textDecoration:"underline"}}>Catre</button>
                </div>
            </div>
            </div>
            </Link>
        </div>
    )
}
export default CategoryImage;