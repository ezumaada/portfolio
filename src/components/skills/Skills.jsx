import React from 'react';
import javascript from '../../images/js.png';
import html from '../../images/html5.png';
import vanilla from '../../images/vancss.png';
import tailwind from '../../images/tailwind.png';
import typescript from '../../images/typescript.png';
import reactjs from '../../images/react.png';
import canva from '../../images/canva.webp';
import cssm from '../../images/vancss.png';
import material from '../../images/matui.png';
import bootstrap from '../../images/bootstrap.png';
import mysql from '../../images/sql.jpg';

const Skills = () => {
  const Card = (props) => {
    return (
      <div className="bg-white text-gray-600 border-solid border-2 p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-md">
        <img src={props.image} className="w-12 h-12 mb-4 mx-auto" alt={props.title} />
        <div>
          <h3 className="text-center font-semibold">{props.title}</h3>
          <p className="text-sm text-center">{props.description}</p>
        </div>
        <div className="mt-4 text-center">
          <a href={props.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-semibold my-4">My Skills</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <Card 
          image={javascript} 
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
          title="JavaScript" 
          description="Proficient in JavaScript, enabling dynamic and interactive web development with a strong understanding of modern ES6+ features." 
        />
        <Card 
          image={html} 
          link="https://developer.mozilla.org/en-US/docs/Web/HTML" 
          title="HTML 5" 
          description="Expert in HTML5, ensuring semantic, accessible, and well-structured web content." 
        />
        <Card 
          image={vanilla} 
          link="https://developer.mozilla.org/en-US/docs/Web/CSS" 
          title="Vanilla CSS" 
          description="Skilled in Vanilla CSS, creating responsive and visually appealing layouts without relying on frameworks." 
        />
        <Card 
          image={tailwind} 
          link="https://tailwindcss.com/" 
          title="Tailwind CSS" 
          description="Experienced with Tailwind CSS, leveraging utility-first CSS for fast and efficient styling." 
        />
        <Card 
          image={typescript} 
          link="https://www.typescriptlang.org/" 
          title="TypeScript" 
          description="Proficient in TypeScript, adding type safety and advanced features to JavaScript development." 
        />
        <Card 
          image={reactjs} 
          link="https://react.dev/" 
          title="React JS" 
          description="Expert in React JS, building modular and reusable components for dynamic user interfaces." 
        />
        <Card 
          image={canva} 
          link="https://www.canva.com/" 
          title="Canva" 
          description="Skilled in Canva, creating professional-quality graphics, logos, and other visual content." 
        />
        <Card 
          image={cssm} 
          link="https://css-tricks.com/css-modules-part-1-need/" 
          title="CSS Modules" 
          description="Proficient in CSS Modules, enabling scoped and modular CSS for better maintainability." 
        />
        <Card 
          image={material} 
          link="https://mui.com/material-ui/" 
          title="Material-UI" 
          description="Experienced with Material-UI, utilizing Google's Material Design components for React." 
        />
        <Card 
          image={bootstrap} 
          link="https://getbootstrap.com/" 
          title="Bootstrap" 
          description="Skilled in Bootstrap, creating responsive and mobile-first designs with ease." 
        />
        <Card 
          image={mysql} 
          link="https://www.mysql.com/" 
          title="MySQL" 
          description="Proficient in MySQL, managing and querying relational databases for dynamic applications." 
        />
      </div>
    </div>
  );
};

export default Skills;
