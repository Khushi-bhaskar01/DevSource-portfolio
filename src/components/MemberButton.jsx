import React from "react";
import "./memberButton.css";

const MemberButton = ({ name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="ds-member-btn"
    >
      <span className="ds-member-name">{name}</span>
      <span className="ds-member-arrow">↗</span>
    </a>
  );
};

export default MemberButton;
