import React, { useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import Logo from 'common/components/UIElements/Logo';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import LogoImage from 'common/assets/image/appModern/DocUpWhite.png';
import LogoImageAlt from 'common/assets/image/appModern/DocUpBlack.png';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      appModernJson {
        navbar {
          logo {
            publicURL
          }
          navMenu {
            id
            label
            path
            offset
          }
        }
      }
    }
  `);
  const { navMenu } = data.appModernJson.navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = (type) => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = (event) => {
    event.preventDefault();

    if (state.search !== '') {
      console.log('search data: ', state.search);

      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
       
          logoSrc={LogoImage}
          title="App Modern"
          className="main-logo"
        />
        <Logo
 
          logoSrc={LogoImageAlt}
          title="App Modern"
          className="logo-alt"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
        <MenuArea className={state.searchToggle ? 'active' : ''}>
  <ul className="menu">
    {navMenu.map((menu, index) => (
      menu.path.startsWith('http') ? (
        // External link
        <li key={`menu_key${index}`}>
          <a
            href={menu.path}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // For security reasons
          >
            {menu.label}
          </a>
        </li>
      ) : (
        // Internal link
        <li key={`menu_key${index}`}>
          <AnchorLink
            href={menu.path}
            offset={parseInt(menu.offset, 10)}
          >
            {menu.label}
          </AnchorLink>
        </li>
      )
    ))}
  </ul>
  {/* Your existing elements like search, trial button, etc. */}
</MenuArea>
          {/* end of main menu */}


          <a href="https://docup-visa.com/register" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "90px", textDecoration: "none" }}>
            <Button className="trail" title="Essai gratuit" style={{ marfinleft: "90px"}} />
          </a>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
      {navMenu.map((menu, index) => (
    menu.path.startsWith('http') ? (
        // External link
        <li key={`menu_key${index}`}>
            <a
                href={menu.path}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // For security reasons
                onClick={handleRemoveMenu}
            >
                {menu.label}
            </a>
        </li>
    ) : (
        // Internal link (existing code)
        <li key={`menu_key${index}`}>
            <AnchorLink
                href={menu.path}
                offset={menu.offset}
                onClick={handleRemoveMenu}
            >
                {menu.label}
            </AnchorLink>
        </li>
    )
))}
          </Scrollspy>
          <Button title="Try for Free" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
