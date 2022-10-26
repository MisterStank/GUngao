const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors");
const { Server} = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server (server , {
    cors:{
        origin:"http://localhost:3000" ,
        method: ["GET" , "POST"] ,
    },
});
// deal with user connection to the server
io.on("connection" , (socket) =>{
    console.log(`User is connected  ${socket.id}`);

    socket.on("join_room" , (data)=>{
        socket.join(data);
        console.log(`User id: ${socket.id} join the room id ${data}`);
    });

    socket.on("send_message" ,(data) =>{
        socket.to(data.room).emit("recieve_message" , data);
    });

    socket.on("disconnect" , () =>{
        console.log(`User is disconnected ${socket.id}`);
    });
});

server.listen(3001, ()=>{
    console.log("Server is running ...");
});