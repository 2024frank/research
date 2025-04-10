import React, { useState, useEffect } from 'react';
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

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.white};
    flex-direction: column;
    padding: ${theme.spacing.xl} 0;
    gap: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.md};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100vh)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: all 0.3s ease;
    z-index: 999;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const MobileNavScroll = styled.div`
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 ${theme.spacing.xl};
    margin: ${theme.spacing.sm} 0;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    scrollbar-width: none;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${props => props.active ? theme.colors.primary : theme.colors.lightText};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  white-space: nowrap;
  padding: ${theme.spacing.sm} ${theme.spacing.base};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.base} ${theme.spacing.xl};
  }
  
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

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Micro-Agriculture</Logo>
        
        <MobileMenuButton onClick={(e) => { e.stopPropagation(); toggleMobileMenu(); }}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks isOpen={mobileMenuOpen}>
          <MobileNavScroll>
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/team" active={location.pathname === '/team'}>Team</NavLink>
            <NavLink to="/research" active={location.pathname === '/research'}>Research</NavLink>
            <NavLink to="/methods" active={location.pathname === '/methods'}>Methods</NavLink>
            <NavLink to="/research/results" active={location.pathname === '/research/results'}>Research Results</NavLink>
          </MobileNavScroll>
        </NavLinks>
      </Nav>
      <Overlay isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
    </HeaderContainer>
  );
};

export default Header; 