import { SiRubyonrails, SiReact, SiNodedotjs } from 'react-icons/si';

export default function TechStackButtons() {
  const techStacks = [
    {
      name: 'Ruby on Rails',
      icon: SiRubyonrails,
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
    },
    {
      name: 'React',
      icon: SiReact,
      bgColor: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      name: 'React Native',
      icon: SiReact,
      bgColor: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {techStacks.map((tech) => (
        <button
          key={tech.name}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${tech.bgColor} ${tech.hoverColor}`}
        >
          <tech.icon size={24} />
          {tech.name}
        </button>
      ))}
    </div>
  );
}
