import React, { useContext } from 'react'
import { Context } from '../../context'

const Modal = ({children}) => {
    const {state , dispatch } = useContext(Context) 
    const closeMenu = (e)=>{
       if(e.target.className.includes('clmenu')){
        dispatch({type:'SET_MODAL'})
       }  
    }
  return (
    <div onClick={closeMenu} className='clmenu fixed flex justify-center items-center top-0 bottom-0 right-0 left-0   bg-[#00000088]'>
    {children}
    </div>
  )
}

export default Modal