import ProjectList from "../ProjectList";

import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard() {
  return (
    <div>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4 className="text-black">{list.title}</h4>
            <p>{list.description}</p>
            <TechCardContainer>
              {list.tech_stack.map((tech, index) => (
                <TechCard key={index}>{tech}</TechCard>
              ))}
            </TechCardContainer>
            <BtnGroup>
              {list.github_url.length > 0 && (
                <a
                  className="btn SecondaryBtn btn-shadow"
                  href={list.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
              {list.demo_url.length > 0 && (
                <a
                  className="btn PrimaryBtn btn-shadow"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;
