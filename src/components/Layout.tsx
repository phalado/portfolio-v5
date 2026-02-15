import { useNavigate, Outlet } from 'react-router-dom';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Layout = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname.split('/')[1];

  return (
    <Card className="h-full mx-auto py-0 px-2 gap-0 p-0 border-none rounded-none bg-transparent shadow-none">
      <div className="w-full flex flex-col items-center justify-between gap-2 p-0 bg-[#00abe4]">
        <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-wrap items-center justify-evenly gap-2 mx-auto p-0">
          <Button
            variant="link"
            size="lg"
            className="text-white my-2"
            onClick={() => navigate('/')}
          >
            Homepage
          </Button>
          {currentPath !== 'about' && (
            <Button
              variant="link"
              size="lg"
              className="text-white my-2"
              onClick={() => navigate('/about')}
            >
              About me
            </Button>
          )}
          {currentPath !== 'work-experience' && (
            <Button
              variant="link"
              size="lg"
              className="text-white my-2"
              onClick={() => navigate('/work-experience')}
            >
              Work Experience
            </Button>
          )}
          {currentPath !== 'projects' && (
            <Button
              variant="link"
              size="lg"
              className="text-white my-2"
              onClick={() => navigate('/projects')}
            >
              My Projects
            </Button>
          )}
          {currentPath !== 'articles' && (
            <Button
              variant="link"
              size="lg"
              className="text-white my-2"
              onClick={() => navigate('/articles')}
            >
              My Articles
            </Button>
          )}
          {currentPath !== 'contact' && (
            <Button
              variant="link"
              size="lg"
              className="text-white my-2"
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
          )}
        </div>
      </div>
      <Outlet />
    </Card>
  );
};

export default Layout;
