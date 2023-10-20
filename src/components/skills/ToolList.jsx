import "./tools.styles.css";

import { mainTools } from "../../utils/store";

const ToolList = () => {
  return (
    <div>
      <h1>Frontend developer</h1>
      <div className="main-tools-container">
        {mainTools.map((tool) => (
          <div
            key={tool.id}
            className={tool.name === "React.js" ? "react-icon" : "main-tools"}
          >
            <img src={tool.image} alt={tool.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolList;
