import Heading from "../../heading/Heading";

import { motion } from "framer-motion";
import Technology from "../techs/Technology";
import { ContactWrapper } from "./AboutEllements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14 text-black">
        <Heading title={"About Me"} />
        <div className={`bg-white md:px-32 px-5 py-10 shadow-md rounded-md  `}>
          <motion.div
            initial={{ opacity: 0.4, translateY: "5px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              duration: 0.5,
            }}
            className={`AboutBio `}
          >
            <p>
              Hey! I'm <strong> Jubayer Ahmed </strong> and I'm from Bangladesh.
              I love building real-world solutions through code. Turning ideas
              into functional applications and solving real-world challenges
              with technology excites me the most.
            </p>
            <p className="mt-2">
              {" "}
              I began my coding journey in 2023 and quickly developed a deep
              passion for it. Over time, I've built multiple web projects
              refining my skills with modern web technologies. My focus is on
              developing efficient scalable and user-friendly applications. I am
              particularly interested in contributing to Web Open Source
              projects to enhance productivity and make technology more
              accessible to everyone.
            </p>
            <p className="mt-2">
              Outside of coding, I enjoy strategic video games and reading
              books. I believe continuous learning fuels both personal and
              professional growth.
            </p>
            <div className="tagline2 mb-8 mt-2">
              I have become confident using the following technologies:
            </div>
          </motion.div>
          <Technology />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
