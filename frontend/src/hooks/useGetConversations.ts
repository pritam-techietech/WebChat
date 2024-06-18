import { useEffect, useState } from 'react';
import { getUsersForSidebar } from '../network/UsersApi';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() =>{
    const getConversations = async () => {
        const users = await getUsersForSidebar();
        setConversations(users);
    }
    getConversations();
  },[])

  return {
    loading,
    conversations,
  }
}

export default useGetConversations