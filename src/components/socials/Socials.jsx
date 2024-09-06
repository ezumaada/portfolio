import React from 'react';
import xlogo from '../../images/twitter-logo.png';
import gitlogo from '../../images/git-logo.png';
import linkedlogo from '../../images/linkedin-logo.png';


const Socials = () => {
  return (
    <div className=' my-8  text-center flex flex-row justify-around'>
      <p className='text-xl'>Check out my Social media</p>
      <div className=' gap-3  inline-block border-b-2 border-black px-4 py-2'>
      <div className='flex'><img src={xlogo} className='w-[20px] h-[20px]' alt="" /> <a href="https://twitter.com/_adathebaddie?t=vJ71FtZ0dTTZSdEdIx-nCg&s=09">Twitter: @_adathebaddie </a></div>
      <div  className='flex'><img src={gitlogo} className='w-[20px] h-[20px]' alt="" /> <a href="https://github.com/ezumaada">Github: @ezumaada</a></div>
      <div  className='flex'><img src={linkedlogo} className='w-[20px] h-[20px]' alt="" /> <a href=""></a></div>
      </div>
    </div>
  )
}

export default Socials