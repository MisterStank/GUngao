import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./Chat.css"
import { selectRoom ,usern } from "../Home/component/Homepage/Homepage";
const socket = io.connect("http://localhost:3001");

function Chatmain(){
    const [username] = useState(usern);
    const [room , setRoom] = useState(selectRoom);
    
    const joinRoom = () =>{
        console.log("join room",room);
        socket.emit("join_room", room);
    }
    useEffect(()=>{
        socket.emit("join_room", selectRoom);
    },[]);

    return (
        <div className="chatmain">
            <Chat socket={socket} username={username} room={selectRoom} />
        </div>
    );
}

export default Chatmain;