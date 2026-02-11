import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import img1 from "../assets/dp.png";
import resume from "../assets/Naveen_Rayapudi.pdf";
import "../pages/ContactAndResume.css";

import TiltedCard from "../components/TiltedCard .js";
import ElectricBorder from "../components/ElectricBorder";
import "../components/ElectricBorder.css";
import "../components/TiltedCard.css";

export default function ContactAndResume() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setDimensions({
          containerHeight: "400px",
          containerWidth: "285px",
          imageHeight: "400px",
          imageWidth: "285px",
        });
      } else {
        setDimensions({
          containerHeight: "800px",
          containerWidth: "570px",
          imageHeight: "800px",
          imageWidth: "570px",
        });
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [dimensions, setDimensions] = useState({
    containerHeight: "800px",
    containerWidth: "570px",
    imageHeight: "800px",
    imageWidth: "570px",
  });

  const [result, setResult] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const response = await fetch(`${API_URL}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setResult(data?.error || "Failed to send message");
        return;
      }

      setResult(
        <span className="flex items-center align-center justify-center gap-2 text-green-400">
          <FaCheckCircle className="text-xl" />
          Message sent successfully!
        </span>,
      );

      event.target.reset();
    } catch (error) {
      setResult(
        <span className="flex items-center align-center justify-center gap-2 text-red-400">
          <FaTimesCircle className="text-xl" />
          Something went wrong. Please try again.
        </span>,
      );
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-image-column">
          <ElectricBorder
            color="#38bdf8"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 15 }}
          >
            <TiltedCard
              imageSrc={img1}
              containerHeight={dimensions.containerHeight}
              containerWidth={dimensions.containerWidth}
              imageHeight={dimensions.imageHeight}
              imageWidth={dimensions.imageWidth}
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </ElectricBorder>
        </div>

        <div className="contact-content-column">
          <h2 className="contact-heading">Contact Me</h2>

          <p className="contact-info-text">
            <strong>Feel free to reach out to me!</strong>
          </p>

          <p className="contact-info-text">
            <FaEnvelope size={24} color="#38bdf8" /> Email:{" "}
            <a
              href="mailto:rayapudinaveen777@gmail.com"
              className="contact-link"
            >
              rayapudinaveen777@gmail.com
            </a>
          </p>

          <p className="contact-info-text">
            <a
              href="https://github.com/naveen777-github"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaGithub size={26} color="#38bdf8" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rayapudi-naveen-6042a5190"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={24} color="#38bdf8" /> LinkedIn
            </a>
          </p>

          <div className="download-btn">
            <button
              type="button"
              onClick={() =>
                window.open(resume, "_blank", "noopener,noreferrer")
              }
              className="resume-download-btn"
            >
              Download Resume
            </button>
          </div>

          <form onSubmit={onSubmit} id="get-in-touch" className="contact-form">
            <div className="contact-form-title">
              <h2 className="contact-form-heading">
                <i className="contact-form-icon fas fa-paper-plane"></i> Get In
                Touch
              </h2>
            </div>

            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-input-group">
              <div className="form-input-wrapper">
                <i className="form-input-icon fas fa-comment-dots"></i>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="form-textarea"
                />
              </div>
            </div>

            <button type="submit" className="form-submit-btn">
              <i className="fas fa-paper-plane"></i> Submit Form
            </button>

            <div className="form-result align-center justify-center mt-4 text-lg">
              {result}
            </div>
          </form>
        </div>
      </div>

      <footer className="main-footer" id="contactme">
        <p>
          &copy; {new Date().getFullYear()} Naveen Rayapudi. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
