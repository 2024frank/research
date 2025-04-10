import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.md};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const NavLink = styled(Link)<{ active: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${props => props.active ? theme.colors.primary : theme.colors.lightText};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  cursor: pointer;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Micro-Agriculture</Logo>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/team" active={location.pathname === '/team'}>Team</NavLink>
          <NavLink to="/research" active={location.pathname === '/research'}>Research</NavLink>
          <NavLink to="/methods" active={location.pathname === '/methods'}>Methods</NavLink>
          <NavLink to="/research/results" active={location.pathname === '/research/results'}>Research Results</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 