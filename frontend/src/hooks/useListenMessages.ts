import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notificationSound from '../assets/sound/notification.mp3';
import { MessageModel } from "../models/MessageModel";

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages, selectedConversation} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage", (message:MessageModel) => {
      if(message.senderId === selectedConversation?._id){
          const audio = new Audio(notificationSound);
          audio.play();
          setMessages([...messages, message]);
        }
    });
    return () => {
      socket?.off("newMessage");
    }
  },[socket, messages, setMessages, selectedConversation]);
}

export default useListenMessages