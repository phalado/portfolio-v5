import { useNavigate } from 'react-router-dom';
import screen from '@/assets/monitor-top2.png';
import foot from '@/assets/monitor-bottom.png';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-2/3 flex flex-col items-center justify-between relative">
      <div className="w-full h-4/5 p-2 pb-4 flex flex-col items-center rounded-sm justify-evenly relative z-10 bg-[#00ABE4]">
        <img
          src={screen}
          alt="Screen BG"
          className="w-full h-full mx-0 absolute top-0 left-0 z-12"
        />
        <p className="text-base md:text-2xl lg:text-4xl font-bold text-white text-center mb-1 lg:mb-4">
          Raphael Cordeiro
        </p>
        <p className="text-xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-2 lg:mb-6">
          Full-Stack Problem Solver
        </p>
        <p className="text-base md:text-2xl lg:text-2xl text-white italic max-w-2xl text-center mb-6">
          Transforming complex challenges into elegant and scalable solutions
        </p>
        <div className="flex gap-4 flex-wrap justify-center z-20">
          <Button variant="secondary" size="lg">
            About me
          </Button>
          <Button variant="secondary" size="lg">
            Work Experience
          </Button>
          <Button variant="secondary" size="lg">
            Articles
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
            Contact
          </Button>
        </div>
      </div>
      <img src={foot} alt="Foot BG" className="w-2/3 h-1/5 mx-0" />
    </div>
  );
};

export default Header;
