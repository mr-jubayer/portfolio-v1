import ProjectList from "../ProjectList";
import { motion } from "motion/react";

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
        <motion.div
          key={index}
          initial={{ opacity: 0.7, translateX: "-20px" }}
          whileInView={{ opacity: 1, translateX: "0px" }}
          transition={{
            duration: 1,
            delay: index * 0.2,
          }}
        >
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4 className="text-black">{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard className="shadow-sm" key={index}>
                    {tech}
                  </TechCard>
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
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;
