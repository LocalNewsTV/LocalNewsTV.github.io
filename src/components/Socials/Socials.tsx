import email from '/Email.svg';
import github from '/githubsocial.svg';
import resume from '/Resume.svg';
import linkedin from '/LinkedIn.svg';
import { Link } from 'react-router-dom';
import contactsInfo from '../../content/content';
import { ContactInfo, SocialIcon } from './socials.styles';

const Socials = () => {
  return (
    <ContactInfo>
      <Link to={`mailto:${contactsInfo.email}`} >
        <SocialIcon
          src={email}
          alt="Email me"
          title="Email me!"
        />
      </Link>
      <Link to={contactsInfo.github} >
        <SocialIcon
          src={github}
          alt="GitHub"
          title="GitHub"
        />
      </Link>
      <Link to={contactsInfo.linkedIn} >
        <SocialIcon
          src={linkedin}
          alt="LinkedIn"
          title="LinkedIn"
        />
      </Link>
      <a href="/Resume.pdf">
        <SocialIcon
          src={resume}
          alt="Resume"
          title="Resume"
        />
      </a>
    </ContactInfo>
  )
}

export default Socials;
