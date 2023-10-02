import JobExperience from "../types/JobExperience";

/**
 * @desc   Array Object to hold past and present work experiences for displaying in the Portfolio
 * @type   {Array<JobExperience>}
 * @author LocalNewsTV
 */
const jobExperience: Array<JobExperience> = [
  {
    ref: 'GovSus',
    place: "Province of BC",
    position: "Full Stack Developer",
    link: "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/water-land-and-resource-stewardship",
    details: [
      'Engaging with the Ministry of Water, Land, and Resource Stewardship to meet their specific needs',
      'Collaborating closely with a dedicated team of developers to support and enhance ministry applications',
      'Adapting swiftly to evolving requirements, ensuring seamless alignment with the Service Owners\' objectives',
      'Active participation in an Agile work environment, closely interfacing with Product Owners and Scrum Masters',
      'Initiating modernization efforts within existing repositories as necessary and feasible',
      'Harnessing the power of GitHub actions to enhance documentation and foster collaboration among colleagues',
      'Implementing Docker environments to establish platform-agnostic development environments for team members'
      ],
    start: "Sept 2023",
    end: "Present",
  },
  {
    ref: "GovStu",
    place: "Citizens' Services",
    position: "Capstone Student",
    link: "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services",
    details: [
      'Collaborated with the DevOps team to deliver high-quality solutions.',
      'Led a three-member team in designing and implementing a full stack solution over a 3-month Capstone semester.',
      'Engaged proactively in Scrum Agile methodologies, driving team efficiency, and enhancing productivity.',
      'Contributed actively to daily stand-up meetings, sprint planning, and retrospectives to ensure smooth project execution.',
    ],
    start: "May 2023",
    end: "Aug 2023"
  },
  {
    ref: 'CamStu',
    place: "Camosun College",
    position: "ICS Student (Diploma)",
    link: "https://camosun.ca/programs-courses/find-program/information-and-computer-systems-technologist-diploma",
    details: [
      'Programmed in C++, Java, JavaScript, Python and SQL to develop a diverse portfolio of projects, including web applications, RESTful APIs, and Unity games.',
      'Developed NoSQL and Relational Databases to efficiently store and deliver data.',
      'Deployed, secured, and maintained software applications ensuring they met specified requirements and demonstrating proficiency in software development.',
      'Applied principles of computer architecture, operating systems, and networks to all aspects of information technology, showcasing proficiency in IT infrastructures.',
      'Collaborated with peers across courses to develop applications, ensuring timely delivery and seamless implementation of assignments.',
    ],
    start: "Sept 2021",
    end: "Aug 2023"
  },
  {
    ref: 'boomCook',
    place: "Boom + Batten",
    position: "First Cook",
    link: "https://boomandbatten.com/",
    details: [
      'Utilized Optimum Control to manage food costing and perform invoice data entry, ensuring accurate and efficient cost management for the restaurant.',
      'Trained and mentored new chefs on food preparation techniques and kitchen safety procedures, fostering a high-performing and cohesive team.',
      'Engaged in recipe development and menu planning, creating new and innovative dishes that enhanced customer satisfaction.',
      'Ensured compliance with health and safety regulations by maintaining a clean and organized kitchen environment.',
    ],
    start: "May 2019",
    end: "Jan 2022",
  },
];

export default jobExperience;
