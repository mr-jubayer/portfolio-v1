// import Heading from "../../heading/Heading";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { Link } from "react-router";
// import { motion } from "motion/react";
import { motion } from "motion/react";

// function Contact() {
//   // const socialLinks = [
//   //   {
//   //     id: "e",
//   //     label: "Email",
//   //     to: "mailto:jubayerahmed.dev@gmail.com",
//   //     value: "jubayerahmed.dev@gmail.com",
//   //     icon: <MdEmail size={26} />,
//   //   },
//   //   {
//   //     id: "li",
//   //     label: "LinkedIn",
//   //     value: "jubayer-ahmed1",
//   //     to: "https://www.linkedin.com/in/jubayer-ahmed1/",
//   //     icon: <FaLinkedin size={26} />,
//   //   },
//   //   {
//   //     id: "wa",
//   //     label: "What's App",
//   //     value: "+880 1875329737",
//   //     to: "https://wa.me/8801875329737",
//   //     icon: <IoLogoWhatsapp size={26} />,
//   //   },
//   // ];
//   return <section className="md:mt-28 mt-16" id="contact"></section>;
// }

// export default Contact;

import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { ContactWrapper, Email } from "./ContactElements";

import Heading from "../../heading/Heading";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showNumberTooltip, setShowNumberTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("jubayerahmed.dev@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  const numberCopyToClipboard = () => {
    navigator.clipboard.writeText("+8801313698464");
    setShowNumberTooltip(true);
    setTimeout(() => {
      setShowNumberTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14 ">
        <Heading title={"Get In Touch"} />
        <motion.div
          className="shadow-md md:px-28 px-5 bg-white py-12 rounded-md"
          initial={{ opacity: 0, translateY: "14px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 1,
          }}
        >
          <Email className="flex sm:justify-between items-center sm:flex-row justify-center flex-col  gap-4">
            <div>
              <span className="text-black mr-4">
                jubayerahmed.dev@gmail.com
              </span>
              <Tooltip
                open={showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="bottom"
              >
                <IconButton onClick={copyToClipboard}>
                  <MdContentCopy
                    size={25}
                    style={{ cursor: "pointer", color: "#151418" }}
                  />
                </IconButton>
              </Tooltip>
            </div>
            <a
              className="btn PrimaryBtn btn-shadow"
              href="mailto:jubayerahmed.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </Email>
        </motion.div>
        <motion.div
          className="shadow-md md:px-28 px-5 bg-white py-12 rounded-md mt-8 "
          initial={{ opacity: 0, translateY: "14px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{
            duration: 1,
          }}
        >
          <Email className="flex sm:justify-between items-center sm:flex-row justify-center flex-col  gap-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
                rowGap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span className="text-black">+880 1875329737</span>
              <Tooltip
                open={showNumberTooltip}
                onClose={() => setShowNumberTooltip(false)}
                title="Copied!"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="bottom"
              >
                <IconButton onClick={numberCopyToClipboard}>
                  <MdContentCopy
                    size={25}
                    style={{ cursor: "pointer", color: "#151418" }}
                  />
                </IconButton>
              </Tooltip>
            </div>
            <a
              className="btn PrimaryBtn btn-shadow"
              href="https://wa.me/+8801875329737"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Email>
        </motion.div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
