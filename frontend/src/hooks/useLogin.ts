import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUserContext } from '../context/UserContext';
import { LoginBodyInterface } from '../interfaces/LoginBodyInterface';
import { UserModel } from '../models/UserModel';
import { loginUser } from '../network/UsersApi';

const useLogin = () => {
  
    const [loading, setLoading] = useState(false);
    const {setUser} = useUserContext();
    const login = async (data:LoginBodyInterface)=> {
        const isSuccess = handleInputErrors(data);
        if(!isSuccess){
            return;
        }
        setLoading(true);
        try {
            const res:UserModel = await loginUser(data);
            // console.log(res);
            localStorage.setItem('chat-user', JSON.stringify(res));
            setUser(res);
        } catch (error) {
            toast.error(String(error));
        } finally{
            setLoading(false);
        }
    }

    const handleInputErrors = ({username, password, }:LoginBodyInterface)=>{
        if(!username || !password ){
            toast.error("Please fill in all required fields");
            return false;
        }
        return true;
    }
    return {
        login,
        loading,
    }
}

export default useLogin