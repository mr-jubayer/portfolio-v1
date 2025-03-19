import { stackList } from "../../Skills";
import { Tech, TechImg, TechName, Technologies } from "../about/AboutEllements";
import { motion } from "framer-motion";

function Technology() {
  return (
    <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14 text-black mt-[5rem]">
      <Technologies>
        {stackList.map((stack, index) => (
          <motion.div
            initial={{ opacity: 0, translateY: "15px", scale: 0.9 }}
            whileInView={{ opacity: 1, translateY: "0px", scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.4 - 2,
            }}
            key={index}
            className="tech shadow-sm  bg-white  rounded-md  flex flex-col items-center max-w-[150px] min-w-[150px] p-2.5 cursor-default"
          >
            <TechImg src={stack.img} alt={stack.name} />
            <TechName>{stack.name}</TechName>
          </motion.div>
        ))}
      </Technologies>
    </div>
  );
}

export default Technology;
