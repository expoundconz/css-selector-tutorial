import React from "react";
import styles from "./TileRow.module.css"

const TileRow = (props) => {
  return <div className={styles.row}>{props.children}</div>;
};

export default TileRow;
