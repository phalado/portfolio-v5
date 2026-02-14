import { Card } from '@/components/ui/card';
import catsImage from '@/assets/gatos_prateleira.png';
import Header from '@/pages/Homepage/Header';
import Keyboard from '@/pages/Homepage/Keyboard';

const App = () => {
  return (
    <Card className="h-[97%] max-h-[100vh] mx-auto py-0 px-2 gap-0 p-0 border-none shadow-none bg-transparent">
      <img src={catsImage} alt="Meg and Teo" className="w-full m-0" />
      <div className="max-w-[1024px] w-full sm:w-9/10 h-full mx-auto flex flex-col items-center justify-between gap-2 p-0">
        <Header />
        <Keyboard />
      </div>
    </Card>
  );
};

export default App;
