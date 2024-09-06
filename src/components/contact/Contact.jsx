import React from 'react'

const Contact = () => {
  return (
    <div className='mt-5 p-5 justify-center mx-28'>
      <h1 className='text-center'>Contact</h1>
      <h2 className='text-center'>Open to full time, remote jobs or freelance projects</h2>
      <form className='border-solid border-orange-400 border-2 flex flex-col'>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <button className='bg-slate-400 mx-20' type="submit">Submit</button>
      </form>
      <p className='text-xl'>
        Or, you can reach me at my personal email: <a href="mailto:adaezeezuma16@gmail.com">adaezeezuma16@gmail.com</a>
      </p>

      <h2>Social Media</h2>
      <div>
        <a href="#"><img src="facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
    </div>
    </div>
  )
}

export default Contact