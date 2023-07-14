
export const SidbarLeft = () => {
  return (
    <div className='flex flex-col w-[100px] h-[100vh] sidebar_right py-4  items-center gap-3 ' >
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
  )
}
