import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About</SectionTitle>
      <AboutContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          My interests lie around GenAI, web development, and solving actual problems
          using code. I'm building Noterr - a universal bookmarking tool, on weekends :)
        </p>
        <br />
        <p>
          I wrote my first line of code in 2019. I've spent my college doing internships,
          freelance projects, and attending/organizing developer events. In 2024, I graduated
          from a computer science degree from India, and joined as a software engineer.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
