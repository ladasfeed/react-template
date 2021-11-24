import { UIBuilders } from "react-dev-starter-pack/dist";
import { Icons } from "assets/icons";
import styles from "./index.module.css";

export const CheckInput = UIBuilders.CheckInputBuilder({
  classNames: {
    input: styles.input,
  },
  icons: {
    checkbox: {
      checked: Icons.ui.CheckBoxChecked,
      unchecked: Icons.ui.CheckBoxUnchecked,
    },
    radio: {
      checked: Icons.ui.RadioChecked,
      unchecked: Icons.ui.RadioUnchecked,
    },
  },
});
