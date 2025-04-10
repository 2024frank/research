import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xl} 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const FooterTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.base};
  color: ${theme.colors.white};
`;

const FooterText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.white};
`;

const FooterLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.base};
  
  &:hover {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing.xl};
  color: ${theme.colors.white};
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Oberlin College</FooterTitle>
        <FooterText>Computer Science Department</FooterText>
        <FooterText>
          Email: <FooterLink href="mailto:OUR@oberlin.edu">OUR@oberlin.edu</FooterLink>
        </FooterText>
        <Copyright>© 2025 Micro-Agriculture Research Project. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 