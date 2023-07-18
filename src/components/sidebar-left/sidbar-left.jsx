import { useContext } from 'react'
import { Context } from '../../context'

export const SidbarLeft = () => {
    const {state , dispatch} = useContext(Context)

  return (
    <div className={` min-w-[99px]   w-[110px]`} >
        <div className='flex sticky top-[75px] bottom-[700px] flex-col h-[650px] sidebar_right py-4  items-center gap-3 ' >
        <div className=' rounded sidbar_gradient'>
            <img src={require('./images/Coffee.png')} alt="" />
        </div>
        <div className='rounded sidbar_gradient'>
            <img src={require('./images/Beverages.png')} alt="" />
        </div>
        <div className='rounded sidbar_gradient'>
            <img src={require('./images/Appetizer.png')} alt="" />
        </div>
        <div className='rounded sidbar_gradient'>
            <img src={require('./images/Bread.png')} alt="" />
        </div>
        <div className='rounded sidbar_gradient'>
            <img src={require('./images/Snack.png')} alt="" />
        </div>
    </div>
    </div>
  )
}
