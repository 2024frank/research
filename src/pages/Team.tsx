import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const TeamSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
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
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing['3xl']};
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['2xl']};
`;

const TeamMemberCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  text-align: center;
  box-shadow: ${theme.shadows.base};
  transition: all ${theme.transitions.smooth};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
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

const TeamMemberImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${theme.spacing.xl};
  border: 4px solid ${theme.colors.white};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.transitions.bounce};
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, ${theme.colors.primary}33, ${theme.colors.secondary}33);
    opacity: 0;
    transition: opacity ${theme.transitions.base};
  }

  ${TeamMemberCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: ${theme.shadows.xl};
  }

  ${TeamMemberCard}:hover &:after {
    opacity: 1;
  }
`;

const MemberName = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.lightText};
  line-height: 1.6;
`;

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Frank Kusi Appiah',
      role: 'Prospective Computer Science and Mathematics major',
      image: '/images/frank.png'
    },
    {
      name: 'Professor Adam Eck',
      role: 'Associate professor of Computer Science, Oberlin College',
      image: '/images/adam.png'
    },
    {
      name: 'Maike Anthony Dos Santos',
      role: 'Prospective Computer Science and Business major',
      image: '/images/maike.png'
    }
  ];

  return (
    <TeamSection>
      <Container>
        <Title>Meet the Team</Title>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index}>
              <TeamMemberImage src={member.image} alt={member.name} />
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team; 