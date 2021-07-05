import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  SocialIcon,
  SocialCopyright,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button type="submit" fontBig>
            Subscribe
          </Button>
        </Form>
      </FooterSubscription>

      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="#">How it Works</FooterLink>
            <FooterLink to="#">Testimonials</FooterLink>
            <FooterLink to="#">Investors</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
          </FooterLinkItem>

          <FooterLinkItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="#">How it Works</FooterLink>
            <FooterLink to="#">Testimonials</FooterLink>
            <FooterLink to="#">Investors</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
          </FooterLinkItem>

          <FooterLinkItem>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="#">How it Works</FooterLink>
            <FooterLink to="#">Testimonials</FooterLink>
            <FooterLink to="#">Investors</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
          </FooterLinkItem>

          <FooterLinkItem>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="#">How it Works</FooterLink>
            <FooterLink to="#">Testimonials</FooterLink>
            <FooterLink to="#">Investors</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
          </FooterLinkItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            SUPER
          </SocialLogo>

          <SocialCopyright>SUPER &copy; 2021</SocialCopyright>

          <SocialIcons>
            <SocialIconLink to="#">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to="#">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink to="#">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink to="#">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink to="#">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
