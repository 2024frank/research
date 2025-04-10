import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const SensorsSection = styled.section`
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

const SensorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const SensorCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SensorImage = styled.div`
  margin-bottom: ${theme.spacing.lg};
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.base};
  padding: ${theme.spacing.base};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: ${theme.borderRadius.base};
  }
`;

const SensorName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.base};
`;

const SensorDescription = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.sm};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.lightText};

    &:before {
      content: '•';
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSizes.xl};
      position: absolute;
      left: 0;
      top: -2px;
    }
  }
`;

const Sensors: React.FC = () => {
  const sensors = [
    {
      name: 'WS90 7-in-1 Outdoor Sensor Array',
      image: '/images/ws90.png',
      measurements: [
        'Outdoor temperature',
        'Outdoor humidity',
        'Wind speed',
        'Wind direction',
        'Light intensity',
        'UV intensity',
        'Rain'
      ]
    },
    {
      name: 'HP2560_C 7" TFT Display with Indoor Sensors',
      image: '/images/ds.png',
      measurements: [
        'Indoor temperature',
        'Indoor humidity',
        'Indoor barometric pressure'
      ]
    },
    {
      name: 'WH51 Soil Moisture Sensor',
      image: '/images/sm.png',
      measurements: [
        'Soil moisture levels',
        'Real-time moisture monitoring',
        'Water content measurement'
      ]
    },
    {
      name: 'WN30 Thermometer with Probe',
      image: '/images/st.png',
      measurements: [
        'Soil temperature',
        'Root zone temperature',
        'Temperature variations'
      ]
    }
  ];

  return (
    <SensorsSection>
      <Container>
        <Title>Sensor Technology</Title>
        <SensorGrid>
          {sensors.map((sensor, index) => (
            <SensorCard key={index}>
              <SensorImage>
                <img src={sensor.image} alt={sensor.name} />
              </SensorImage>
              <SensorName>{sensor.name}</SensorName>
              <SensorDescription>
                {sensor.measurements.map((measurement, idx) => (
                  <li key={idx}>{measurement}</li>
                ))}
              </SensorDescription>
            </SensorCard>
          ))}
        </SensorGrid>
      </Container>
    </SensorsSection>
  );
};

export default Sensors; 