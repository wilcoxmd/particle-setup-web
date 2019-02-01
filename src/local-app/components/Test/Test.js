import React from "react";
import styles from "./Test.module.css";

export default class Test extends React.Component {
  render() {
    return (
      <div className={styles.testdiv}>
        <p className={styles.text}>TOKENPLACEHOLDER</p>
      </div>
    );
  }
}
