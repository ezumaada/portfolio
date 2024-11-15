import React from 'react';

const Contact = () => {
  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-28">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold mb-4">Contact</h1>
      <h2 className="text-center text-xl sm:text-2xl mb-6">Open to full-time, remote jobs or freelance projects</h2>

      <form className="border-2 border-orange-400 px-4 sm:px-6 py-6 rounded-lg flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 h-32"
        />
        <button
          type="submit"
          className="bg-slate-600 text-white rounded-md py-3 hover:bg-slate-700 transition duration-300 mx-auto w-full sm:w-1/2 lg:w-1/3"
        >
          Submit
        </button>
      </form>

      <p className="text-lg py-5 text-center">
        Or, you can reach me at my personal email:{' '}
        <a href="mailto:adaezeezuma16@gmail.com" className="text-blue-500 hover:underline">
          adaezeezuma16@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
