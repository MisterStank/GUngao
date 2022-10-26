import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./Chat.css"
const socket = io.connect("http://localhost:3001");

function Chatmain(){
    const [username , setUsername] = useState("");
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
            {!showChat ? (
            <div className="joinChatContainer">
                <h3>Join a chat</h3>
                <input type="text" placeholder="Enter Your Username..." onChange={(event) =>{setUsername(event.target.value);}}/>
                <input type="text" placeholder="Enter Room ID..." onChange={(event) =>{setRoom(event.target.value);}}/>
                <button onClick={joinRoom}>Join a room</button> 
            </div>
             ) : (
            <Chat socket={socket} username={username} room={room}/>
            )}
        </div>
    );
}

export default Chatmain;