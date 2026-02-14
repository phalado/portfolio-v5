import keyboard from '@/assets/keyboard-inclinado.png';

const Keyboard = () => {
  return (
    <div className="w-full h-1/3 flex items-center justify-between relative relative">
      <img src={keyboard} alt="Keyboard BG" className="w-full h-full mx-0 rounded-b-xl" />
      <div className="absolute w-8/10 h-1/4 bottom-35 left-1/2 flex gap-4 transform -translate-x-1/2">
        <a
          href="https://github.com/phalado/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="https://github.com/phalado/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="https://github.com/phalado/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="https://github.com/phalado/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
      </div>
      <div className="absolute w-9/10 h-1/4 bottom-5 left-1/2 flex gap-4 transform -translate-x-1/2">
        <a
          href="https://github.com/phalado/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="https://linkedin.com/in/raphael-cordeiro"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="https://medium.com/@phalado"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
        <a
          href="mailto:phalado.tech@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/4"
        />
      </div>
    </div>
  );
};

export default Keyboard;
