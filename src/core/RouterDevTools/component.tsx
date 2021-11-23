import React, { FC } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { RSKHooks } from "react-dev-starter-pack/dist";

export const RouterDevTools: FC<{ router: any }> = ({ router }) => {
  const [isOpen, toggleOpen] = RSKHooks.useToggle(false);

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.list}>
          {router.array.map((item: string) => (
            <Link to={item} className={styles.list_item}>
              {item}
            </Link>
          ))}
        </div>
      )}
      <div className={styles.button} onClick={toggleOpen}>
        Routes
      </div>
    </div>
  );
};
