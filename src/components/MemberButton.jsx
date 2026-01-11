import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function MemberButton({ name, link }) {
  return (
    <MotionLink
      to={link}
      className="member-btn"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      {name}
    </MotionLink>
  );
}
