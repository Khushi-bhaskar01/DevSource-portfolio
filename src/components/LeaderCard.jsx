import React from "react";
import "./LeaderCard.css";

const LeaderCard = ({ name, role, img, link }) => {
  return (
    <div className="leader-card">
      <div className="leader-img-wrap">
        <img src={img} alt={name} />
      </div>

      <h4 className="leader-name">{name}</h4>
      <p className="leader-role">{role}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="leader-profile-btn"
      >
        View Profile ↗
      </a>
    </div>
  );
};

export default LeaderCard;
