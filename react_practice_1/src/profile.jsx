import React from "react";
import "./ProfileCard.css";
import Skill from "./skill.jsx"; 

function ProfileCard({profileImage, name , description , skills}){
    return (
        <div className="profile-card">
            <img src={profileImage} alt={name} className="profile-img"/>
            <h2 className="profile-name">{name}</h2>
            <p className="profile-desc">{description}</p>
             {/* Skills Section */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skill key={index} skillName={skill} />
        ))}
      </div>
        </div>
    );
}
export default ProfileCard;