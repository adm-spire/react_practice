import React from "react";
import "./skill.css";
function Skill({ skillName }) {
    return (
        
        <div className="skill-box">
            <h3 className="skill-text">{skillName}</h3>
        </div>
        
    );
}
export default Skill;