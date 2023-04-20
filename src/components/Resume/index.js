import React from "react";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!<br/>
               
              <a href="https://lemming97.github.io/Weather_Dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
              </p>
            </div>
          </div>
        </div>
      </section>
     <section>
      </section>
    </div>
  );
}

export default Resume;
