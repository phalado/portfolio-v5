import { SiRubyonrails, SiReact, SiNodedotjs, SiTypescript } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const TechStackButtons = ({ currentStack = '' }: { currentStack?: string }) => {
  const navigate = useNavigate();

  const techStacks = [
    {
      name: 'Ruby on Rails',
      slug: 'rails',
      icon: SiRubyonrails,
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
    },
    {
      name: 'React',
      slug: 'react',
      icon: SiReact,
      bgColor: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500',
    },
    {
      name: 'Node.js',
      slug: 'nodejs',
      icon: SiNodedotjs,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      name: 'React Native',
      slug: 'native',
      icon: SiReact,
      bgColor: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
    },
    {
      name: 'TypeScript',
      slug: 'typescript',
      icon: SiTypescript,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap justify-evenly">
      {techStacks.map(
        (tech) =>
          currentStack !== tech.slug && (
            <button
              key={tech.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition cursor-pointer ${tech.bgColor} ${tech.hoverColor}`}
              onClick={() => navigate(`/projects/${tech.slug}`)}
            >
              <tech.icon size={24} />
              {tech.name}
            </button>
          ),
      )}
    </div>
  );
};

export default TechStackButtons;
