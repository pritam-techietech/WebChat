import { useMediaQuery } from 'react-responsive';
import Conversations from './Conversations'
import Logoutbutton from './Logoutbutton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 639px)' });
  return (
    <div className={`${!isSmallScreen && 'border-r border-slate-500'} p-4 flex flex-col`}>
        <SearchInput/>
        {!isSmallScreen && <div className='divider px-3'></div>}
        <Conversations/>
        <Logoutbutton />
    </div>
  )
}

export default Sidebar