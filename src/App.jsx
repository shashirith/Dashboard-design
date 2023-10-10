import { useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './screens/Dashboard'
import useViewport from './viewport/useViewport'

function App(props) {
  const { user, setUser } = props
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex justify-center bg-[#F8FAFF]'>
      <div className=' vsm:justify-center flex flex-row xl:gap-[67px] lg:gap-[15px] xl:px-0 lg:px-[30px] md:px-[30px] sm:px-[30px] w-[1360px] min-h-[100vh] vsm:py-[20px] sm:py-[40px]'>
        {(width > 1350 | isOpen) ? <Sidebar setIsOpen={setIsOpen} isOpen={true} /> : null}
        <div className='xl:w-[100%] w1080px:w-[1000px]'>
          <Navbar setUser={setUser} user={user} setIsOpen={setIsOpen} />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
