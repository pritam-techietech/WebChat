import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUserContext } from '../context/UserContext';
import { logoutUser } from '../network/UsersApi';
const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useUserContext();
    const logout = async() => {
        setLoading(true);
        try {
            const res = await logoutUser();
            console.log(res);
            localStorage.removeItem('chat-user');
            setUser(null);
        } catch (error) {
            toast.error(String(error));
        } finally {
            setLoading(false);
        }

    }

    return {
        logout,
        loading,
    }

}

export default useLogout