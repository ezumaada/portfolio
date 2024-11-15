import React from 'react'

const Resume = () => {
  return (
    <div className='items-center flex flex-col mt-5'>
     <p className='text-xl my-3'>Get my Resume here</p> 
      <button className='bg-blue-400 text-white font-bold py-2 px-4 rounded'><a href="/resume.pdf" download="Ezuma.Ada-resume" >Download my resume</a></button>
    </div>
  )
}

export default Resume