import { useState } from 'react';
import toast from 'react-hot-toast';
import { SendMessageInterface } from '../interfaces/SendMessageInterface';
import { sendMessage as SendMessage } from '../network/MessageApi';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages} = useConversation();

  const sendMessage = async (data:SendMessageInterface) => {
    setLoading(true);
    try {
      const message = await SendMessage(data);
      setMessages([...messages, message]);
      toast.success("Message sent");
    } catch (error) {
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  }
  return {loading, sendMessage}
}

export default useSendMessage