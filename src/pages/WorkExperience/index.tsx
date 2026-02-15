import megDebug from '@/assets/meg-debug.jpg';
import pastExperiences from './pastExperiences';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const WorkExperience = () => {
  const [currentExperience, setCurrentExperience] = useState(pastExperiences[0]);

  return (
    <>
      <img src={megDebug} alt="Meg Debugging" className="w-full max-w-[1024px] sm:w-9/10 m-auto" />
      <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-col items-center justify-between gap-2 mx-auto p-0 bg-[#00abe4]">
        <h1 className="text-4xl font-bold text-white text-center my-6">
          Now, about the real deal: my work experience
        </h1>
        <div className="w-full max-w-[1024px] h-auto sm:w-9/10 mx-auto mb-6 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                <a
                  href={currentExperience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00abe4] hover:underline"
                >
                  {currentExperience.name}
                </a>
              </h2>
              <p className="text-lg text-gray-600 mt-1">{currentExperience.title}</p>
              <p className="text-sm text-gray-500 mt-2">{currentExperience.period}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Topics</h3>
              <div className="flex flex-wrap gap-2">
                {currentExperience.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-[#00abe4] text-white px-3 py-1 rounded-sm text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <Button
              variant="secondary"
              className="justify-self-end"
              disabled={currentExperience.id === 0}
              onClick={() => {
                setCurrentExperience(pastExperiences[currentExperience.id - 1]);
              }}
            >
              Next Experience
            </Button>
            <Button
              variant="secondary"
              disabled={currentExperience.id === pastExperiences.length - 1}
              onClick={() => {
                setCurrentExperience(pastExperiences[currentExperience.id + 1]);
              }}
            >
              Previous Experience
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
