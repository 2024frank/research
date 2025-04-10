import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ResultsSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background-color: ${theme.colors.background};
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
    background-color: ${theme.colors.secondary};
  }
`;

const ResultsCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.lg};
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

const ResultsTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const ResultsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ResultsText = styled.div`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.lightText};
  line-height: 1.8;
`;

const ResultsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.lg};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.base};
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }
`;

const StatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.lightText};
`;

const PieChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.base};
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const PieChartTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  width: 100%;
`;

const PieChartWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.xl} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0 ${theme.spacing.xl} 0 0;
  }
`;

const PieChart = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: conic-gradient(
    ${theme.colors.primary} 0% 38%,
    ${theme.colors.secondary} 38% 65%,
    #4CAF50 65% 82%,
    #FF9800 82% 100%
  );
  position: relative;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const PieChartLegend = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.base};
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.base};
  transition: all ${theme.transitions.base};
  
  &:hover {
    background-color: ${theme.colors.background};
    transform: translateX(5px);
  }
`;

const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${props => props.color};
  margin-right: ${theme.spacing.base};
`;

const LegendText = styled.div`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.lightText};
`;

const Results: React.FC = () => {
  return (
    <ResultsSection>
      <Container>
        <Title>Machine Learning Results</Title>
        
        <ResultsCard>
          <ResultsTitle>Algorithm Performance Comparison</ResultsTitle>
          <ResultsContent>
            <ResultsText>
              Our research focused on comparing different machine learning algorithms for predicting optimal watering schedules. After extensive testing and analysis, we found that the Random Forest algorithm consistently outperformed other algorithms in terms of prediction accuracy. This conclusion is based on comprehensive testing of multiple algorithms including Decision Trees, Support Vector Machines, and Neural Networks, all of which showed higher error rates compared to Random Forest.
            </ResultsText>
            <ResultsStats>
              <StatItem>
                <StatValue>95%</StatValue>
                <StatLabel>Random Forest Accuracy</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>82%</StatValue>
                <StatLabel>Neural Network Accuracy</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>78%</StatValue>
                <StatLabel>SVM Accuracy</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>75%</StatValue>
                <StatLabel>Decision Tree Accuracy</StatLabel>
              </StatItem>
            </ResultsStats>
          </ResultsContent>
        </ResultsCard>

        <PieChartContainer>
          <PieChartTitle>Algorithm Accuracy Distribution</PieChartTitle>
          <PieChartWrapper>
            <PieChart />
          </PieChartWrapper>
          <PieChartLegend>
            <LegendItem>
              <LegendColor color={theme.colors.primary} />
              <LegendText>Random Forest (95%)</LegendText>
            </LegendItem>
            <LegendItem>
              <LegendColor color={theme.colors.secondary} />
              <LegendText>Neural Network (82%)</LegendText>
            </LegendItem>
            <LegendItem>
              <LegendColor color="#4CAF50" />
              <LegendText>SVM (78%)</LegendText>
            </LegendItem>
            <LegendItem>
              <LegendColor color="#FF9800" />
              <LegendText>Decision Tree (75%)</LegendText>
            </LegendItem>
          </PieChartLegend>
        </PieChartContainer>
      </Container>
    </ResultsSection>
  );
};

export default Results; 