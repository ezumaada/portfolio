import React from 'react';
import xlogo from '../../images/twitter-logo.png';
import gitlogo from '../../images/git-logo.png';
import linkedlogo from '../../images/linkedin-logo.png';

const Socials = () => {
  return (
    <div className='my-8 text-center'>
      <p className='text-xl mb-4'>Check out my Social media</p>
      
      {/* Container for social links */}
      <div className='flex flex-col md:flex-row justify-around items-center gap-4'>
        <div className='flex items-center gap-2'>
          <img src={xlogo} className='w-6 h-6' alt="Twitter" />
          <a href="https://twitter.com/_adathebaddie?t=vJ71FtZ0dTTZSdEdIx-nCg&s=09" className="hover:underline">
            Twitter: @_adathebaddie
          </a>
        </div>
        
        <div className='flex items-center gap-2'>
          <img src={gitlogo} className='w-6 h-6' alt="Github" />
          <a href="https://github.com/ezumaada" className="hover:underline">
            Github: @ezumaada
          </a>
        </div>

        <div className='flex items-center gap-2'>
          <img src={linkedlogo} className='w-6 h-6' alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/adaeze-ezuma-bb0b83197?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7Xl%2FLI1gTtmS0dyixFt3UQ%3D%3D" className="hover:underline">
            LinkedIn: Adaeze Ezuma
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
