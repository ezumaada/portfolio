import React,  { useState, useEffect } from 'react'

const About = () => {
    const fixedText = "Ada is ";
    const changingTexts = ["a web developer.", "a tech enthusiast.", "a full-stack developer." , "Ready to work."];
    const [currentText, setCurrentText] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentText((prevText) => (prevText + 1) % changingTexts.length);
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [changingTexts.length]);
  return (
    <div className='mt-28 px-[5%]'>
        <div>
          <h1>Dev. Ezuma Ada</h1>
        <h1 className="text-2xl font-bold text-center">
             {`${fixedText} ${changingTexts[currentText]}`}
        </h1>
        <p>Ada is a dedicated web developer with a passion for creating innovative and efficient web solutions. With a keen eye for detail and a deep understanding of the latest technologies, Ada consistently delivers high-quality projects that meet and exceed client expectations. Her expertise spans across front-end and back-end development, making her a versatile and valuable asset in any development team.
        Proficient in ReactJs and Tailwind CSS,
        Ada's journey as a web developer began with a fascination for how websites work, leading her to master various programming languages and frameworks. Her commitment to continuous learning ensures that she stays up-to-date with industry trends and best practices. Ada is proficient in using React and Vite to build dynamic, responsive web applications, and she has a strong foundation in HTML, CSS, and JavaScript.</p>
        </div>
    </div>
  )
}

export default About