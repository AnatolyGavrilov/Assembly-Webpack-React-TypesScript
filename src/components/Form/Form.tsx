import React, { FC, useState } from "react";
import styles from "./styles.module.scss";

export const Form: FC = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className={styles.title}> Hello world!</h1>
      <div>
        <div>{count}</div>
        <button className={styles.button} onClick={increment}>
          Click
        </button>
      </div>
    </div>
  );
};
