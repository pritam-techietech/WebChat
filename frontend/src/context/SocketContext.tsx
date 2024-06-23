import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContext";
import { Socket, io } from "socket.io-client";


interface SocketContextProps {
  onlineUsers: string[];
  socket: Socket | null;
}
export const SocketContext = createContext<SocketContextProps>({
  onlineUsers: [],
  socket: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
}

export const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      // const socket = io("https://webchat-ewm8.onrender.com",{
      const socket = io("http://localhost:5000",{
        query: {
          userId: user._id,
          username: user.username,
        },
      });
      
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })

      // return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};
