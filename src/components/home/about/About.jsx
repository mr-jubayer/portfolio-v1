import Heading from "../../heading/Heading";
import { stackList } from "../../Skills";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutEllements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14 text-black">
        <Heading title={"About Me"} />
        <div className="bg-white md:px-32 px-5 py-10 shadow-md rounded-md">
          <Image
            src="https://i.ibb.co.com/MkPHBBRK/Black-Pattern-Minimalist-Linked-In-Profile-Picture-removebg-preview.png"
            alt="me"
          />
          <div className="AboutBio">
            Hey! I'm <strong> Jubayer Ahmed </strong> and I'm from Bangladesh. I
            love building real-world solutions through code. Turning ideas into
            functional applications and solving real-world challenges with
            technology excites me the most.
            <br />
            <br />
            I began my coding journey in 2024 and quickly developed a deep
            passion for it. Over time, I've built multiple web projects refining
            my skills with modern web technologies. My focus is on developing
            efficient scalable and user-friendly applications. I am particularly
            interested in contributing to Web Open Source projects to enhance
            productivity and make technology more accessible to everyone.
            <br />
            <br />
            Outside of coding, I enjoy strategic video games and reading books.
            I believe continuous learning fuels both personal and professional
            growth.
            <div className="tagline2 mb-8">
              I have become confident using the following technologies:
            </div>
            <Technologies>
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
