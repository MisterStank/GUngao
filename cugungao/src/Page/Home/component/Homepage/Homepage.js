import React from "react";
import { Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Homepagebody, Homepagetext1,Homepagetext2,Homepageparagraph1,Homepageparagraph2} from './HomepageComponent';
import { Topic,Contain,Text,Selectt, Select_Contain , BtnLink} from './PageselectComponent'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
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
            <Topic>
                <Select_Contain>
                    <Contain inside = 'choose'>
                        <Text>Choose your topic</Text>
                    </Contain>
                    <Contain inside = 'select'>
                        <Selectt
                            options={options}
                            placeholder={'Select Topic'}
                            clearable={true}
                        />  
                    </Contain>
                    <Contain>
                        <BtnLink to='/chat'>Find my Chat-mate!</BtnLink>
                    </Contain>
                </Select_Contain>
            </Topic>
        </div>
    );
}

export default Homepage;