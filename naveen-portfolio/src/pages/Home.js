import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import painting from "../assets/Nerd-pana-bg.svg";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaBrain,
  FaLanguage,
  FaRobot,
  FaMicrochip,
  FaChartBar,
  FaGithub,
  FaLinkedin,
  FaCss3,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSpring,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import { FaArrowRight } from "react-icons/fa";
import ParticlesBg from "../components/ParticlesBg";
import BlurText from "../components/Blur";
// No curly braces - it's a default export

export default function Home() {
  return (
    <main className="home">
      {/* Particles Background */}

      <header className="particlesWrap">
        <ParticlesBg />
      </header>

      <motion.span
        className="badge"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Open to Software / Data roles
      </motion.span>

      {/* Title slides from left */}

      <BlurText
        text="Hi, I'm Naveen Rayapudi."
        delay={150}
        animateBy="words"
        direction="top"
        className="displayTitle"
      />

      <div className="hero2">
        {/* Badge */}

        {/* LEFT: Text */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master's student in Applied Computer Science at Concordia University
          with experience in building full-stack applications and data/ML
          projects using Java, Python, SQL, React, and cloud technologies.
        </motion.p>

        {/* RIGHT: Image */}
        <motion.div
          className="heroRight"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={painting} alt="Data visualization" className="heroImg" />
        </motion.div>

        {/* Buttons slide up */}
        <motion.div
          className="actions"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link className="btn btn-secondary" to="/contact">
            Contact And Resume
          </Link>
          <Link className="btn btn-primary" to="/projects">
            View Projects <FaArrowRight className="btn-arrow" />
          </Link>
        </motion.div>

        {/* Social links fade in */}
        <motion.div
          className="social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://github.com/naveen777-github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={26} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rayapudi-naveen-6042a5190/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={26} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      <section className="middle-title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          WHAT I'M GOOD AT
        </motion.h2>
      </section>
      {/* Software Engineering Section */}
      <section className="split">
        {/* GIF – slides from LEFT */}
        <motion.img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFkOHN1dml2ajB4NWhwOWJ0bTliN25iODRvdGdubXk2dXBneXV4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.gif"
          alt="Software Engineering"
          className="gif right"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        />

        {/* Stack – slides from RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Software Engineering Stack</h2>

          <div className="stack">
            <div className="stack-item">
              <FaJava size={26} />
              <span>Java</span>
            </div>

            <div className="stack-item">
              <FaHtml5 size={26} />
              <span>HTML</span>
            </div>

            <div className="stack-item">
              <FaCss3 size={26} />
              <span>CSS</span>
            </div>

            <div className="stack-item">
              <FaJs size={26} />
              <span>JavaScript</span>
            </div>

            <div className="stack-item">
              <FaReact size={26} />
              <span>React</span>
            </div>

            <div className="stack-item">
              <FaNodeJs size={26} />
              <span>Node.js</span>
            </div>

            <div className="stack-item">
              <SiPostman size={26} />
              <span>REST APIs</span>
            </div>

            <div className="stack-item">
              <FaGitAlt size={26} />
              <span>Git</span>
            </div>

            <div className="stack-item">
              <SiSpring size={26} />
              <span>Data Structures</span>
            </div>

            <div className="stack-item">
              <FaAws size={26} />
              <span>AWS</span>
            </div>

            <div className="stack-item">
              <SiMongodb size={26} />
              <span>MongoDB</span>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Data / ML Section */}
      <section className="split data">
        {/* Stack – slides from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Data & ML Stack</h2>

          <div className="stack">
            <div className="stack-item">
              <FaDatabase size={26} />
              <span>SQL</span>
            </div>

            <div className="stack-item">
              <FaPython size={26} />
              <span>Python</span>
            </div>

            <div className="stack-item">
              <SiPandas size={26} />
              <span>Pandas</span>
            </div>

            <div className="stack-item">
              <SiNumpy size={26} />
              <span>NumPy</span>
            </div>

            <div className="stack-item">
              <SiScikitlearn size={26} />
              <span>Scikit Learn</span>
            </div>

            <div className="stack-item">
              <SiPytorch size={26} />
              <span>PyTorch</span>
            </div>

            <div className="stack-item">
              <FaLanguage size={26} />
              <span>NLP</span>
            </div>

            <div className="stack-item">
              <FaChartBar size={26} />
              <span>PowerBI</span>
            </div>

            <div className="stack-item">
              <SiTensorflow size={26} />
              <span>TensorFlow</span>
            </div>

            <div className="stack-item">
              <FaRobot size={26} />
              <span>Artificial Intelligence</span>
            </div>

            <div className="stack-item">
              <FaBrain size={26} />
              <span>Machine Learning</span>
            </div>
          </div>
        </motion.div>

        {/* GIF – slides from RIGHT */}
        <motion.img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDA2NnFpaWowNW1mNjAyNmt4YXZtM2xyOGM4OTJ4NGZuZzk3dGNrMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h8RDGogSns9wpOJFzR/giphy.gif"
          alt="Data Analytics Visualization"
          className="gif left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        />
      </section>

      <footer className="main-footer" id="contactme">
        <p>
          &copy; {new Date().getFullYear()} Naveen Rayapudi. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
