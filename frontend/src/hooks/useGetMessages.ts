import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getMessages as GetMessages } from "../network/MessageApi";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { getSelectedConversation, setMessages, messages } = useConversation();

  useEffect(()=>{
    const getMessages = async () => {
        setLoading(true);
        try {
          const messages = await GetMessages({
            receiverId: getSelectedConversation()?._id,
          });
          console.log(messages);
          setMessages(messages);
        } catch (error) {
          toast.error(String(error));
        } finally {
          setLoading(false);
        }
      };
    getMessages();
  },[getSelectedConversation()])
  return {
    loading,
    messages,
  };
};

export default useGetMessages;
