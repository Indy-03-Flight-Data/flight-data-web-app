import { useState } from "react";

import "./Accordion.css";

function Accordion({ title, content, showOptions = false }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <div onClick={() => setIsActive(!isActive)}>
          <div>
            {showOptions && <input type="checkbox" />}
            {title}
            {isActive ? "-" : "+"}
          </div>
        </div>
        {isActive && <div>{content}</div>}
      </div>
    </>
  );
}

export default Accordion;
