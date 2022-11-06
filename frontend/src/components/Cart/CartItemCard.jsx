import React from 'react'

const CartItemCard = ({item,deleteCartItems}) => {
  return (
    <div className='flex '>
        <div className='md:w-[150px] md:h-[200px] flex flex-col justify-center '> <img className='md:w-[120px] md md:h-[100px] md:mx-3 ' src={item.image} alt="imagsse" />  </div>
        <div className='w-[200px] flex flex-col justify-center'>
            <div className='text-center my-2'>{item.name}</div>
            <div className='text-center my-2'>price :{item.price} </div>

            <div onClick={()=>deleteCartItems(item.product)} className='text-center my-2 text-red-800 font-bold cursor-pointer' >Remove</div>
        </div>

      
    </div>
  )
}

export default CartItemCard
