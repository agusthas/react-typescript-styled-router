import styled from 'styled-components';

export const ServicesSec = styled.section`
  display: flex;
  padding: 100px 0 160px;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

export const ServicesHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #fff;
`;

export const ServicesCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ServiceCard = styled.div`
  background: #242424;
  width: 300px;
  padding: 3rem 2rem;
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  color: #fff;

  @media screen and (max-width: 960px) {
    width: 85%;
  }
`;

export const ServicesCardIcon = styled.div`
  margin-bottom: 2rem;
`;

export const ServicesCardHeading = styled.h3`
  margin-bottom: 1rem;
  font-size: 24px;
`;

export const ServicesCardBody = styled.p`
  margin-bottom: 2rem;
  font-size: 18px;
  line-height: 24px;
  color: #a9b3c1;
`;
