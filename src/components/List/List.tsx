import React, { FC, useState } from "react";
import styles from "./styles.module.scss";

export const List: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Title</h1>
      <ul>
        <li>TestContent</li>
        <li>TestContent</li>
        <li>TestContent</li>
      </ul>
    </div>
  );
};
