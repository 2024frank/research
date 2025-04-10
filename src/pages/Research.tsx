import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ResearchSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.white} 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const Title = styled.h2`
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing['2xl']};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.base};
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: ${theme.borderRadius.full};
  }
`;

const IntroductionContainer = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.base};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
  }
`;

const IntroductionTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  font-weight: 600;
`;

const IntroductionText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
`;

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
`;

const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing.xl} 0;
`;

const StatisticItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.7);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StatisticNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const StatisticLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.primary};
  font-weight: 700;
  transition: all ${theme.transitions.base};
  
  &:hover {
    color: ${theme.colors.secondary};
    text-decoration: underline;
  }
`;

const StatisticLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.lightText};
`;

const FieldImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const FieldImagesTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.sm};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.full};
  }
`;

const FieldImageCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.base};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FieldImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Research: React.FC = () => {
  const fieldImages = [
    { src: '/images/on_field1.jpeg' },
    { src: '/images/on_field2.jpeg' },
    { src: '/images/on_field3.jpeg' },
    { src: '/images/on_field4.jpeg' }
  ];

  return (
    <ResearchSection>
      <Container>
        <Title>Research Overview</Title>
        
        <IntroductionContainer>
          <IntroductionTitle>The Water Crisis in Agriculture</IntroductionTitle>
          <IntroductionText>
            In today's agricultural landscape, <Highlight>water wastage is a critical issue</Highlight> that significantly impacts both environmental sustainability and economic viability. Conventional farming practices often result in up to <Highlight>70% of water being wasted</Highlight> through inefficient irrigation methods, evaporation, and lack of precision in water application.
          </IntroductionText>
          <IntroductionText>
            For micro-agriculture farmers in particular, water represents a <Highlight>substantial operational cost</Highlight> that directly affects profitability and sustainability. These small-scale farmers face unique challenges:
          </IntroductionText>
          
          <StatisticsContainer>
            <StatisticItem>
              <StatisticNumber>
                <StatisticLink href="https://www.sciencedirect.com/science/article/pii/S2212371713000024" target="_blank" rel="noopener noreferrer">
                  30-45%
                </StatisticLink>
              </StatisticNumber>
              <StatisticLabel>of operating costs can be related to water usage</StatisticLabel>
            </StatisticItem>
            <StatisticItem>
              <StatisticNumber>
                <StatisticLink href="https://www.fao.org/3/cb1447en/cb1447en.pdf" target="_blank" rel="noopener noreferrer">
                  20-40%
                </StatisticLink>
              </StatisticNumber>
              <StatisticLabel>reduction in yields due to improper watering</StatisticLabel>
            </StatisticItem>
            <StatisticItem>
              <StatisticNumber>
                <StatisticLink href="https://www.mdpi.com/2073-4395/8/11/273" target="_blank" rel="noopener noreferrer">
                  50-70%
                </StatisticLink>
              </StatisticNumber>
              <StatisticLabel>of water can be saved with precision irrigation</StatisticLabel>
            </StatisticItem>
          </StatisticsContainer>
          
          <IntroductionTitle>Our Sustainable Agriculture Mission</IntroductionTitle>
          <IntroductionText>
            Our research aims to develop <Highlight>data-driven solutions for water conservation</Highlight> in micro-agriculture settings, allowing farmers to optimize water usage while maximizing crop yields. By leveraging machine learning algorithms and real-time sensor data, we're creating systems that predict optimal watering schedules based on:
          </IntroductionText>
          <IntroductionText>
            • Soil moisture levels and composition<br />
            • Environmental factors like temperature and humidity<br />
            • Plant-specific water requirements<br />
            • Historical performance data<br />
            • Weather forecasts and seasonal patterns
          </IntroductionText>
          <IntroductionText>
            The ultimate goal is to promote <Highlight>sustainable agricultural practices</Highlight> that reduce resource consumption, minimize environmental impact, and improve economic outcomes for small-scale farmers—all while contributing to global food security and climate resilience.
          </IntroductionText>
        </IntroductionContainer>
        
        <FieldImagesTitle>On-Field Research Activities</FieldImagesTitle>
        <FieldImagesGrid>
          {fieldImages.map((image, index) => (
            <FieldImageCard key={index}>
              <FieldImage src={image.src} alt={`On-field research ${index + 1}`} />
            </FieldImageCard>
          ))}
        </FieldImagesGrid>
      </Container>
    </ResearchSection>
  );
};

export default Research; 