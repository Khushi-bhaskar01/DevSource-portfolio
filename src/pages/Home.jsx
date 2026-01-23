import React, { useEffect, useRef } from "react";
import "./home.css";
import UniverseBG from "../components/UniverseBG";
import { gsap } from "gsap";
import MemberButton from "../components/MemberButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeaderCard from "../components/LeaderCard";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const portalRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const floatingImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= HERO TIMELINE ================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-wrapper",
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
          pin: true,
        },
      });

      tl.to(portalRef.current, {
        scale: 45,
        ease: "power4.out",
      });

      tl.to(
        logoRef.current,
        {
          opacity: 0,
          filter: "blur(14px)",
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.to(
        ".portal-ring",
        {
          opacity: 0.8,
          scale: 2,
          ease: "power2.out",
        },
        "<"
      );

      /* ================= FLOATING PNG ================= */

      tl.fromTo(
        floatingImgRef.current,
        {
          opacity: 0,
          scale: 0.3,
          y: 80,
          rotateX: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: -120,
          rotateX: 0,
          ease: "power3.out",
        },
        "-=0.1"
      );

      tl.to(floatingImgRef.current, {
        y: -300,
        x: 40,
        scale: 1.15,
        rotateZ: 4,
        ease: "none",
      });

      tl.to(
        floatingImgRef.current,
        {
          opacity: 0,
          scale: 1.4,
          ease: "power2.in",
        },
        "-=0.25"
      );

      /* ================= LETTER BY LETTER REVEAL ================= */

      const reveal = contentRef.current.querySelector(".reveal-text");
      if (!reveal) return;

      const text = reveal.innerText;
      reveal.innerHTML = "";

      [...text].forEach((char) => {
        if (char === " ") {
          reveal.appendChild(document.createTextNode(" "));
        } else {
          const span = document.createElement("span");
          span.className = "reveal-char";
          span.textContent = char;
          reveal.appendChild(span);
        }
      });

      gsap.fromTo(
        reveal.querySelectorAll(".reveal-char"),
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: reveal,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      <div className="universe-bg-wrapper">
        <UniverseBG />
      </div>

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
            link="https://www.linkedin.com/in/krrish-khowal-150885311/"
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
            <MemberButton name="Mohd. Sami" link="https://samicode.netlify.app/" />
            <MemberButton name="Vasu Garg" link="https://portfolio-vasug.netlify.app/" />
            <MemberButton name="Nikhil" link="/nikhil" />
            <MemberButton name="Jiya Agrawal" link="/jiya" />
            <MemberButton name="Vinit Tiwari" link="/Vinit" />
            <MemberButton name="Himanshu Singh" link="https://portfolio-gules-two-28.vercel.app/" />
            <MemberButton name="Suraj" link="https://dev-source-portfolio-lovat.vercel.app/Suraj"/>

      {/* HERO */}
      <div className="hero-wrapper">
        <div className="sticky-hero">
          <div className="logo-container" ref={logoRef}>
            <div className="logo">
              <span className="dev-text">DevS</span>

              <div className="o-portal" ref={portalRef}>
                <div className="portal-ring ring-1" />
                <div className="portal-ring ring-2" />
                <div className="portal-ring ring-3" />
                <span className="o-letter">O</span>
              </div>

              <span className="source-text">urce</span>
            </div>

            <p className="tagline">
              A platform built by <span>developers</span>, for{" "}
              <span>developers</span>
            </p>

          </div>

          <img
            ref={floatingImgRef}
            src="/earth.png"
            alt="Floating"
            className="floating-png"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-section" ref={contentRef}>
        <div className="content-inner">
          <section className="about-main">
            <h2 className="content-title ds-heading">Welcome to DevSource Universe</h2>

            <p className="content-text reveal-text">
              We bridge the gap between learning & real-world development
              through project-based learning and open-source culture.
              At DevSource, learning doesn't stop at watching or reading.You write
              code, you break things, you fix them, and you ship.We encourage
              experimentation, curiosity, and consistency.Whether you're
              writing your first component or optimizing production-ready
              systems, the journey matters as much as the result.
            </p>
            <section className="leadership-section">
              <h3 className="leadership-heading ds-heading">Leadership</h3>
         
               <div className="leadership-cards">
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
                   link="https://www.linkedin.com/in/krrish-khowal-150885311/"
                 />
               </div>
             </section>

            {/* ================= TEAM MEMBERS ================= */}
            <section className="team-section">
              <h3 className="team-heading ds-heading">Team Members</h3>
            
              <div className="members-buttons">
                <MemberButton name="Atharv Handa" link="/atharv" />
                <MemberButton name="Mohd. Sami" link="https://samicode.netlify.app/" />
                <MemberButton name="Vasu Garg" link="https://portfolio-vasug.netlify.app/" />
                <MemberButton name="Nikhil" link="/nikhil" />
                <MemberButton name="Jiya Agrawal" link="/jiya" />
                <MemberButton name="Akash Das" link="/akash" />
                <MemberButton name="Vinit Tiwari" link="/Vinit" />
                <MemberButton name="Himanshu Singh" link="https://portfolio-gules-two-28.vercel.app/" />
                <MemberButton name="Vaibhav Kumar" link="https://vaibhavk-portfolio.netlify.app/" />
                <MemberButton name="Arnav Kumar Gupta" link="https://arnav-portfolio-chi.vercel.app/" />
                <MemberButton name="Mayank Sagar" link="https://my-portfolio-page-16.netlify.app/" />
                <MemberButton name="Anshu Kumar" link="https://anshu-portfolio-sable.vercel.app/" />
              </div>
            </section>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
