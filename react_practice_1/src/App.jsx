import React from "react";
import ProfileCard from "./profile.jsx";
import profilepic from "./assests/profileImg.jpg";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProfileCard
        profileImage={profilepic}
        name="Hackerman"
        description="Software Engineer who loves React and JavaScript."
        skills={["React", "Node.js", "Python", "MongoDB"]}
      />

    </div>
  );
}

export default App;
