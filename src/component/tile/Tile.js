import React from "react";
import styles from './Tile.module.css';

const Tile = (props) => {
  return (
    <div className={props.oneColumn ? styles.oneColumn : styles.column}>
      <h2>Column</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
        amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
        elementum magna tristique. Quisque vehicula, risus eget aliquam
        placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
        Praesent scelerisque tortor sed accumsan convallis.
      </p>
    </div>
  );
};

export default Tile;
