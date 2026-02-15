import teoNoIdea from '@/assets/teo_no_idea.jpg';
import myArticles from './articles';

const Articles = () => {
  return (
    <>
      <img src={teoNoIdea} alt="Meg and Teo" className="w-full max-w-[1024px] sm:w-9/10 m-auto" />
      <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-col items-center justify-between gap-2 mx-auto p-0 bg-[#00abe4]">
        <h1 className="text-4xl font-bold text-white text-center mt-10 mb-6 lg:mb-6">
          What about some reading?
        </h1>
        <div className="flex flex-wrap w-full h-full justify-evenly items-center mb-6">
          {myArticles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-80 h-80 bg-[#e9f1fa] hover:bg-[#d0e7f9] rounded-lg p-4 flex flex-col items-center justify-evenly text-center text-gray-900 text-lg shadow-xl transition mb-4"
            >
              <p className="text-xl">{article.title}</p>
              <img src={article.image} alt={article.title} className="w-9/10 h-7/10" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
