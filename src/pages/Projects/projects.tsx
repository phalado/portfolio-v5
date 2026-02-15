import starWars from '@/assets/projects/sw-ss.png';
import restaurant from '@/assets/projects/rest-page.png';
import friendsNet from '@/assets/projects/friendsnet.png';
import ticTacToe from '@/assets/projects/ttt-ruby.png';
import sampleApp from '@/assets/projects/sampleapp.png';
import tree from '@/assets/projects/tree.png';
import checkersOnline from '@/assets/projects/checkers-online.png';
import berk from '@/assets/projects/berk.png';
import batcomputer from '@/assets/projects/batcomputer.png';
import bookstore from '@/assets/projects/bookstore.png';
import mobileCalc from '@/assets/projects/mobile-calc.png';
import calculatorTypescript from '@/assets/projects/calculator-typescript.png';
import termoSolver from '@/assets/projects/termo-solver.png';
import ttt2 from '@/assets/projects/ttt2.gif';

const projects = [
  {
    id: 0,
    name: 'Star Wars - Space Shooter',
    language: 'typescript',
    live: 'https://starwars-spaceshooter.herokuapp.com/',
    github: 'https://github.com/phalado/JS-Capstone',
    description: [
      "Star Wars - Space Shooters is a game that I developed at JavaScript's Capstone Project.",
      "This is an endless runner developed using Phaser 3 framework. Here you control Luke's X-Wing against some of the imperial ships. The goal is to destroy as many enemy ships as you can and score high. Maybe you can erase my name from the leader board, give it a try!",
    ],
    image: starWars,
    iframe: 'https://start-wars-shooter.netlify.app/',
  },
  {
    id: 1,
    name: "Little Chef's",
    language: 'typescript',
    live: 'https://raw.githack.com/phalado/Restaurant-page/develop/dist/index.html',
    github: 'https://github.com/phalado/Restaurant-page',
    description: [
      'The Restaurant page is a simple but elegant project done with JavaScript. There is no mouse in this restaurant.',
      "It is Little Chef's restaurant page with a menu, some critics and a session for contact. It is not the most complex project in my portfolio but it is a good combination of a good idea and a nice design. Be sure that Emile is, clearly, a human.",
    ],
    image: restaurant,
  },
  {
    id: 2,
    name: 'Termo Solver',
    language: 'rails',
    live: '',
    github: 'https://github.com/phalado/termo-consulta',
    description: [
      'A web app to help solving the Brazilian version of Wordle: Termo.',
      "This application won't solve the puzzle for you. You still have to deduct the next steps. It only shows you the possible words for the answer.",
      'This repo is the back end done using Ruby on Rails and Elasticsearch',
    ],
    image: termoSolver,
  },
  {
    id: 3,
    name: 'Friends Net',
    language: 'rails',
    live: 'https://friendsnet.herokuapp.com/',
    github: 'https://github.com/alexawesomecode/facebook-clone-project',
    description: [
      'This is a a Facebook-like social net created with Ruby on Rails.',
      'You can create an account or use your Facebook credentials to log in. Omniauth was the tool used for this.',
      'On this social network, the user can add other users as friends, create posts, comment on the posts, and like or dislike both posts and comments.',
    ],
    image: friendsNet,
  },
  {
    id: 4,
    name: 'Sample App',
    language: 'rails',
    live: 'https://sample-app-phalado.herokuapp.com/',
    github: 'https://github.com/phalado/sample_app',
    description: [
      "The Sample App is a social media done following the step-by-step of Michael Hartl's Ruby on Rails Tutorial.",
      'Unlike the Facebook clone project, this one is more to what was the twitter in the past, where the posts are limited to 140 characters. It was a simple but amazing project.',
    ],
    image: sampleApp,
  },
  {
    id: 5,
    name: 'Tic Tac Toe - Ruby',
    language: 'rails',
    live: '',
    github: 'https://github.com/phalado/Tic-Tac-Toe',
    description: [
      'The goal of this project was to build a two-player, terminal-to-play Tic-Tac-Toe.',
      'Unfortunately, there is no live version available yet but you can see more of the logic and the game in its repository and a bit about the design in the images below.',
    ],
    image: ticTacToe,
  },
  {
    id: 6,
    name: 'Search Binary and Bi-Dimensional Tree',
    language: 'rails',
    live: '',
    github: 'https://github.com/phalado/Search-Tree',
    description: [
      'Search Tree is an open-source binary and bi-dimensional tree gem for ruby that I decided to code because... only God knows why.',
      'For more information about the logic and how it was done visit my article in Medium - https://medium.com/p/bdfe7069be2d/.',
    ],
    image: tree,
  },
  // {
  //   id: 7,
  //   name: 'Weather App',
  //   language: 'typescript',
  //   live: 'No live version',
  //   github: 'https://github.com/phalado/Weather-App/',
  //   description: [
  //     'Weather App is an API reading project.',
  //     'It consists of using APIs to create a weather app (dah) where the user can verify the temperature in different cities. The user can, also, choose between celsius and Fahrenheit.',
  //   ],
  //   image: weatherApp,
  // },
  {
    id: 8,
    name: 'Checkers Online',
    language: 'typescript',
    live: '',
    github: 'https://github.com/phalado/Checkers-Online',
    description: [
      'This is a personal project. My goal was to test my skills by doing an online, multiplayer game.',
      "In this project, I built a checker game using JavaScript's framework Phaser 3.",
      'This is a multiplayer-only game. One user has to create a game and pass to the second one the generated code.',
      "The game's logic shows you the possible movements and recognizes when the game is over.",
    ],
    image: checkersOnline,
  },

  {
    id: 9,
    name: 'Termo Solver',
    language: 'react',
    live: '',
    github: 'https://github.com/phalado/termo-consulta',
    description: [
      'A web app to help solving the Brazilian version of Wordle: Termo.',
      "This application won't solve the puzzle for you. You still have to deduct the next steps. It only shows you the possible words for the answer.",
      'This repo is the front end done using React and Typescript.',
      "Unfortunatelly, you can't test it anymore, but you can check the code on GitHub.",
    ],
    image: termoSolver,
    iframe: '',
  },
  {
    id: 10,
    name: "Berk's Academy",
    language: 'react',
    live: '',
    github: 'https://github.com/phalado/final-capstone',
    description: [
      'This was my final capstone project for Microverse and the most complete one.',
      "The project's goal was to create a book of appointment. I chose to create a dragon flying academy based on the characters of How to Train Your Dragon.",
      'The back-end is a RESTful API done with Ruby on Rails and the front-end was done with React and Redux.',
    ],
    image: berk,
  },
  {
    id: 11,
    name: 'Batcomputer Clone',
    language: 'react',
    live: '',
    github: 'https://github.com/phalado/React-Redux-Capstone',
    description: [
      "For this project, I hacked Batman's computer and got some data from the main heroes and villains. You can't be the Dark Knight if you are not prepared for each hero or villain.",
      "This project's goal was to build a browsable list of items that you can filter and access to the details of one item. The list should be accessed from an API, so I chose the Superhero API and filtered it to store only the DC Comic's characters.",
      'I used React and Redux to divide the characters by affiliation, and alignment.',
    ],
    image: batcomputer,
  },
  {
    id: 12,
    name: 'React BookStore',
    language: 'react',
    live: '',
    github: 'https://github.com/Grifo89/React_Bookstore/',
    description: [
      'This is my first React and Redux project.',
      'It consists of using React to build a CMS for a bookstore where the user can add, edit, and remove books.',
    ],
    image: bookstore,
  },
  {
    id: 13,
    name: 'Mobile Calculator',
    language: 'native',
    live: 'https://drive.google.com/file/d/1Hh2XN_AfMIAgdupILKmCcbra9gEA89po/view?usp=sharing',
    github: 'https://github.com/phalado/mobileCalculator',
    description: [
      'A simple calculator for android and my first project done with React Native',
      "There is no live-version for this project but you can download the apk clicking on the project's title.",
      'Try dividing by zero.',
    ],
    image: mobileCalc,
  },
  {
    id: 14,
    name: 'Typescript Calculator',
    language: 'typescript',
    live: 'https://calculator-typescript.netlify.app/',
    github: 'https://github.com/phalado/typescript-calculator',
    description: [
      'Another simple calculator, but done with TypeScript this time.',
      'Test it below - Try dividing by zero.',
    ],
    image: calculatorTypescript,
    iframe: 'https://calculator-typescript.netlify.app/',
  },
  // {
  //   id: 15,
  //   name: 'Order Book',
  //   language: 'typescript',
  //   live: 'https://order-book-phalado.netlify.app/',
  //   github: 'https://github.com/phalado/order_book',
  //   description: [
  //     "An order book based on Binance's",
  //     "The user is able to choose two assets. After that, a live stream from Binance's Websocket will show the lasts bids.",
  //     "The assts' bids and asks will be updated each second.",
  //     'You can test it below.',
  //   ],
  //   image: '',
  //   iframe: 'https://order-book-phalado.netlify.app/',
  // },
  // {
  //   id: 16,
  //   name: 'Correios Integration',
  // language: 'nodejs',
  //   github: '',
  //   description: ['TBD'],
  //   image: '',
  // },
  {
    id: 17,
    name: 'Tic-Tac-Toe 2.0',
    language: 'nodejs',
    github: 'https://github.com/phalado/tic-tac-toe-2-0',
    description: ['TBD'],
    image: ttt2,
  },
  // {
  //   id: 18,
  //   name: 'Triple Triad Explore',
  //   language: 'native',
  //   github: 'https://github.com/phalado/triple-triad',
  //   description: ['TBD'],
  //   image: '',
  // }
];

export default projects;
