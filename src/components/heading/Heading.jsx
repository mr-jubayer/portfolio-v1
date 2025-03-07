import { motion } from "motion/react";

function Heading({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="md:mb-12 mb-7"
    >
      <h2 className=" md:text-4xl  text-2xl font-bold  text-black">
        {title}
        <span className="text-5xl ml-0.5  text-[#007BFF]">.</span>
      </h2>
    </motion.div>
  );
}

export default Heading;
