import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const Logoutbutton = () => {
  const {loading,logout} = useLogout()

  return (
    <div className='mt-auto hover:bg-slate-400 w-fit cursor-pointer rounded-md p-1'>
      {loading ? (
        <div className='w-6 h-6 text-red-600 animate-spin'></div>
      ) : (
        <BiLogOut className=' w-6 h-6 text-red-600' onClick={logout}/>
      )}
      
      
      </div>
  )
}

export default Logoutbutton