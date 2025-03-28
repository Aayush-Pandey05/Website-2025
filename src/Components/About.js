import React from "react";
import { useState, useEffect } from "react";
import "./css/about.css";
// import { swarmBackground } from 'threejs-toys'

export default function About() {
  const [time, setTime] = useState({});
  useEffect(() => {
    let date = new Date("May 18, 2025 09:00:00").getTime();
    setInterval(function () {
      let now = new Date().getTime();
      let dist = date - now;
      let time = {
        days: Math.floor(dist / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((dist % (1000 * 60)) / 1000),
      };
      setTime(time);
    }, 1000);
  }, []);

  return (
    <div className="text-white s-two" data-section-name={"s-two"} id={"About"}>
      <div className="acontent">
        <div className="aleft glass">
          <div className="clgabout">
            <h1>About Aventus 3.0</h1>
            <p>
              {" "}
              a 24-hour hackathon hosted by Department of Artificial
              Intelligence & Machine Learning, Dayananda Sagar College of
              Engineering.
            </p>
            <p>
              Set to take place on the 10th and 11th of May, this offline event
              aims to bring together a diverse group of college students to
              create groundbreaking solutions and drive progress in technology
              and society.
            </p>
            <p>
              With four exciting tracks to choose from—AI & ML, IoT, Cyber
              Security and Open innovation will have the opportunity to
              collaborate, learn, and showcase their skills in front of esteemed
              judges.
            </p>
            <p>
              Join us at Aventus as we foster innovation, nurture talent, and
              redefine the future of technology together. Register now and be a
              part of this incredible journey!
            </p>
            <p>
              <strong>
              Build a better future with Aventus, Where Technology Flourishes.
              </strong>
            </p>
          </div>
        </div>

        <div className="aright">
          <img src="aventus.gif" alt="" className="" />
        </div>
      </div>
      {/* Set the time as the following instead of 0 for days time.days, for hours time.hours, for minutes time.minutes, and for seconds time.seconds. */}
      <div className="timecount">
        <div className="t">Time left for awesomeness</div>
        <div className="time">
          <div className="days cele glass">
            <p className="celep">{time.days || 0}</p>
            <span className="celep">Days</span>
          </div>
          <div className="hours cele glass">
            <p className="celep">{time.hours || 0}</p>
            <span className="celep">Hours</span>
          </div>
          <div className="minutes cele glass">
            <p className="celep">{time.minutes || 0}</p>
            <span className="celep">Minutes</span>
          </div>
          <div className="seconds cele glass">
            <p className="celep">{time.seconds || 0}</p>
            <span className="celep">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
