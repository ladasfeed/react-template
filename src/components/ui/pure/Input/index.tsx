import { ReactComponent as Lock } from "./assets/Lock.svg";
import { ReactComponent as EyeClosed } from "./assets/EyeClosed.svg";
import { ReactComponent as Edit } from "./assets/Edit.svg";
import styles from "./index.module.css";
import { UIBuilders } from "react-dev-starter-pack";

export const Input = UIBuilders.InputTextBuilder({
  classNames: {
    elements: {
      input: styles.input,
      label: styles.label,
      error: styles.error,
      wrapper: styles.wrapper,
    },
    state: {
      error: styles.error_state,
    },
  },
  icons: {
    lock: Lock,
    edit: Edit,
    eyeClosed: EyeClosed,
  },
});
