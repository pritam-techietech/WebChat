import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const userSocketMap: { [key: string]: string } = {};

export const getReceiverSocketId = (receiverId:string) => {
    return userSocketMap[receiverId];
}

io.on('connection',(socket)=>{
    // console.log('a user connected', socket.id);
    const userId = socket.handshake.query.userId as string;
    const username = socket.handshake.query.username as string;
    // console.log("username : " + username);
    if(userId !== undefined){
        userSocketMap[userId] = socket.id;
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
    socket.on('disconnect',()=>{
        // console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
    // socket.on('chat message',(msg)=>{
    //     console.log('message: ',msg);
    //     io.emit('chat message',msg);
    // })
})
export {app, io, server}