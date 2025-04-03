import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxlarge} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.large};
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const ProjectStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const TechStack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const LinkButton = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    text-decoration: underline;
  }
`;

interface Project {
  title: string;
  description: string;
  users: number;
  rating: number;
  techStack: string[];
  liveUrl?: string;
  detailsUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'PlanIt: Todos & Task Planner',
      description: 'Plan your daily weekly monthly tasks, schedule alarms and visualize your weekly stats with vibrant graph',
      users: 150,
      rating: 4.8,
      techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://planit.demo.com',
      detailsUrl: '/projects/planit',
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Work</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectStats>
                <span>{project.users}+ users</span>
                <span>{project.rating} ★</span>
              </ProjectStats>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.techStack.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              {project.liveUrl && (
                <LinkButton href={project.liveUrl} target="_blank">Live</LinkButton>
              )}
              {project.detailsUrl && (
                <LinkButton href={project.detailsUrl}>Details</LinkButton>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
