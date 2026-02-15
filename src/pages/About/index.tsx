import meAndCats from './me_and_cats.png';
// import catsImage from '@/assets/gatos_prateleira.png';

const About = () => {
  return (
    <div className="max-w-[1024px] sm:w-9/10 h-full flex flex-col items-center justify-between gap-2 mx-5 sm:mx-auto p-0 bg-[#00abe4] border-t-2 border-[#e9f1fa]">
      {/* <img src={catsImage} alt="Meg and Teo" className="w-full m-0 bg-[#e9f1fa]" /> */}
      <h1 className="text-4xl font-bold text-white text-center mt-5 mb-6 lg:mb-6">
        About my portfolio (and a bit about me):
      </h1>

      <p className="text-xl text-white text-center max-w-3xl">
        I love tackling challenges that seem impossible at first glance. Remember that rush of
        victory after all-nighters debugging, when everything finally clicks? That's what fuels me
        as a dev — and why I built this portfolio: to showcase not just the code, but the messy (and
        satisfying) process behind it. My cats, by the way, are witnesses to many of those
        late-night marathons; they think I'm nuts, but they approve the final product.
      </p>

      <div className="w-9/10 max-w-[600px] bg-[#e9f1fa] my-6 p-4 rounded-lg shadow-xl flex justify-center">
        <img
          src={meAndCats}
          alt="Me and my cats"
          className="w-auto h-stretch justify-self-center rounded-lg"
        />
      </div>

      <p className="text-xl text-white text-center max-w-3xl mb-10">
        I've always been a natural problem-solver — even before coding, I'd disassemble toys to
        figure out how they worked (and, yeah, not always put them back together). I also love
        puzzles, legos and all kinds of assembling things. Today, coding feels like assembling a
        massive puzzle: sometimes the piece comes straight from Stack Overflow (or from GPT), other
        times I have to forge a new one. My background in computational modeling (that M.Sc. where I
        learned how to research for a solution) taught me that pure logic + patience = elegant
        solutions. And that's what I bring to the table: turning chaos into something that just
        works.
      </p>

      <p className="text-xl text-white text-center max-w-3xl mb-10">
        As a Full-Stack Developer, I live in the <b>React</b> world for the front-end (with all
        kinds of State Management and <b>React Native</b> for apps that fly on mobile) and{' '}
        <b>Ruby on Rails</b>
        (mostly) or <b>Node.js</b> for the back-end (API integrations that don't give you
        headaches). I've refactored legacy systems that felt like broken TARDISes (tell me if you
        got the reference) — bigger on the inside than they look — and helped agile teams ship
        features that changed the game for clients.
      </p>

      <span className="text-3xl text-white text-center max-w-3xl underline">
        Some tools I master (and love using):{' '}
      </span>
      <p className="text-xl text-white text-center max-w-3xl mb-10">
        <b>TypeScript</b>, <b>JavaScript</b>, <b>HTML/CSS/SCSS</b>, <b>PostgreSQL</b>, <b>RSpec</b>,{' '}
        <b>REST/GraphQL APIs</b>, <b>Elasticsearch</b>, <b>Material UI</b>, <b>Tailwind</b>... And
        in the "extras kit": <b>Sidekiq</b> for async jobs, <b>Heroku/Netlify</b> for quick deploys,
        and a dash of <u className="mx-1">pair programming</u> that turns bugs into team laughs.
      </p>

      <p className="text-xl text-white text-center max-w-3xl mb-10">
        At the end of the day, I'm just a guy from Juiz de Fora who believes great code is like a
        good conversation: clear, useful, and with room to improvise. If that resonates with you,
        let's chat? My email is <u className="mx-1">phalado@gmail.com</u>, or hop over to{' '}
        <a
          href="https://www.linkedin.com/in/phalado"
          className="mx-1 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        for a quick connect.
      </p>
    </div>
  );
};

export default About;
