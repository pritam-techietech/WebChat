import { createContext, useContext, useState } from "react";
import { UserModel } from "../models/UserModel";

interface UserContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}
export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}
});

export const useUserContext = ()=>{
  return useContext(UserContext);
}

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const localUser : string | null = localStorage.getItem('chat-user');
    const [user, setUser] = useState(localUser);

    return(
       <UserContext.Provider value={{user, setUser}}>
        {children}
       </UserContext.Provider>
    )
  }