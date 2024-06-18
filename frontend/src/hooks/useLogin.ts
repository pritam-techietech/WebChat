import React, { useState } from 'react'
import { LoginBodyInterface } from '../interfaces/LoginBodyInterface';
import toast from 'react-hot-toast';
import { loginUser } from '../network/UsersApi';
import { useUserContext } from '../context/UserContext';
import { UserModel } from '../models/UserModel';

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
            console.log(res);
            localStorage.setItem('chat-user', JSON.stringify(res));
            setUser(JSON.stringify(res));
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