import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#FAD5A5] flex justify-center items-center p-4'>

        <form method='POST' action='https://getform.io/f/42be4145-4efb-4e67-a74d-95fd16645922' className=' flex flex-col max-w-[600px] w-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#D5BDC3] text-[#2A8263]'>Contact</p>
                <p className='text-[#2A8263] py-4'>Submit the form below or shot me an email - rares.cosa@gmail.com</p>
            </div>

            <input className='bg-[#E7F3E2] p-2' type='text' placeholder='Name' name='name'></input>
            <input className='bg-[#E7F3E2] my-4 p-2' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#E7F3E2] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#6FA788] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#D5BDC3] hover:border-[#D5BDC3] border-[#6FA788]'>Let's Collaborate</button>

        </form>

    </div>
  )
}

export default Contact   