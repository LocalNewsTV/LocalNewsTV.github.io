import Project from "./types/Project";
/**
  {
    featured: false,
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
    featured: true,
    year: 2023,
    projectTitle: 'BC Wayfinder',
    projectImage: '/projects/wayfinder/Wayfinder.png',
    description: [
      'BC Wayfinder was a proof of concept designed for the Government of British Columbia\'s Ministry of Citizens\' Services Information Management Branch in 2023. The application was created to showcase the geographic locations of services, helping guide citizens to their destinations. Additionally, the application collected anonymous analytics, which were later turned into reports using Power BI.'
    ],
    tech: [
      'TypeScript',
      'Emotion',
      'PWA',
      'MERN',
      'PowerBI',
    ],
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    liveLink: 'https://wayfinder.apps.silver.devops.gov.bc.ca/',
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
]

export default projectsList;
