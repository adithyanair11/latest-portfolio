import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://github.com/adithyanair11/Shuffle-music-app"
          h3="Shuffle"
          p="Music App"
        />
        <ProjectCard
          link="https://github.com/adithyanair11/Aniflix"
          h3="Aniflix"
          p="Streaming App"
        />
        <ProjectCard
          link="https://github.com/adithyanair11/social-connections"
          h3="Social Connections"
          p="Finder App"
        />
      </div>
    </section>
  );
}

export default Projects;
