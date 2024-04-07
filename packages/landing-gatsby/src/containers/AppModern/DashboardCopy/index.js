import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Particles from '../Particle';
import DashboardWrapper, { DashboardObject } from './dashboard.style';

const DashboardSection = ({ row, col, title, btnStyle, description }) => {
  const data = useStaticQuery(graphql`
  query {
    dashboard: file(relativePath: { eq: "image/appModern/complete2.svg" }) {
      publicURL
    }
  }
`);

  const ButtonGroup = () => (
    <Fragment>
      <Button title="FREE TRAIL" {...btnStyle} />
    </Fragment>
  );
  return (
    <DashboardWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} >
            <Heading className="subtitle" as="h5" content="Soyez plus rentable" />
            <FeatureBlock
              title={
                <Heading
                  content="Ne vérifiez que des dossiers complets"
                  {...title}
                />
              }
              description={
                <Text
                  content="Ne perdez plus du temps à vérifier un dossier incomplet...pour ensuite dire à votre client qu'il est incomplet. Lorsque le client a soumis tous les documents, le statut est automatiquement mis à jour et vous recevez une notification."
                  {...description}
                />
              }
              // button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <DashboardObject>
        <div className="dashboardWrapper">
        <img src={data.dashboard.publicURL} alt="Dashboard Object" style={{ width: '730px' }} />
        </div>
      </DashboardObject>
    </DashboardWrapper>
  );
};

DashboardSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};

DashboardSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '30px', '30px', '30px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '15px', '15px', '20px', '25px'],
    lineHeight: '1.3',
    maxWidth: ['100%', '400px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.85',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
};

export default DashboardSection;
