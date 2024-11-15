import React from 'react';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-center text-3xl font-semibold mb-8">My Projects</h2>
      <ol className="list-none p-0 m-0 space-y-4">
        <li>
          <a
            href="https://lasles-vpn-alpha-kohl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-600"
          >
            Lasles VPN
          </a>
        </li>
        <li>
          <a
            href="https://positivus-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-600"
          >
            Positivus App
          </a>
        </li>
        <li>
          <a
            href="https://shopco-ecommerce.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-600"
          >
            Shopco Ecommerce Site
          </a>
        </li>
        <li>
          <a
            href="https://blues-app2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-blue-600"
          >
            BluesApp
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Projects;
