import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

export default function ContactButtons() {
  const contacts = [
    {
      name: 'GitHub',
      icon: FiGithub,
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900',
      url: 'https://github.com/phalado',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      url: 'https://linkedin.com/in/raphael-cordeiro',
    },
    {
      name: 'Medium',
      icon: SiMedium,
      bgColor: 'bg-black',
      hoverColor: 'hover:bg-gray-900',
      url: 'https://medium.com/@phalado',
    },
    {
      name: 'Gmail',
      icon: FiMail,
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      url: 'mailto:phalado.tech@gmail.com',
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {contacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${contact.bgColor} ${contact.hoverColor}`}
        >
          <contact.icon size={24} />
          {contact.name}
        </a>
      ))}
    </div>
  );
}
