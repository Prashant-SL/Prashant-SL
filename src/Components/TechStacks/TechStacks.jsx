import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills I've Got
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon-html5-plain colored" /> */}

          <img src="./html5.png" alt="logo"></img>

          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <img src="./css3.png" alt="logo"></img>
          <span>CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon-javascript-plain colored" /> */}
          <img src="./Js.png" alt="logo"></img>
          <span>Javascript</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon-mongodb-plain colored" /> */}
          <img src="./mongodb.png" alt="logo"></img>
          <span>MongoDB</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon-express-original" /> */}
          <img src="./expressjs.png" alt="logo"></img>
          <span>Express</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i className="devicon-react-original colored" /> */}
          <img src="./react.png" alt="logo"></img>
          <span>ReactJS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i style={{ color: '#7248B6' }} className="devicon-redux-original" /> */}
          <img src="./redux.png" alt="logo"></img>
          <span>Redux</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i style={{ color: '#509941' }} className="devicon-nodejs-plain" /> */}
          <img src="./node.png" alt="logo"></img>
          <span>Node</span>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
