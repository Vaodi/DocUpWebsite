import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';

import VisitorSectionWrapper, { SectionObject } from './visitor.style';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image/saas/retard5.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1017
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      image2: file(relativePath: { eq: "image/saas/map.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1031
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
  
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
      <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <GatsbyImage
              src={
                (data.image1 !== null) | undefined
                  ? data.image1.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="BgImage"
              style={{ marginLeft: '80px', marginTop: '150px'}}

            />
          </Zoom>
   
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}
       
        >
        <p style={{ fontSize: '14px', lineHeight: '24px', fontWeight: 700, color: 'rgb(209, 57, 124)', fontFamily: 'Heebo, sans-serif',  letterSpacing: '3px' }}>DES DOCUMENTS PARFAITEMENT ORGANISÉS </p>

          <FeatureBlock
            title={
              <Heading
                content="Reçevez moins de message de vos clients"
                {...title}
                style={{ fontSize: '36px', lineHeight: '47px', fontWeight: 700 }}
              />
            }

          
            description={
              <Text
  content={"Vos clients vous envoient 9 documents en 14 fichiers à travers 5 e-mails et 3 whatsapps et vous ne vous y retrouvez plus ?\nGrâce à Doc Up, vos clients téléversent directement leurs documents, ceux-ci sont automatiquement classés dans chaque dossier client ET chaque document est classé dans sa ligne correspondante. Plus besoin de chercher cette 3ème version du passeport au milieu des conversations."}
  style={{ whiteSpace: 'pre-wrap' }}
  {...description}
/>

            }
            button={
              <a href="#1">
              
              </a>
            }
          />
        </Box>
      </Container>
    
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
