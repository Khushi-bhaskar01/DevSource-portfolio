import { motion } from "framer-motion";
import UniverseBG from "../components/UniverseBG";
import MemberButton from "../components/MemberButton";
import Portfolio from "./Portfolio";

import "./home.css";

export default function Home() {
  return (
    <div className="homee">
        <UniverseBG />

      <section className="heroo">
        <motion.h1
          className="glitch hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span aria-hidden="true">DevSource</span>
          Dev<span className="accentt">Source</span>
          <span aria-hidden="true">DevSource</span>
        </motion.h1>

        <motion.p
         className="hero-desc"
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 0.6, y: 0 }}
         transition={{ delay: 0.3 }}
       >
         DevSource is a platform built by{" "}
         <span className="accent">developers</span>, for{" "}
         <span className="accent">developers</span>. We bridge the gap between{" "}
         <span className="accent">learning</span> and{" "}
         <span className="accent">real-world development</span> through{" "}
         <span className="accent">project-based learning</span>,{" "}
         <span className="accent">open-source culture</span>, and{" "}
         <span className="accent">collaborative growth</span>. This platform showcases
         the people behind <span className="accent">DevSource</span> and their{" "}
         <span className="accent">contributions</span>.
        </motion.p>

      </section>

      <section className="team">
        <h2>Leadership</h2>

        <div className="team-grid">
          <LeaderCard
            name="Khushi Bhaskar"
            role="LEAD"
            img="/khushi.JPG"
            link="/khushi"
          />
          <LeaderCard
            name="Krrish Khowal"
            role="VICE LEAD"
            img="/vice_lead.JPG"
            link="/team/krrish-khowal"
          />
        </div>
      </section>

      <section className="members">
        <motion.div
          className="members-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Team Members</h3>

          <div className="members-buttons">
            <MemberButton name="Atharv Handa" link="/atharv" />
            <MemberButton name="Mohd. Sami" link="/Sami/index.html" />
            <MemberButton name="Vasu Garg" link="/vasu/index.html" />
            <MemberButton name="Nikhil" link="/nikhil" />
            <MemberButton name="Jiya Agrawal" link="/portfolio" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function LeaderCard({ img, name, role, link}) {
  return (
    <motion.div
      className="card"
      whileHover={{ rotateY: 14, rotateX: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="image-wrap">
        <img src={img} alt={name} />
        <span className="hex" />
        <span className="hex glow" />
      </div>

      <span className="role">[ {role} ]</span>
      <h3>{name}</h3>

      <a href={link} className="profile-btn">
        VIEW PROFILE →
      </a>
    </motion.div>
  );
}

