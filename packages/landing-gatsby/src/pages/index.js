import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/theme/appModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppModern/Navbar';
import Banner from 'containers/AppModern/Banner';
import AppSlider from 'containers/AppModern/AppSlider';
import Features from 'containers/AppModern/Features';
import DashboardFeatures from 'containers/AppModern/Dashboard';
import DashboardCopy from 'containers/AppModern/DashboardCopy';
import ProductSlide from 'containers/AppModern/ProductSlide';
import VisitorSection from 'containers/Saas/VisitorSection';
import CyberSecurity from 'containers/AppModern/CyberSecurity';
import DesignedAndBuilt from 'containers/AppModern/DesignedAndBuilt';
import PricingPolicy from 'containers/AppModern/PricingPolicy';
import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import Testimonial from 'containers/AppModern/Testimonial';
import Newsletter from 'containers/AppModern/Newsletter';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import Footer from 'containers/AppModern/Footer';
import FAQ from 'containers/WebAppMinimal/Faq';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/AppModern/appModern.style';
import '@redq/reuse-modal/es/index.css';

import Seo from 'components/seo';

const AppModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <Seo title="DocUp" /> 
        <Modal /> 
        <ResetCSS /> 
        <GlobalStyle /> 

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar /> 
          </Sticky>
          <ContentWrapper>
             <Banner />
           <Features /> 
    

      <DashboardCopy />
            <VisitorSection />
            <DashboardFeatures />
            <CyberSecurity />

            <UpdateScreen /> 

          <PricingPolicy /> 
  
      
            <Newsletter /> 
          </ContentWrapper>
           <Footer />   
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default AppModern;
