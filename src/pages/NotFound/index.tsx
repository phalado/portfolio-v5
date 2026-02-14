import notFound from '@/assets/404_cats.png';

const NotFound = () => {
  return (
    <div className="max-w-[900px] sm:w-8/10 max-h-[97%] h-auto mx-auto py-0 px-2 gap-0 p-0">
      <img src={notFound} alt="404 Not Found" className="w-full m-0" />
    </div>
  );
};

export default NotFound;
