// import Heading from "../../heading/Heading";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { Link } from "react-router";
// import { motion } from "motion/react";

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

import { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";

import Heading from "../../heading/Heading";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("jubayerahmed.dev@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="max-w-6xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14 ">
        <Heading title={"Get In Touch"} />
        <div className="shadow-md md:px-28 px-5 bg-white py-12 rounded-md">
          <Email>
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
              <span className="text-black">jubayerahmed.dev@gmail.com</span>
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
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
