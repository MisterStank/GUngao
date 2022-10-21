import React from "react";
import { Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Homepagebody, Homepagetext1,Homepagetext2,Homepageparagraph1,Homepageparagraph2} from './HomepageComponent';
function Homepage(){
    return(
        <div>
            <Homepagebody>
                <Homepagetext1>
                    <Homepageparagraph1> เหงาปาก เหงาใจ
                        <br/>ไร้เพื่อนคุย</Homepageparagraph1>
                </Homepagetext1>
                <Homepagetext2>
                    <Homepageparagraph2>
                        ให้เราหา "เพื่อนคุย" ให้กับคุณ
                    </Homepageparagraph2>
                </Homepagetext2>
            </Homepagebody>
        </div>
    );
}

export default Homepage;