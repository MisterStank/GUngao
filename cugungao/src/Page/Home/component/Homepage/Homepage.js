import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Homepagebody, Homepagetext1,Homepagetext2,Homepageparagraph1,Homepageparagraph2} from './HomepageComponent';
import { Topic,Contain,Text,Selectt, Select_Contain , BtnLink} from './PageselectComponent'
import { db , getTopics} from "../../../../firebase";
import { addDoc, collection, getDocs, QuerySnapshot ,doc} from "firebase/firestore";

/*
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
*/
function Homepage(){

    const [selectTopic , setSelectTopic] = useState("");
    const [selectRoom , setSelectRoom] = useState(0);
    const [roomid,setRoomid] = useState(0);
    const [topic,setTopic] = useState("");
    const [topicList,setTopicList] = useState([]);
    const [options ,setOptions] = useState([]);
    //const [isadding,setIsadding] = useState(false);
    
    // set the optionslist
    const findRoom = () => {
        var a = document.getElementById('selecttopic').options[0].value;
        console.log(a)
        // try {
        //     const topicsref = collection(db , "Topics");
        //     const topicdata = await getDocs(topicsref);
        //     topicdata.forEach(doc =>{
        //         //console.log(doc.data());
        //         if(doc.data().name == selectTopic) setSelectRoom(doc.data().room);
        //     })
        // }catch(err){
        //     console.log(err);
        // }
        // console.log(selectRoom);
    }
    const renderoptions = async() =>{
        try {
            const topicsref = collection(db , "Topics");
            const topicdata = await getDocs(topicsref);
            topicdata.forEach(doc =>{
                //console.log(doc.data());
                if( !options.includes({value: doc.data().name , label: doc.data().name}));{
                    setOptions((list) => [...list,{value: doc.data().name , label: doc.data().name}]);
                }
            })
        }catch(err){
            console.log(err);
        }

    };

    const newTopic = async(e) =>{
        e.preventDefault();
        try{
           // find max room id exist
           const topicsref = collection(db , "Topics");
           const topicdata = await getDocs(topicsref);
           var maxid = 0;
           topicdata.forEach(doc =>{
               var newid = doc.data().room;
               console.log(newid);
               if(maxid < newid){
                   maxid = newid;
               }
           })
            setRoomid((tar) =>(maxid+1));
            console.log("add");
            console.log(topic);
            addDoc(collection(db,"Topics"),{
                name:topic,
                room:maxid+1
            })
            
        }catch(err){
            alert(err);
        }
        //set the options
        renderoptions();
        //setIsadding(false);
    };
    
    useEffect (() =>{
        
        renderoptions();
        
        return() => {};
    },[]);
    
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
                            id='selecttopic'
                            // value = {options.filter(obj => obj.value === selectTopic)}
                            // onChange = {(e) => setSelectTopic(e.value)}
                        />  
                    </Contain>
                    <Contain>
                        <input type="text"  placeholder="Enter your own topic..."
                        onChange={(event) =>{
                            setTopic(event.target.value);
                        }}
                        />
                        <button onClick={newTopic}>add topic</button>
                    </Contain>
                    <Contain>
                        <BtnLink to='/chat' onClick={findRoom}>Find my Chat-mate!</BtnLink>
                    </Contain>
                </Select_Contain>
            </Topic>
        </div>
    );
}

export default Homepage;