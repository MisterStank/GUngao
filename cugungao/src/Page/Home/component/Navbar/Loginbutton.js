import React from "react";
import styled from "styled-components";
import { Button } from "../../../Loginandsignuppage/LoginComponents";
import {Link} from "react-router-dom";
import "./Navbar.css"
function Loginbutton(props){
    return(
        <button id="log-in-button">
            <Link to={props.tolink} id="log-in-link" >Log-in</Link>
        </button>
    );
}
export default Loginbutton;