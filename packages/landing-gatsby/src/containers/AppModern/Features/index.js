import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        features {
          slogan
          title
          items {
            id
            color
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);
  const { slogan, title, items } = data.appModernJson.features;

  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content='Fonctionnalités' />
            <Heading content='Les avantages de DocUp' />
          </Fade>
        </SectionHeader>
     {/*    <FeatureWrapper>
          {items.map((item) => (
            <Fade up delay={100 * item.id} key={`feature-key${item.id}`}>
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <Image src={item.icon.publicURL} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                iconPosition="left"
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper> */}
      </Container>
    </SectionWrapper>
  );
};

export default Features;
