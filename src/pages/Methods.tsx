import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import ImageModal from '../components/ImageModal';

const MethodsSection = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 50px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #f39c12;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.smooth};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.lg};
  }
`;

const MethodCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.smooth};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

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

const MethodTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.base};
  font-weight: 600;
`;

const MethodDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.base};
`;

const DatabaseImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  border-radius: ${theme.borderRadius.lg};
  margin: ${theme.spacing.xl} auto;
  display: block;
  border: 4px solid ${theme.colors.white};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.bounce};

  ${MethodCard}:hover & {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SensorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const SensorCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.smooth};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

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

const SensorImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.lg};
  border: 4px solid ${theme.colors.white};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.bounce};

  ${SensorCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SensorName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.base};
  font-weight: 600;
`;

const SensorMeasurements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  justify-content: center;
`;

const MeasurementTag = styled.span`
  background: ${theme.colors.background};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
`;

const sensors = [
  {
    name: 'Soil Moisture Sensor',
    image: '/images/sm.png',
    measurements: ['Soil Moisture', 'Water Content']
  },
  {
    name: 'Temperature Sensor',
    image: '/images/st.png',
    measurements: ['Air Temperature', 'Soil Temperature']
  },
  {
    name: 'Humidity Sensor',
    image: '/images/ws90.png',
    measurements: ['Relative Humidity', 'Dew Point']
  },
  {
    name: 'Light Sensor',
    image: '/images/ds.png',
    measurements: ['Light Intensity', 'UV Index']
  }
];

const ClickableImage = styled.div`
  cursor: pointer;
  transition: all ${theme.transitions.base};
  
  &:hover {
    opacity: 0.9;
  }
`;

const MLModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
`;

const MLModelCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

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

const MLModelName = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.base};
  font-weight: 600;
`;

const MLModelDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.base};
  flex-grow: 1;
`;

const MLModelAccuracy = styled.div`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.secondary};
  font-weight: 600;
  text-align: center;
  margin-top: ${theme.spacing.base};
  padding: ${theme.spacing.sm} ${theme.spacing.base};
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.full};
  display: inline-block;
  align-self: center;
`;

const Methods: React.FC = () => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const mlModels = [
    {
      name: 'Random Forest',
      description: 'An ensemble learning method that constructs multiple decision trees and outputs the class that is the mode of the classes of the individual trees.',
      accuracy: '95%'
    },
    {
      name: 'Neural Network',
      description: 'A computing system inspired by the biological neural networks of animal brains, consisting of interconnected nodes that process information.',
      accuracy: '82%'
    },
    {
      name: 'Support Vector Machine',
      description: 'A supervised learning model that analyzes data for classification and regression analysis, finding the optimal hyperplane for classification.',
      accuracy: '78%'
    },
    {
      name: 'Decision Tree',
      description: 'A tree-structured model of decisions and their possible consequences, used for classification and regression.',
      accuracy: '75%'
    }
  ];

  return (
    <MethodsSection>
      <Container>
        <Title>Our Methods</Title>
        
        <MethodCard>
          <MethodTitle>Database Structure</MethodTitle>
          <MethodDescription>
            Our MySQL database is designed to efficiently store and manage sensor data, plant information, and environmental conditions.
          </MethodDescription>
          <ClickableImage onClick={() => openModal('/images/db.png', 'Database Structure')}>
            <DatabaseImage src="/images/db.png" alt="Database Structure" />
          </ClickableImage>
        </MethodCard>

        <MethodCard>
          <MethodTitle>Dashboard Implementation</MethodTitle>
          <MethodDescription>
            We use Grafana to create interactive dashboards that visualize real-time data from our sensors and provide insights into plant health.
          </MethodDescription>
          <DashboardGrid>
            <ClickableImage onClick={() => openModal('/images/dash1.png', 'Dashboard 1')}>
              <DashboardImage src="/images/dash1.png" alt="Dashboard 1" />
            </ClickableImage>
            <ClickableImage onClick={() => openModal('/images/dash2.png', 'Dashboard 2')}>
              <DashboardImage src="/images/dash2.png" alt="Dashboard 2" />
            </ClickableImage>
          </DashboardGrid>
        </MethodCard>

        <MethodCard>
          <MethodTitle>Sensor Technology</MethodTitle>
          <MethodDescription>
            Our IoT sensors collect crucial data points including soil moisture, temperature, humidity, and light levels to optimize plant care.
          </MethodDescription>
          <SensorGrid>
            {sensors.map((sensor, index) => (
              <SensorCard key={index}>
                <ClickableImage onClick={() => openModal(sensor.image, sensor.name)}>
                  <SensorImage src={sensor.image} alt={sensor.name} />
                </ClickableImage>
                <SensorName>{sensor.name}</SensorName>
                <SensorMeasurements>
                  {sensor.measurements.map((measurement, idx) => (
                    <MeasurementTag key={idx}>{measurement}</MeasurementTag>
                  ))}
                </SensorMeasurements>
              </SensorCard>
            ))}
          </SensorGrid>
        </MethodCard>

        <MethodCard>
          <MethodTitle>Machine Learning Models</MethodTitle>
          <MethodDescription>
            We employed various machine learning algorithms to analyze sensor data and predict optimal watering schedules for different plant types.
          </MethodDescription>
          <MLModelGrid>
            {mlModels.map((model, index) => (
              <MLModelCard key={index}>
                <MLModelName>{model.name}</MLModelName>
                <MLModelDescription>{model.description}</MLModelDescription>
                <MLModelAccuracy>Accuracy: {model.accuracy}</MLModelAccuracy>
              </MLModelCard>
            ))}
          </MLModelGrid>
        </MethodCard>
      </Container>

      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={closeModal} 
        />
      )}
    </MethodsSection>
  );
};

export default Methods; 