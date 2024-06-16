import { useState } from 'react';
import toast from 'react-hot-toast';
import { SignupBodyInterface } from '../interfaces/SignupBodyInterface';
import { signupUser } from '../network/UsersApi';

const useSignup = () => {
 
    const [loading, setLoading] = useState(false);
    const signup = async (data:SignupBodyInterface)=> {
        const isSuccess = handleInputErrors(data);
        if(!isSuccess){
            return;
        }
        setLoading(true);
        try {
            const res = await signupUser(data);
            console.log(res);
        } catch (error) {
            toast.error(String(error));
        } finally {
            setLoading(false);
        }

    }

    const handleInputErrors = ({username, fullName, gender, password, confirmPassword}:SignupBodyInterface)=>{
        if(!username || !fullName || !gender || !password || !confirmPassword){
            toast.error("Please fill in all required fields");
            return false;
        }
        if(password!==confirmPassword){
            toast.error("Password did not match. Try again...");
            return false;
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }

    return {
        signup,
        loading
    }
}

export default useSignup