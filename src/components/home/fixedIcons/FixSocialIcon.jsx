import styled from "@emotion/styled";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <SocialContainer>
      <ul>
        <li className="item">
          <motion.a
            href="https://www.linkedin.com/in/jubayer-ahmed1/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, translateX: "-20px" }}
            whileInView={{
              scale: 2,
              opacity: 1,
              transition: { duration: 2 },
              translateX: "0px",
            }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <FaLinkedin />
          </motion.a>
        </li>
        <li className="item">
          <motion.a
            href="https://github.com/mr-jubayer"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, translateX: "-20px" }}
            whileInView={{
              scale: 2,
              opacity: 1,
              transition: { duration: 2 },
              translateX: "0px",
            }}
            transition={{
              duration: 2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <FaGithub />
          </motion.a>
        </li>
      </ul>
    </SocialContainer>
  );
}

export default FixSocialIcon;
