import Head from "next/head";
import styles from "../styles/About.module.css";
const about = (props) => {
  return (
    <div className={styles.backgroundRed}>
      <head>
        <title>About</title>
      </head>
      <h1>About</h1>
      <p>Paragraful acesta este adaugat din github desktop</p>
      <p>Sparky e un bulangiu</p>
    </div>
  );
};

about.propTypes = {};

export default about;
