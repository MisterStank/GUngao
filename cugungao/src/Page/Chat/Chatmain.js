import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./Chat.css"
const socket = io.connect("http://localhost:3001");

function Chatmain(){
    const [username , setUsername] = useState("AAA");
    const [room , setRoom] = useState("");
    const [showChat ,setShowChat] = useState(false);
    const joinRoom = () =>{
        if(username !== "" && room !== ""){
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }
    return (
        <div className="chatmain">
            <Chat socket={socket} username={username} room={room} onClick = {joinRoom}/>
        </div>
    );
}

export default Chatmain;