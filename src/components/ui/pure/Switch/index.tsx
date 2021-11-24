import styles from "./index.module.css";
import { UIBuilders } from "react-dev-starter-pack/dist";

export const Switch = UIBuilders.SwitchBuilder({
  classNames: {
    input: styles.input,
    circle: styles.circle,
    circleContainer: styles.circleContainer,
    container: styles.container,
  },
});
