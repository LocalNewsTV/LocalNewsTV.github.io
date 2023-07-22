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


const Projects: Array<Project> = [
  {
    featured: true,
    projectTitle: 'BC Wayfinder',
    projectImage: '/projects/wayfinder/Wayfinder.png',
    description: [
      'BC Wayfinder was a proof of concept designed for the Government of British Columbia\'s Ministry of Citizens\' Services Information Management Branch in 2023. The application was created to showcase the geographic locations of services, helping guide citizens to their destinations. Additionally, the application collected anonymous analytics, which were later turned into reports using Power BI.'
    ],
    tech: [
      'React',
      'TypeScript',
      'Emotion',
      'PWA',
      'Express',
      'MongoDB'
    ],
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    liveLink: 'https://wayfinder.apps.silver.devops.gov.bc.ca/',
    moreInfo: '',
  },
  {
    featured: true,
    projectTitle: 'List Manager',
    projectImage: '/projects/listmanager/List-Manager.png',
    description: [
      'A scalable user application that allows users to create, read, update, and delete text data, enabling them to maintain a portable list of chores, housework, and more. Users can create their own accounts, which are accessible from anywhere.',
      'The application\'s sessions are stored and controlled through JWTs (JSON Web Tokens) granted by the Express API hosted on Render.com',
    ],
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'NodeJS',
      'Passport',
      'JWT',
      'Render'
    ],
    repo: 'https://github.com/LocalNewsTV/list-manager-frontend',
    liveLink: 'https://localnewstv.github.io/home-to-do-list/',
    moreInfo: '',
  },
]

export default Projects;
