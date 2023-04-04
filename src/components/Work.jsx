import React from 'react'

import WorkImg from '../assets/workImg.jpeg'
import PortofolioImg from '../assets/portofolioImg.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#2A8263] bg-[#FAD5A5]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#D5BDC3]'>Work</p> 
                <p className='py-4 '>Check out some of my recent work</p>
            </div>

            {/* Container for all projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Card Item */}
                <div style={{backgroundImage: `url(${PortofolioImg})`}} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div border-4 border-[#D5BDC3]'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider text-white text-center'>
                            React JS Application
                        </span>
                        <p className='font-bold text-white text-center'>(You are looking to it right now)</p>

                        <div className='pt-8 text-center'>

                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#6FA788] font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Rares-Cosa/portofolio-website' target='_blank' rel="noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#6FA788] font-bold text-lg'>Code</button>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Work