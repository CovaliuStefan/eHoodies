import React from "react";
import BannerHome from "./banner_home";
import SliderProducts from "./slider_products";
import "./body_home_css.css";
import CategoryImage from "./category_image";
import SliderCategories from "./slider_categories";
function BodyHome(){
    return(
        <div>
            <BannerHome />
            <CategoryImage gen={"woman"} ctgr={"three"} title={'title'} description={"description"}/>
            <SliderProducts title={"News"} gen={"man"} category={"imbracaminte"} brand={["nike"]}/>
            <SliderCategories gen={"woman"} ctgr={["one","two","three","four","oneg","twog","threeg","fourg"]} title={'title'} description={"description"}/>
            <SliderProducts title={"Top"} gen={"woman"} category={"imbracaminte"}/>
            <CategoryImage gen={"woman"} ctgr={"one"} title={'title'} description={"description"}/>
            <SliderProducts title={"Releases"} category={"imbracaminte"}/>
        </div>
    )
}

export default BodyHome;