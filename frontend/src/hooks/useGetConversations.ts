import { useEffect, useState } from "react";
import { getUsersForSidebar } from "../network/UsersApi";
import { UserModel } from "../models/UserModel";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<UserModel[]>([]);
  // console.log("Conversation state changed");

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      const users = await getUsersForSidebar();
      setLoading(false);
      setConversations(users);
    };
    getConversations();
  }, []);

  return {
    loading,
    conversations,
    setConversations,
  };
};

export default useGetConversations;
