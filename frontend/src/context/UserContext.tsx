import { createContext, useContext, useState } from "react";
import { UserModel } from "../models/UserModel";

interface UserContextProps {
  user: UserModel | null;
  setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
}
export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let localUser: UserModel | null = null;
  const userString = localStorage.getItem("chat-user");
  if (userString) {
    localUser = JSON.parse(userString);
  } else {
    localUser = null;
  }
  // const localUser : UserModel | null = JSON.parse();
  const [user, setUser] = useState(localUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
