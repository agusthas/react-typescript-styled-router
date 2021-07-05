import { Button, Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSection.elements';
import { DataModel } from '../../data/data.model';
import { Link } from 'react-router-dom';

const InfoSection = (props: DataModel) => {
  return (
    <InfoSec lightBg={props.lightBg}>
      <Container>
        <InfoRow imgStart={props.imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={props.lightTopLine}>
                {props.topLine}
              </TopLine>
              <Heading lightText={props.lightText}>{props.headLine}</Heading>
              <Subtitle lightTextDesc={props.lightTextDesc}>
                {props.description}
              </Subtitle>

              <Link to="/signup">
                <Button big fontBig primary={props.buttonPrimary}>
                  {props.buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <ImgWrapper imgPos={props.imgPos}>
              <Img src={props.img} alt={props.alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
