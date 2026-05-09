import profile from "./assets/profile.jpeg";
import emailjs from "@emailjs/browser";

function App() {
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_puxymtv",
      "template_g8k0tkk",
      e.target,
      "-aPgOY86hhFeNIPdW"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully 🚀");
      },
      (error) => {
        console.log(error.text);
        alert(error.text);
      }
    )

  e.target.reset();
};
  return (
    

    <div

      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <img
          src={profile}
          alt="profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3b82f6",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "70px",
            color: "#3b82f6",
            marginBottom: "10px",
          }}
        >
          SUMIT TIWARI
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Data Science & AI/ML Enthusiast
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "35px",
            color: "#cbd5e1",
            fontSize: "20px",
          }}
        >
          Passionate about Machine Learning, Data Analytics,
          SQL, Power BI, and building intelligent AI-driven solutions.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "15px 35px",
              background: "#3b82f6",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
            }}
          >
            View Projects
          </a>

          <a
            href="https://github.com/sumit312-cpu"
            target="_blank"
            style={{
              padding: "15px 35px",
              border: "2px solid #3b82f6",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              padding: "15px 35px",
              border: "2px solid #3b82f6",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </div>
      </div>

      {/* SKILLS SECTION */}

      <div
        style={{
          padding: "80px 20px",
          background: "#111",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            color: "#3b82f6",
            marginBottom: "40px",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {[
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Power BI",
            "Scikit-learn",
            "Data Analytics",
            "Deep Learning",
            "GitHub",
            "Generative AI",
            "Agentic AI"
          ].map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1e293b",
                padding: "15px 25px",
                borderRadius: "12px",
                fontSize: "18px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}

      <div
        id="projects"
        style={{
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            color: "#3b82f6",
            marginBottom: "50px",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {/* PROJECT CARD */}

          <a
            href="https://github.com/sumit312-cpu/OIBSIP/tree/main/Task3_Spam_predictor"
            target="_blank"
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Spam Email Detection
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "30px",
              }}
            >
              Developed a spam email classifier using NLP and
              machine learning techniques.
            </p>
          </a>

          {/* PROJECT CARD */}

          <a
            href="https://github.com/sumit312-cpu/OIBSIP/tree/main/Task2_car_price_predictor"
            target="_blank"
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Car Price Prediction
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "30px",
              }}
            >
              Regression-based ML model for predicting car prices.
            </p>
          </a>

          {/* PROJECT CARD */}

          <a
            href="https://github.com/sumit312-cpu/OIBSIP/tree/main/Task1_Iris_Classification"
            target="_blank"
            style={{
              background: "#111",
              padding: "30px",
              borderRadius: "20px",
              textDecoration: "none",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              Iris Flower Classification
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "30px",
              }}
            >
              Machine learning model for predicting iris flower species
              using classification algorithms.
            </p>
          </a>
        </div>
      </div>

      {/* CONTACT SECTION */}

      <div
        style={{
          padding: "80px 20px",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            color: "#3b82f6",
            marginBottom: "20px",
          }}
        >
          Contact Me
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Feel free to connect with me 🚀
        </p>
        <p
          style={{
              color: "#3b82f6",
              marginBottom: "20px",
              fontSize: "18px",
          }}
        >
          📧 sumittiwari62642004@gmail.com
        </p>
        <form
          onSubmit={sendEmail}
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "15px",
              background: "#3b82f6",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <a
            href="https://github.com/sumit312-cpu"
            target="_blank"
            style={{
              color: "#3b82f6",
              marginRight: "20px",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
