import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FAD5A5] text-[#2A8263]'>

        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> {/* Create two containers (columns) */}

                <div className='sm:text-right pb-8 pl-4' >
                    <p className='text-4xl font-bold inline border-b-4 border-[#D5BDC3]'>About</p>
                </div>

            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> {/* Create another two containers (columns) underneath */}

                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi! I'm Rares, nice to meet you! Please take a look around.</p>
                </div>
                <div>
                    <p>
                        I would love to be part of a team of passion-driven people so that 
                        I can work towards developing both the company, and myself, as a person. 
                        I very much enjoy solving problems, challenging myself by learning new things 
                        and putting my mind to the test alongside the other programmers.
                    </p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About