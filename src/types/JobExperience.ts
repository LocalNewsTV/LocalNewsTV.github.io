/**
 * @desc   Type declaration for JobExperience objects used to signify past-present-future work experience
 * @author LocalNewsTV
 */
type JobExperience = {
  ref: string;
  place: string;
  position: string;
  link: string;
  details: Array<string>;
  start: string;
  end: string;
}

export default JobExperience;
