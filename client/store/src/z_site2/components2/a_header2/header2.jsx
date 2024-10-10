import React from "react";
import { Link } from "react-router-dom";
import "./z_header2_css.css"

function Header2(){
    return(
        <div className="HeaderPage2">

        <div className="Row1">
            <div className="filtre">
            <p>Barbati</p>
            <p>Femei</p>
            <p>Copii</p>
            </div>
            
            
            <div className="Logo">
            <Link to="/">
            <p className="logo">Magazin Online</p>
            </Link>
            </div>

            <div className="Header2">
            <p>Favorite</p>
            <p>Cos</p>
            <p>More</p>
            </div>

            </div>
        <div className="Row2">
            <div className="CategoriiH">
                <p>Geci</p>
                <p>Hanorace</p>
                <p>Camasi</p>
                <p>Tricouri</p>
                <p>Pantaloni</p>
                <p>Incaltaminte</p>
            </div>
            <div className="Search">
            <p className="search">Search</p>
            </div>
        </div>
        </div>
        
    )
}
export default Header2