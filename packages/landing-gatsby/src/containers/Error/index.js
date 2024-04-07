import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Icon from 'react-icons-kit';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import ErrorImage from 'common/assets/image/404.svg';

import { ErrorWrapper, ErrorContent, ButtonWrapper } from './error.style';

const ErrorSec = ({ imageWrapper, title, text, reloadButton, homeButton }) => {
  const pageReload = () => {
    window.location.reload();
  };
  return (
  <div>
    404: Not found
  </div>
  );
};

ErrorSec.propTypes = {
  imageWrapper: PropTypes.object,
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px'],
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato',
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato',
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato',
  },
};

export default ErrorSec;
