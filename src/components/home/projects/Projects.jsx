import Heading from "../../heading/Heading";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14">
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <Heading title={"Projects"} />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
