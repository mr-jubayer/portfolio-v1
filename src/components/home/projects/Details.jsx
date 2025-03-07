import { useEffect, useState } from "react";
import { useParams } from "react-router";
import projects from "../projects";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Details() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const proj = projects.find((p) => p.route === name);
    setProject(proj || null);
  }, [name]);

  if (!project) {
    return <h2 className="text-center text-xl mt-10">Project not found.</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="border-b border-gray-500/40 pb-5 mb-5">
        <motion.img
          src={project.image}
          alt={project.name}
          className="rounded-md lg:h-[500px] w-full object-cover mx-auto shadow-lg"
          initial={{ opacity: 0, translateY: "10px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          viewport={{ once: true }}
        />
        <motion.h2
          initial={{ opacity: 0, translateX: "-50px" }}
          whileInView={{ opacity: 1, translateX: "0px" }}
          viewport={{ once: true }}
          className="text-4xl font-bold mt-5"
        >
          {project.name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          viewport={{ once: true }}
          className="mt-3 flex gap-5"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center text-[#007BFF] hover:text-[#0056b3] transition duration-300"
          >
            <FaGithub /> GitHub Repo
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center text-[#007BFF] hover:text-[#0056b3] transition duration-300"
          >
            <LuExternalLink /> Live Site
          </a>
        </motion.div>
      </div>

      {/* Project Details */}
      <div>
        {/* Overview */}
        <Section title="Overview" content={project.description} />

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold rounded-md shadow-md"
                style={{ backgroundColor: tech.color, color: "#fff" }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <Section title="Features ✨" list={project.features} />

        {/* Challenges */}
        <Section title="Challenges" list={project.challenges} />

        {/* Goals */}
        <Section title="Future Goals" list={project.goals} />
      </div>
    </div>
  );
}

function Section({ title, content, list }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <h2 className="border-l-4 border-[#007BFF] pl-2 text-2xl font-semibold mb-3">
        {title}
      </h2>
      {content && <p className="text-gray-300">{content}</p>}
      {list && (
        <ul className="list-disc list-inside text-gray-300">
          {list.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default Details;
