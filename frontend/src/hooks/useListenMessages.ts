import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notificationSound from '../assets/sound/notification.mp3';

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage", (message) => {
        const audio = new Audio(notificationSound);
        audio.play();
      setMessages([...messages, message]);
    });
    return () => {
      socket?.off("newMessage");
    }
  },[socket, messages, setMessages]);
}

export default useListenMessages