import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FAD5A5]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#BA919C] text-lg'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#6FA788]'>Rares Cosa</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#2A8263]'>I'm a Software Developer.</h2>
            <p className='text-[#2A8263] py-4 max-w-[740px]'>
                I'm a software developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building responsive web applications.
                I love working with React, HTML and Tailwind CSS!
            </p> 
            
            <div>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-[#6FA788] group border-2 border-[#6FA788] px-6 py-3 my-2 flex items-center hover:bg-[#D5BDC3] hover:border-[#D5BDC3]'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span> 
                    </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home