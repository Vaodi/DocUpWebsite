/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import microsoft from 'common/assets/image/appModern/envato-icon.png';
import videoBanner1 from 'common/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/assets/image/appModern/video-2.png';
import circleBorder from 'common/assets/image/appModern/shape.svg';
import mockup from 'common/assets/image/appModern/banner9.svg';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/RKFLVhweOjg"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appModernJson;
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <RatingInfo>
              <Heading as="h1" content="DocUp" />
            

            </RatingInfo>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h2"
              content="Logiciel de gestion de documents"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Sauver votre temps en automatisant le suivi des documents avec vos clients."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button 
              className="primary" 
              title="Voir vidéo demo" 
              onClick={handleVideoModal}
              icon={<Icon icon={playCircle} />}
              iconPosition="left"
              />
                <Button
                className="text"
                variant="contained"
                style={{ marginLeft: '20px' , color: 'white', backgroundColor: '#ef0449', borderColor: 'white', fontWeight: 'bold'}}
                onClick={() => {
                  window.location.href = 'https://docup-visa.com/register';
                }
                }
                iconPosition="left"
                title="Essayer gratuitement"
              />  
            </ButtonGroup>
          </Fade>
{/*           <VideoGroup>
            <img
               src='https://youtu.be/RKFLVhweOjg'
              onClick={handleVideoModal}
              alt="Video 1"
            />
            <img
            src='https://youtu.be/RKFLVhweOjg'
              onClick={handleVideoModal}
              alt="Video 2"
            />
          </VideoGroup>   */}
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={mockup} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
  {/*     <CustomerWrapper>
        <Text content="Trusted by companies like:" />
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image.publicURL}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper> */}
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
