import React from "react";

import "./index.scss";

const ScrollToTop = () => {
  return (
    <div onClick={() => window.scrollTo(0, 0)} className="scroll">
      <i class="uil uil-arrow-up"></i>
    </div>
  );
};

export default ScrollToTop;
