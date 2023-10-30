import { useState } from 'react'
import landing from '../assets/LandingPage.jpg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
        <img
        src= {landing}
        alt='Landing Image'
        className='top-0 left-0 w-full h-screen object-cover'
        />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto p-4 absolute'>
                <h1 className='font-bold text-4xl md:text-7xl drop-shadow-2xl'>For your everyday look</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-3 text-2xl'>Fashion is a form of self-expression adn outonomy at a particular period</p>
                <button className='bg-white text-black'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Home
