import React from 'react'

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactJS from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"
import Github from "../assets/githubskill.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#FAD5A5] text-[#2A8263]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#D5BDC3]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JavaScript" className='w-20 mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={ReactJS} alt="ReactJS" className='w-20 mx-auto'/>
                    <p className='my-4'>React JS</p>
                </div>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="Tailwind" className='w-20 mx-auto'/>
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#C8AA84] hover:scale-110 duration-500'>
                    <img src={Github} alt="Github" className='w-20 mx-auto'/>
                    <p className='my-4'>GitHub</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Skills