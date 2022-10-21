import React,{Component} from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css"
import styled from "styled-components";

const linkstyle = {
    textDecoration: "none" ,
    color: "#0A093D"
};

function Navitems(props){
    return(
        <li id={props.item} className="nav_item">
            <Link to={props.tolink} className="nav_link" style={linkstyle}>{props.item}</Link>
        </li>
    );
}

export default Navitems;