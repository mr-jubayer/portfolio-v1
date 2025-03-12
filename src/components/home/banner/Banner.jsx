import myPic from "../../../assets//mef.jpg";
import { Link } from "react-router";
import PrimaryButton from "../../btns/PrimaryButton";
import SecondaryButton from "../../btns/SecondaryButton";
import { motion } from "motion/react";

function Banner() {
  return (
    <div className="bg-[#151418]  ">
      <div className="  flex flex-col items-center   text-center justify-center max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14">
        <div className="grid  justify-center">
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={myPic}
              alt="my image"
              className=" md:h-60 h-44 aspect-square  rounded-full border-white border-4 object-cover md:mt-10 sm:mt-20 mt-24"
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, translateY: "3px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="md:text-6xl text-3xl  font-extrabold z-10 relative mt-5 text-white "
          >
            Hi!, I'm Jubayer.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "3px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="md:text-xl text-lg mx-auto mt-3 md:w-xl z-10 relative"
          >
            <span className="font-medium text-white">
              A Frontend Web Developer,
            </span>{" "}
            <span className="dark-gray">
              focused on developing innovative web applications.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, translateY: "3px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-auto"
          >
            <div className="flex gap-4 ">
              <Link
                to={
                  "https://drive.google.com/file/d/11ZeNJpJ1rT6DJfa6fMcynJT5TvlVUodx/view?usp=sharing"
                }
                target="_blank"
              >
                <PrimaryButton>View Resume</PrimaryButton>
              </Link>
              <a href="#contact">
                {" "}
                <SecondaryButton>Get In touch</SecondaryButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
