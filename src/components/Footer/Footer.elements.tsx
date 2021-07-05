import { DiOpensource } from 'react-icons/di';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #101522;
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 24px;
  color: #fff;

  > * + * {
    margin-top: 24px;
  }
`;

export const FooterSubHeading = styled.p`
  text-align: center;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #fff;

  @media screen and (max-width: 820px) {
    margin-right: 0;
    margin-bottom: 16px;
    width: 100%;
  }
`;

export const FooterLinksContainer = styled.div`
  padding-top: 32px;
  display: grid;
  place-items: center;
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 1rem auto;
  gap: 4rem;

  @media screen and (max-width: 820px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 4rem;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 4rem 2rem;
  }
`;

export const FooterLinkItem = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;

export const FooterLinkTitle = styled.h2`
  color: inherit;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-bottom: 0.5rem;
`;

export const SocialMedia = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  color: #fff;
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

export const SocialMediaWrap = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 90%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SocialLogo = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
`;

export const SocialIcon = styled(DiOpensource)`
  margin-right: 0.5rem;
`;

export const SocialCopyright = styled.small``;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 24px;
`;
