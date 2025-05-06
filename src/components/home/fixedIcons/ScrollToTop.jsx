import { IconButton, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 10px;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #007bff;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(160, 170, 180, 0.6);
`;

function ScrollToTop() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return (
    shouldRender && (
      <a href="#home">
        <StyledIconButton size="large" aria-label="scroll to top">
          <StyledArrowIcon fontSize={40} />
        </StyledIconButton>
      </a>
    )
  );
}

export default ScrollToTop;
