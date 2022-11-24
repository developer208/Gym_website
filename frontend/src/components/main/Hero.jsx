import React from 'react'
// import herovid from '../../assets/images/gym.jpg'

const Hero = () => {
  return (
    <div className='md:h-[100%] md:opacity-100 text-[orange]  '>
         <div className=' w-full flex-col mt-32 absolute md:mt-[480px] hidden '>
            <div className='text-xl w-full flex justify-center  '>BUILD UP YOUR </div>
            <div className='w-full text-4xl flex justify-center '>STRENGTH</div>
            
            <div className='w-full flex justify-center p-5 '>
            
            <span></span>
            </div>
        </div>
        <img className=' h-full w-full  md:h-[60%] ' src="https://res.cloudinary.com/dqyvomyqy/image/upload/v1669051005/GymWebsite/slide2_fqzrfe.jpg" alt='' ></img>
       
      
    </div>
  )
}

export default Hero
