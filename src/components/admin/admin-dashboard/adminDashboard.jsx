import React, { useContext } from 'react'
import Navbar from '../admin-navbar/navbar'
import Sidebar from '../admin-sidebar/sidebar'
import Main from '../admin-main/main'
import { Context } from '../../../context'

const AdminDashboard = () => {
  let { state, dispatch } = useContext(Context)
  return (
    <div>
      <div className=""><Navbar /></div>
      <div className="main  mt-[76px] flex flex-1 justify-between">
        <Sidebar />
        <div className={`main ${state.toggle ? ' md:ml-[310px]' : ' ml-0 md:ml-[90px]'} overflow-auto w-full h-full z-10`}>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard