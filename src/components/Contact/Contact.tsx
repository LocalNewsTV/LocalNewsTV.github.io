/**
 * @desc   Contact Section of Portfolio, contains a call to action (Email me)
 * @author LocalNewsTV
 */
import { NavLink } from "react-router-dom";
import { AccentSpan, Button, ContentContainer, SmallSectionCont, HeaderTwo, HeaderThree, ContactText } from "./contact.styles";
import contactsInfo from "../../content/content";

const Contact = () => {
  return (
    <SmallSectionCont id="contact">
        <ContentContainer>
          <HeaderTwo>
            <AccentSpan>04.&nbsp;</AccentSpan>
            What's next?
          </HeaderTwo>
          <HeaderThree>Get In Touch</HeaderThree>
          <ContactText>
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </ContactText>
          <NavLink to={`mailto:${contactsInfo.email}`}>
            <Button>Say Hello</Button>
          </NavLink>
        </ContentContainer>
    </SmallSectionCont>
  )
};

export default Contact;
