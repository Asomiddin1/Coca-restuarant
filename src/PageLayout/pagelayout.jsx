import React from 'react'
import { Outlet } from 'react-router-dom'

const Pagelayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Pagelayout