import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(29, 78, 216, 0.3), rgba(30, 41, 59, 0.4)),
              url('/images/gd.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  padding: ${theme.spacing['2xl']};
`;

const HeroContent = styled.div`
  max-width: 800px;
  animation: fadeIn 1.2s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  font-weight: 700;
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing['2xl']};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  padding: ${theme.spacing.base} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 600;
  font-size: ${theme.fontSizes.lg};
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.md};

  &:hover {
    background-color: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  background-color: ${theme.colors.white};
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.base};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: ${theme.spacing.base};
  color: ${theme.colors.secondary};
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: ${theme.spacing.base};
  color: ${theme.colors.primary};
`;

const FeatureDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.lightText};
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <Title>Data Science & Machine Learning in Micro-Agriculture</Title>
          <Subtitle>
            Revolutionizing plant care through AI-powered automation and data-driven insights
          </Subtitle>
          <CTAButton href="#features">Explore Our Research</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection id="features">
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🌱</FeatureIcon>
            <FeatureTitle>Smart Plant Care</FeatureTitle>
            <FeatureDescription>
              Automated watering schedules and environmental monitoring for optimal plant growth
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Data Analytics</FeatureTitle>
            <FeatureDescription>
              Real-time data collection and analysis to understand plant behavior and needs
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureTitle>AI Automation</FeatureTitle>
            <FeatureDescription>
              Machine learning algorithms that adapt and optimize plant care routines
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>🔬</FeatureIcon>
            <FeatureTitle>Research Focus</FeatureTitle>
            <FeatureDescription>
              Cutting-edge research in micro-agriculture and sustainable plant care
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home; 