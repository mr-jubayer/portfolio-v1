import { motion } from "framer-motion";
import { stackList } from "../../Skills";
import { TechImg, TechName, Technologies } from "../about/AboutEllements";

function Technology() {
  return (
    <div className="max-w-6xl mx-auto px-4  lg:px-14 text-black mt-[5rem] ">
      <Technologies>
        {stackList.map((stack, index) => (
          <motion.div
            initial={{ opacity: 0, translateY: "15px", scale: 0.9 }}
            whileInView={{ opacity: 1, translateY: "0px", scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.5 - 3,
            }}
            key={index}
            className="tech shadow-sm  bg-white  rounded-md  flex flex-col items-center max-w-[150px] md:min-w-[150px] min-w-[100px] p-2.5 cursor-default"
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
