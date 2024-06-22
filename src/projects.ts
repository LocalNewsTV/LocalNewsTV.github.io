/**
 * @desc   Project Content for Portfolio Page, Populates in Archive and Big Projects (Main Page)
 * @author LocalNewsTV
 * @type {Array<Project>}
 */
import Project from "./types/Project";
/**
  {
    featured: false,
    year: 2023,
    projectTitle: '',
    projectImage: '/projects/',
    description: [
      '',
    ],
    tech: [
      '',
    ],
    repo: '',
    liveLink: '',
    moreInfo: '',
  },
 */


const projectsList: Array<Project> = [
  {
    featured: false,
    year: 2024,
    projectTitle: 'corporate-bingo',
    projectImage: '/projects/',
    description: [
      '\'Just for fun\' React application powered by Vite',
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
    ],
    repo: 'https://github.com/localnewstv/corporate-bingo/',
    liveLink: 'https://localnewstv.github.io/corporate-bingo/',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2024,
    projectTitle: 'aprs-stats-tracker',
    projectImage: '/projects/',
    description: [
      'Simple tool showing analytics based on aprs-fi export data.',
      'See info such as: Top speed, average time you drive, locations you visited'
    ],
    tech: [
      'Vue',
      'Vite',
      'Vue-Leaflet',
      'Docker'
    ],
    repo: 'https://github.com/LocalNewsTV/aprs-stats-tracker',
    liveLink: 'https://localnewstv.github.io/aprs-stats-tracker/',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2024,
    projectTitle: 'aprs-fi-tracker',
    projectImage: '/projects/',
    description: [
      'Application leveraging the arps.fi api to track if targets are actively moving or stationary',
      'Users can define bounding boxes to alert them when a target is in a designated area'
    ],
    tech: [
      'Python',
      'Tkinter',
    ],
    repo: 'https://github.com/LocalNewsTV/aprs-tracker-app',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'Whoopzee!',
    projectImage: '/projects/',
    description: [
      'https://github.com/LocalNewsTV/whoopzee',
    ],
    tech: [
      'React',
      'TypeScript',
      'Emotionjs',
      'Node',
      'Docker',
    ],
    repo: 'https://github.com/LocalNewsTV/whoopzee',
    liveLink: 'https://localnewstv.github.io/whoopzee/',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'Portfolio v3.0',
    projectImage: '/projects/',
    description: [
      '',
    ],
    tech: [
      'Vite',
      'TypeScript',
      'Emotion'
    ],
    repo: 'https://github.com/LocalNewsTV/LocalNewsTV.github.io',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: true,
    year: 2023,
    projectTitle: 'BC Wayfinder',
    projectImage: '/projects/wayfinder/Wayfinder.png',
    description: [
      'BC Wayfinder was a proof of concept designed for the Government of British Columbia\'s Ministry of Citizens\' Services Information Management Branch in 2023. The application was created to showcase the geographic locations of services, helping guide citizens to their destinations. Additionally, the application collected anonymous analytics, which were later turned into reports using Power BI.'
    ],
    tech: [
      'TypeScript',
      'VITE',
      'Emotion',
      'PWA',
      'MERN',
      'PowerBI',
      'OpenShift',
    ],
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: true,
    year: 2023,
    projectTitle: 'List Manager',
    projectImage: '/projects/listmanager/List-Manager.png',
    description: [
      'A scalable user application that allows users to create, read, update, and delete text data, enabling them to maintain a portable list of chores, housework, and more. Users can create their own accounts, which are accessible from anywhere.',
      'The application\'s sessions are stored and controlled through JWTs (JSON Web Tokens) granted by the Express API hosted on Render.com',
    ],
    tech: [
      'MERN',
      'NodeJS',
      'Passport',
      'JWT',
      'Render'
    ],
    repo: 'https://github.com/LocalNewsTV/list-manager-frontend',
    liveLink: 'https://localnewstv.github.io/home-to-do-list/',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'List Manager API',
    projectImage: '/projects/',
    description: [
      '',
    ],
    tech: [
      'Express',
      'Mongoose',
      'JavaScript',
      'Node',
      'JWT',
      'Passport',
    ],
    repo: 'https://github.com/LocalNewsTV/todo-api-server',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: true,
    year: 2023,
    projectTitle: 'Grocery Assistant',
    projectImage: '/projects/groceryassistant/Grocery-Assistant.png',
    description: [
      'A convenient application available on the Google Play Store that provides users with the ability to convert various measurements and prices, helping them make well-informed buying choices. The app also features a locally stored grocery list, allowing users to keep their shopping list and calculations all in one place.',
    ],
    tech: [
      'React Native',
      'Expo',
      'Google Play',
      'Android',
    ],
    repo: '',
    liveLink: 'https://play.google.com/store/apps/details?id=com.localnewstv.groceryassistant',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'Dollywood (Game)',
    projectImage: '/projects/',
    description: [
      "For my Graphics and Gaming Concepts class, I created a first-person shooter game using Unity. The game consists of multiple levels with increasing difficulty and includes four different weapons for the player to use. There are various pickups throughout the levels that can be collected to gain health or ammunition, as well as multiple enemy types with unique AI behaviors. I spent a lot of time tweaking the game mechanics to ensure a satisfying and engaging experience for the player.",
      "Overall, the project was a great way for me to put my Unity skills to the test and create a fully realized game from scratch using the skills taught in the course."
    ],
    tech: [
      'Unity',
      'C#',
    ],
    repo: 'https://github.com/LocalNewsTV/Dollywood',
    liveLink: 'https://drive.google.com/file/d/1x9ub7zzTEHr4D2NKAa5YojY9zyCt_DuP/view?usp=sharing',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'Memory',
    projectImage: '/projects/',
    description: [
      'An Swift application from my Mobile Applications class focusing on Classes, Enumerators and Multi-user interfaces',
    ],
    tech: [
      'Swift',
      'SwiftUI',
      'MacOS',
    ],
    repo: 'https://github.com/LocalNewsTV/Memory',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2023,
    projectTitle: 'CLI 3D TicTacToe',
    projectImage: '/projects/',
    description: [
      '',
    ],
    tech: [
      'Python',
      'Docker',
      'Sockets',
    ],
    repo: 'https://github.com/LocalNewsTV/3D-Tic-Tac-Toe',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Weather Application v2.0',
    projectImage: '/projects/',
    description: [
      "Since Google exists in the address bar, the days of the Google homepage are no more. Needing something to replace it, I created my own home application that I originally hosted on my Raspberry Pi before I deployed it as a Github page for others to enjoy. The legacy version was simple; it gave the time at the moment of the search, the weather, and some general statistics that a thermostat would.",
      `A feature I enjoy about this application is the conditional backgrounds. Based on the current weather condition and time, the background will update to match the weather using a selection of images I've taken over the years.`,
      `I recreated the Weather app in early 2023 using React instead of JQuery. Utilizing React hooks, I was able to make the time self-updating as well as refresh its timer when a new locale was searched for (an issue I attempted to implement in the original design).`,
    ],
    tech: [
      'React, JavaScript, WeatherAPI',
    ],
    repo: 'https://localnewstv.github.io/weather-app',
    liveLink: 'https://github.com/LocalNewsTV/weather-app',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Chat Client',
    projectImage: '/projects/',
    description: [
      "During my networking course, we learned about socket connections and network protocols. One of the examples we were given was Java sockets, and paired with making Java GUI applications in my SENG class, I created both a chat client and server that can be deployed on a local network.",
      `The client application stores messages locally in a queue to maintain a message history and reduce the need for large packages to be sent from the server. The server end of the application binds to any address usable by the host PC and stores a user-set password for authentication. The server also maintains a smaller message queue that is sent to new client connections.`
    ],
    tech: [
      'Java',
      'JavaGUI',
      'Sockets',
    ],
    repo: 'https://github.com/LocalNewsTV/ChatServerClient',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Password Hasher v2.0',
    projectImage: '/projects/',
    description: [
      "Making and managing passwords isn't many people's favourite thing. Bad passwords account for a large percentage of security breaches.",
      `No matter how good your security policies are, there will always be one employee considered a great risk, and so I created this one-way hashing algorithm for people who don't want to remember long, tedious passwords. The algorithm can take a generic password like "Password 1" and turn it into something more secure. It furthers its hashing by optionally allowing users to enter the site they're using the generic password for, giving a unique hash for each website.`,
    ],
    tech: [
      'React',
      'JavaScript',
    ],
    repo: 'https://localnewstv.github.io/password-hasher',
    liveLink: 'https://github.com/LocalNewsTV/password-hasher',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Portfolio v2.0',
    projectImage: '/projects/',
    description: [
      '',
    ],
    tech: [
      'NextJS',
      'ES6 JavaScript',
      'React',
    ],
    repo: 'https://github.com/LocalNewsTV/Portfolio2.0',
    liveLink: 'https://localnewstv.github.io/Portfolio2.0/',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Portfolio v1.0',
    projectImage: '/projects/',
    description: [
      "My original portfolio I created this portfolio over the summer of 2022 after completing my first year of the Information and Computer Systems programme at Camosun College.",
      `I'm proud of its design, having used photos taken from my roadtrip with my father to the Northwest Territories in July.`,
      `The original project was built using the languages I'd been taught in my first year. Now that I'm in my second year, I've found places to change and improve upon, so with fresh eyes and a new perspective, I improved on the original design utilizing ReactJS and NextJS.`
    ],
    tech: [
      'JQuery',
      'ES6 JavaScript',
      'HTML/CSS',
    ],
    repo: 'https://localnewstv.github.io/old-portfolio',
    liveLink: '',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Pokemon Assistant',
    projectImage: '/projects/',
    description: [
      `I've been a fan of Pokemon since my infancy but haven't kept up with it much in the last decade or so.`,
      `Over summer vacation, I was lucky enough to get to play the Brilliant Diamon and Shining Pearl remakes of the 4th generation games with my partner, but with all the changes and new types over the years, I was having some difficulty remembering which pokemon were which types and their respective weaknesses.`,
      `Utilizing the PokeAPI, this web application grabs data for a specific Pokemon and displays both its types and all its weaknesses by iterating through an object I created mapping strengths and weaknesses.`
    ],
    tech: [
      'JQuery',
      'ES6 JavaScript',
      'HTML/CSS',
      'PokeAPI',
    ],
    repo: 'https://github.com/LocalNewsTV/PokeHelper',
    liveLink: 'https://localnewstv.github.io/PokeHelper',
    moreInfo: '',
  },
  {
    featured: false,
    year: 2022,
    projectTitle: 'Blackjack',
    projectImage: '/projects/',
    description: [
      `After completion of web scripting, I took time over the winter break to create a blackjack game for the browser.`,
      `The game follows the same rules as classic 21, with the dealer having the advantage in a push. Some challenges in the project were managing aces in the deck given that they can be high or low. On the top bar display, you can keep track of how many cards are in the deck, so users who enjoy counting cards can play higher stakes in pursuit of greater winnings.`,
    ],
    tech: [
      'ES6 JavaScript',
      'JQuery',
      'HTML/CSS',
    ],
    repo: 'https://github.com/LocalNewsTV/BlackJack',
    liveLink: 'https://localnewstv.github.io/BlackJack',
    moreInfo: '',
  },

]

export default projectsList;
