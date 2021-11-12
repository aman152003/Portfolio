import React from "react";

import { StyledScrollToTop } from "./styled-scroll-to-top";

const ScrollToTop = () => {
  return (
    <StyledScrollToTop onClick={() => window.scrollTo(0, 0)}>
      <i class="uil uil-arrow-up"></i>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
