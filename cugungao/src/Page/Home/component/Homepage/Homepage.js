import React, { useState } from "react";
import { Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {Homepagebody, Homepagetext1,Homepagetext2,Homepageparagraph1,Homepageparagraph2} from './HomepageComponent';
import { Topic,Contain,Text,Selectt, Select_Contain , BtnLink} from './PageselectComponent'
import { db , getTopics} from "../../../../firebase";
import { addDoc, collection, getDocs, QuerySnapshot } from "firebase/firestore";

/*
const options = db.collection("Topics")
.onSnapshot((querySnapshot) =>{
    querySnapshot.forEach((doc) => {
        options.push(doc.data());
    });
});

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
*/
function Homepage(){
    const [roomid,setRoomid] = useState(0);
    const [topic,setTopic] = useState("");
    const [topicList,setTopicList] = useState([]);
    const [options ,setOptions] = useState([{ value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'guy' , label: 'guy2yo'}
]);
    /*
    const setTopics = async ()=>{
        const topicdata = await getTopics(db);
        topicdata.forEach(element => {
            console.log({value: element.data().name, label: element.data().name });
            setOptions(...options,{value: element.data().name, label: element.data().name })
        });
    };
    */
    const newTopic = async(e) =>{
        e.preventDefault();
        try{
            console.log("add");
            console.log(topic);
            addDoc(collection(db,"Topics"),{
                name:topic,
                room:roomid
            })
            setRoomid(roomid+1);
        }catch(err){
            alert(err);
        }
        //set the options
        const topics = collection(db,"Topics");
        getDocs(topic).then((snapshot) =>{
            snapshot.docs.forEach(tp =>{
                console.log(tp.data());
                setOptions(...options,{value: tp.data().name, label: tp.data().name });
            });
        })
        /*
        const topicdata = await getTopics(db);
        topicdata.docs.forEach((element) => {
            console.log(element.data());
            //console.log({value: element.data().name, label: element.data().name });
            //setOptions(...options,{value: element.data().name, label: element.data().name });
        });
        */
    };
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
                        <input type="text"  placeholder="Enter your own topic..."
                        onChange={(event) =>{
                            setTopic(event.target.value);
                        }}
                        />
                        <button onClick={newTopic}>add topic</button>
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