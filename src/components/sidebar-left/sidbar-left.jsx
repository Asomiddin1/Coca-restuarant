
export const SidbarLeft = () => {
    

  return (
    <div className={` min-w-[99px]   w-[110px]`} >
        <div className='flex sticky top-[84px] bottom-[700px] flex-col h-[650px] sidebar_right py-4  items-center gap-3 ' >
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
