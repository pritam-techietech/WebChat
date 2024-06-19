import MessageContainer from '../components/messages/MessageContainer'
import Sidebar from '../components/sidebar/Sidebar'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-6'>
      <Sidebar/>
      <MessageContainer/>

    </div>
  )
}

export default HomePage