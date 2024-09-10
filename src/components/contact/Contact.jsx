import React from 'react'

const Contact = () => {
  return (
    <div className='mt-5 p-5 justify-center mx-28'>
      <h1 className='text-center text-3xl'>Contact</h1>
      <h2 className='text-center'>Open to full time, remote jobs or freelance projects</h2>
      <form className='border-solid border-orange-400 border-2 px-[5%] flex flex-col'>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <button className='bg-slate-600 mx-[30%] rounded-md my-3 py-2 ' type="submit">Submit</button>
      </form>
      <p className='text-xl py-5'>
        Or, you can reach me at my personal email: <a href="mailto:adaezeezuma16@gmail.com">adaezeezuma16@gmail.com</a>
      </p>

      
    </div>
  )
}

export default Contact