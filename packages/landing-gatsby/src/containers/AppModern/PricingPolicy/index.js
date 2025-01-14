import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../appModern.style';
import SectionWrapper, {
  ButtonGroup,
  PricingArea,
  InnerWrapper,
  PricingCard,
} from './pricingPolicy.style';

import crown from 'common/assets/image/appClassic/crown.svg';

const PricingPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        pricing {
          slogan
          title
          monthly {
            id
            title
            suggested
            description
            features {
              id
              text
            }
            price
            trail
            trailLink
          }
          annualy {
            id
            title
            suggested
            description
            features {
              id
              text
            }
            price
            trail
            trailLink
          }
        }
      }
    }
  `);
  const { slogan, title, monthly, annualy } = data.appModernJson.pricing;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
      setState({
        ...state,
        active: 'année',
        pricingPlan: annualy,
      });
    } else {
      setState({
        ...state,
        active: 'mois',
        pricingPlan: monthly,
      });
    }
  };

  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeader>
          <Heading as="h5" content={slogan} />
          <Heading content={title} />
        </SectionHeader>

        <ButtonGroup>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('monthly')}
          >
            Plan mensuel
          </button>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('annualy')}
          >
            Plan annuel
          </button>
        </ButtonGroup>

        <PricingArea>
          <InnerWrapper>
            {state.pricingPlan.map((item) => (
              <PricingCard key={`${state.active}-card--key${item.id}`}>
                {item.suggested && (
                  <span className="tag">
                    <img src={crown} alt="Crown" /> À venir
                  </span>
                )}
                <div className="card-header">
                  <Heading as="h3" content={item.title} />
                  <Text content={item.description} />
                </div>
                <div className="card-body">
                  <ul className="feature-list">
                    {item.features.map((item) => (
                      <li key={`${state.active}-feature--key${item.id}`}>
                        <Icon icon={checkmarkCircled} /> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <strong>
                    <span>${item.price}</span> /{state.active}
                  </strong>
                  <a href="https://docup-visa.com/register" target="_blank" rel="noopener noreferrer">
                  <Button
                    title={
                      item.price === 0 ? 'Essayez maitenant' : 'Essayez maitenant'
                    }
                  />
                  </a>
                  {item.trail ? (
                    <div className="trail">
                      <a href={item.trailLink}>
               
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </PricingCard>
            ))}
          </InnerWrapper>
        </PricingArea>
      </Container>
    </SectionWrapper>
  );
};

export default PricingPolicy;
