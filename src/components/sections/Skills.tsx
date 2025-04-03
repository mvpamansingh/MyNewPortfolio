import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
`;

const SkillTag = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: 4px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'Git',
    // Add more skills as needed
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillTag
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill}
          </SkillTag>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
