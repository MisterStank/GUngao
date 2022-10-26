import React, { useEffect, useState } from "react";
import "./Chat.css";
import ScrollToButton from "react-scroll-to-bottom";
function Chat({socket,username,room}){
    const [currentMessage,setCurrentMessage] = useState("");
    const [messageList,setMessageList] = useState([]);

    const sendMessage = async () =>{
        if(currentMessage !== ""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() +":" +new Date(Date.now()).getMinutes()
            };

            await socket.emit("send_message",messageData);
            setMessageList((list) =>
                [...list,messageData]
            )
            setCurrentMessage("");
        }
    };

    useEffect(() =>{
        socket.on("recieve_message" , (data) =>{
            setMessageList((list) =>
                [...list,data]
                // added new message to the messagelist
            )
            
        });
        
        return ()=> socket.off("recieve_message");
    }, [socket]);

    return(
        <div className="chat-window">
        <div className="chat-header">
            <p>Live Chat</p>
        </div>
        <div className="chat-body">
            <ScrollToButton className="message-container">
            {messageList.map((msg) => {
                return (
                    <div className="message" id={username == msg.author ? "other" :"you"}>
                        <div>
                            <div className="message-content">
                                <p>{msg.message}</p>
                            </div>
                            <div className="message-meta">
                                <p>{msg.time}</p>
                                <p>{`  ${msg.author}`}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </ScrollToButton>
        </div>
        <div className="chat-footer">
            <input type="text" placeholder="Send Something" onChange={(event) =>{setCurrentMessage(event.target.value);}}/>
            <button onClick={sendMessage}>Send message</button>
        </div>
        </div>
    );
}
export default Chat;