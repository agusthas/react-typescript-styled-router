import {
  ServicesSec,
  ServicesWrapper,
  ServicesHeading,
  ServicesCardContainer,
  ServiceCard,
  ServicesCardHeading,
  ServicesCardBody,
  ServicesCardIcon,
} from './ServicesCard.elements';
import { Button } from '../../globalStyles';
import { GiRock, GiCrystalBars, GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const ServicesCard = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '64' }}>
      <ServicesSec>
        <ServicesWrapper>
          <ServicesHeading>Our Services</ServicesHeading>

          <ServicesCardContainer>
            <ServiceCard>
              <ServicesCardIcon>
                <GiRock />
              </ServicesCardIcon>
              <ServicesCardHeading>Virtual</ServicesCardHeading>
              <ServicesCardBody>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quas quidem possimus dolorum esse eligendi?
              </ServicesCardBody>
              <Button primary>Read More</Button>
            </ServiceCard>

            <ServiceCard>
              <ServicesCardIcon>
                <GiCrystalBars />
              </ServicesCardIcon>
              <ServicesCardHeading>Hybrid</ServicesCardHeading>
              <ServicesCardBody>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quas quidem possimus dolorum esse eligendi?
              </ServicesCardBody>
              <Button primary>Read More</Button>
            </ServiceCard>

            <ServiceCard>
              <ServicesCardIcon>
                <GiCutDiamond />
              </ServicesCardIcon>
              <ServicesCardHeading>Partial</ServicesCardHeading>
              <ServicesCardBody>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quas quidem possimus dolorum esse eligendi?
              </ServicesCardBody>
              <Button primary>Read More</Button>
            </ServiceCard>
          </ServicesCardContainer>
        </ServicesWrapper>
      </ServicesSec>
    </IconContext.Provider>
  );
};

export default ServicesCard;
