import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

import megContact from '@/assets/meg-contact.png';

const Contact = () => {
  return (
    <>
      <img src={megContact} alt="Meg and Teo" className="w-full max-w-[1024px] sm:w-9/10 m-auto" />
      <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-col items-center justify-between gap-2 mx-auto p-0 bg-[#00abe4]">
        <h1 className="text-4xl font-bold text-white text-center mt-20 mb-6 lg:mb-6">
          Get in Touch
        </h1>
        <div className="flex flex-wrap w-full h-full justify-evenly items-center mb-6">
          <a
            href="https://github.com/phalado"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-40 bg-gray-800 hover:bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-evenly text-center text-white text-lg shadow-xl transition mb-4"
          >
            <p>My Github</p>
            <FiGithub size={60} className="ml-2" />
          </a>

          <a
            href="https://www.linkedin.com/in/phalado"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-40 bg-blue-600 hover:bg-blue-700 rounded-lg p-4 flex flex-col items-center justify-evenly text-center text-white text-lg shadow-xl transition mb-4"
          >
            <p>My LinkedIn</p>
            <FiLinkedin size={60} className="ml-2" />
          </a>

          <a
            href="https://medium.com/@phalado"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-40 bg-black hover:bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-evenly text-center text-white text-lg shadow-xl transition mb-4"
          >
            <p>My Medium</p>
            <SiMedium size={60} className="ml-2" />
          </a>

          <a
            href="mailto:phalado@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-40 bg-red-600 hover:bg-red-700 rounded-lg p-4 flex flex-col items-center justify-evenly text-center text-white text-lg shadow-xl transition mb-4"
          >
            <p>Send an Email</p>
            <FiMail size={60} className="ml-2" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
