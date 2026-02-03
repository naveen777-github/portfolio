import { desc } from "framer-motion/client";
import { useState } from "react";
import reactIcon from "../assets/react-svgrepo-com.svg";
import pythonIcon from "../assets/python-svgrepo-com.svg";
import pytorchIcon from "../assets/pytorch-svgrepo-com.svg";
import javaIcon from "../assets/java-svgrepo-com.svg";
import sqlIcon from "../assets/sql-svgrepo-com.svg";
import jsIcon from "../assets/js-svgrepo-com.svg";
import htmlIcon from "../assets/html-5-svgrepo-com.svg";
import cssIcon from "../assets/css-3-svgrepo-com.svg";
import netlifyIcon from "../assets/netlify-svgrepo-com.svg";
import streamlitIcon from "../assets/Streamlit.png";
import mavenIcon from "../assets/maven-svgrepo-com.svg";
import junitIcon from "../assets/Junit.svg";
import TensflowIcon from "../assets/tensorflow-svgrepo-com.svg";
import NumpyIcon from "../assets/numpy-svgrepo-com.svg";
import versionControlGif from "../assets/Version control.gif";
import { motion } from "framer-motion";

const skillIcons = {
  Python: pythonIcon,
  PyTorch: pytorchIcon,
  Java: javaIcon,
  React: reactIcon,
  SQL: sqlIcon,
  JavaScript: jsIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
  Netlify: netlifyIcon,
  streamlit: streamlitIcon,
  Maven: mavenIcon,
  JUnit: junitIcon,
  Tensorflow: TensflowIcon,
  Numpy: NumpyIcon,
};

const projects = [
  {
    title: "Machine Translation with Transformers",
    desc: "Developed an end-to-end custom transformer model for English-to-French translation and conducted a performance comparison with a pretrained model.",
    stack: ["Python", "PyTorch", "NLP", "Numpy"],
    github:
      "https://github.com/naveen777-github/Machine-Translation-with-Transformers",
    demo: "#",
    category: "ML",
  },
  {
    title: "Machine-Generated Text Detection",
    desc: "Designed and implemented deep learning models such as Uni-LSTM, Bi-LSTM, and RoBERTa to distinguish machine-generated text from human-written text.",
    stack: ["Python", "PyTorch", "NLP", "Deep Learning"],
    github:
      "https://github.com/naveen777-github/Machine-Generated-Text-Detection",
    demo: "#",
    category: "ML",
  },
  {
    title: "Stock Market Time-Series Analysis",
    desc: "Built an LSTM-based time series model on Yahoo Finance data and deployed a Streamlit web application for stock price prediction.",
    stack: [
      "Python",
      "Pandas",
      "SQL",
      "Machine Learning",
      "streamlit",
      "Tensorflow",
    ],
    github: "https://github.com/naveen777-github/Stock-Market-Price-Prediction",
    demo: "#",
    category: "Software",
  },
  {
    title: "Sentimental Data Analysis",
    desc: "Performed text data profiling and quality analysis on reviews dataset, implemented sentimental classification using Multinomial Naive Bayes.",
    stack: ["Python", "NLP", "Scikit-learn", "Data Analysis"],
    github:
      "https://github.com/naveen777-github/Sentimental_Data_Analysis_Using_Multinomial_Naive_Bayes",
    demo: "#",
    category: "ML",
  },

  {
    title: "Distributed Health Care Management System",
    desc: "Built a distributed health care system with regional servers (MTL, QUE, SHE) using SOAP web services and UDP-based inter-server communication for consistency.",
    stack: ["Java", "SOAP", "UDP", "Distributed Systems"],
    github:
      "https://github.com/naveen777-github/-Distributed-Health-Care-Management-System-Implementation-Using-Web-Service",
    demo: "#", // optional (if you have a demo link)
    category: "Software",
  },
  {
    title: "Warzone Command-Line Strategy Game",
    stack: ["Java", "OOP", "Design Patterns", "Maven", "JUnit"],
    desc: "Developed a Java command-line strategy game using OOP principles and design patterns, implemented robust JUnit testing, Maven-based project management, and JavaDoc documentation to improve code readability and maintainability.",
    github: "https://github.com/shanmukhatummala/game-engine",
    demo: "#",
    category: "Software",
  },
  {
    title: "Today I Learned Application",
    desc: "Built a full-stack app for posting daily facts and voting; integrated Supabase for auth + real-time data and deployed the frontend on Netlify.",
    stack: ["React", "JavaScript", "Supabase", "HTML", "CSS", "Netlify"],
    github: "https://github.com/naveen777-github/Today-I-Learned-Application",
    demo: "https://todayilearned8888.netlify.app/",
    category: "Software",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%] items-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src={versionControlGif} alt="Version control animation" />

        <div className="self-start justify-self-center">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-left mt-4">PROJECTS</h1>
          </div>

          <div className="mt-3 rounded-2xl p-6 sm:p-8">
            <p className="max-w-3xl text-slate-300 leading-relaxed">
              Projects I’ve worked on, showcasing my experience in{" "}
              <span className="text-cyan-300">software engineering</span>,
              <span className="text-cyan-300"> machine learning</span>, and
              <span className="text-cyan-300">
                {" "}
                data-driven application development
              </span>
              . Each project highlights my ability to design, implement, and
              evaluate scalable solutions using modern tools and best practices.
            </p>

            <div className="mt-6 h-px w-full " />

            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>
                  Designed and implemented end-to-end systems using Java,
                  Python, and React
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>
                  Built and evaluated machine learning models using PyTorch and
                  TensorFlow
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>
                  Applied software engineering principles such as modular
                  design, testing, and version control
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-cyan-300">•</span>
                <span>
                  Deployed applications using cloud and CI/CD-friendly workflows
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Filter buttons */}

      <div className="flex mt-[30px] justify-center sm:justify-center lg:justify-end">
        <button
          onClick={() => setFilter("All")}
          className={`rounded-full px-4 py-2 text-sm border ${
            filter === "All"
              ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
              : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("ML")}
          className={`rounded-full px-4 py-2 text-sm border ${
            filter === "ML"
              ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
              : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
          }`}
        >
          ML
        </button>

        <button
          onClick={() => setFilter("Software")}
          className={`rounded-full px-4 py-2 text-sm border ${
            filter === "Software"
              ? "bg-cyan-400/20 text-cyan-200 border-cyan-400/30"
              : "bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-400/30 hover:text-cyan-200"
          }`}
        >
          Software
        </button>
      </div>

      {/* Grid */}
      <motion.div
        className=" mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="group  rounded-2xl border border-slate-800/10 bg-slate-900/100 p-5 shadow-sm transition
                         hover:-translate-x-1 hover:border-cyan-400/35 hover:bg-slate-900/70 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold group-hover:text-cyan-200">
              {p.title}
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-300">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              {p.stack?.map((skill) =>
                skillIcons[skill] ? (
                  <img
                    key={skill}
                    src={skillIcons[skill]}
                    alt={skill}
                    title={skill}
                    className="h-8 w-8"
                  />
                ) : null,
              )}

              <button
                type="button"
                onClick={() =>
                  window.open(p.github, "_blank", "noopener,noreferrer")
                }
                className="github-btn  mt-3 px-3 py-1 text-sm font-medium text-slate-200 bg-cyan-500/25 rounded-md hover:bg-slate-800/70 transition"
              >
                GitHub
              </button>
            </div>
          </article>
        ))}
      </motion.div>

      <footer className="main-footer" id="contactme">
        <p>
          &copy; {new Date().getFullYear()} Naveen Rayapudi. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
