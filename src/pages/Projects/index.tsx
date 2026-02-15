import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import projects from './projects';
import teoHelping from '@/assets/teo-helping.jpg';
import { Button } from '@/components/ui/button';
import TechStackButtons from '@/pages/Projects/TechStack';
// import { Button } from '@/components/ui/button';

const Projects = () => {
  const { stack } = useParams();
  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.language === stack),
  );

  useEffect(() => {
    if (stack) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilteredProjects(projects.filter((project) => project.language === stack));
    } else {
      setFilteredProjects(projects);
    }
  }, [stack]);

  const [currentProjectId, setCurrentProjectId] = useState(0);

  return (
    <>
      <img src={teoHelping} alt="Teo Helping" className="w-full max-w-[1024px] sm:w-9/10 m-auto" />
      <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-col items-center justify-start gap-2 mx-auto p-0 bg-[#00abe4]">
        <h1 className="text-4xl font-bold text-white text-center my-6">
          Wanna see some of my projects?
        </h1>

        <TechStackButtons currentStack={stack} />

        {stack && (
          <div className="w-full max-w-[1024px] h-auto sm:w-9/10 mx-auto my-6 px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 text-">
                  <span className="flex items-center justify-center">
                    {filteredProjects[currentProjectId].live ? (
                      <a
                        href={filteredProjects[currentProjectId].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00abe4] hover:underline"
                      >
                        {filteredProjects[currentProjectId].name}
                      </a>
                    ) : (
                      filteredProjects[currentProjectId].name
                    )}
                    <span className="mx-4">-</span>
                    <a
                      href={filteredProjects[currentProjectId].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 text-[#e9f1fa] bg-gray-800 hover:bg-gray-600 rounded-full cursor-pointer flex items-center justify-center"
                    >
                      <FiGithub size={20} className="" />
                    </a>
                  </span>
                </h2>
                {filteredProjects[currentProjectId].description.map((line, index) => (
                  <p key={index} className="text-lg text-gray-600 mt-4">
                    {line}
                  </p>
                ))}
              </div>

              <div className="flex justify-between w-9/10 md:w-1/2 mx-auto mt-4">
                <Button
                  variant="blue"
                  className="justify-self-end"
                  disabled={currentProjectId === 0}
                  onClick={() => {
                    setCurrentProjectId(currentProjectId - 1);
                  }}
                >
                  Previous Project
                </Button>
                <Button
                  variant="blue"
                  disabled={currentProjectId === filteredProjects.length - 1}
                  onClick={() => {
                    setCurrentProjectId(currentProjectId + 1);
                  }}
                >
                  Next Project
                </Button>
              </div>

              <div className="mt-6">
                {filteredProjects[currentProjectId].iframe ? (
                  <iframe
                    src={filteredProjects[currentProjectId].iframe}
                    title={filteredProjects[currentProjectId].name}
                    className="w-full h-[700px] rounded-lg"
                  ></iframe>
                ) : (
                  <img
                    src={filteredProjects[currentProjectId].image}
                    alt={filteredProjects[currentProjectId].name}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
