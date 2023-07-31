/**
 * @desc   Project Type for creating Project Cards
 * @author LocalNewsTV
 */
type Project = {
  projectTitle: string;
  year: number;
  projectImage: string;
  description: Array<string>;
  tech: Array<string>
  repo?: string;
  liveLink?: string;
  moreInfo?: string;
  featured: boolean;
}

export default Project;
