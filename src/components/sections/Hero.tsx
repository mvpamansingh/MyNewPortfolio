import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spacing.large};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 0;
  }
`;

const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Button = styled.a`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.large}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ProfileImage
        src="/path-to-your-image.jpg"
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <ProfileInfo>
        <Name>Your Name</Name>
        <Title>Software Engineer</Title>
        <ActionButtons>
          <Button href="/resume.pdf" target="_blank">Resume</Button>
          <Button href="#contact">Contact</Button>
        </ActionButtons>
      </ProfileInfo>
    </HeroSection>
  );
};

export default Hero;
