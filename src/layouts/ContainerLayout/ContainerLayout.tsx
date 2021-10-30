import { FC, ReactNode } from "react";
import styles from "./ContainerLayout.module.scss";

interface Props {
  component: ReactNode;
}

const ContainerLayout: FC<Props> = ({ component }) => {
  return <div className={styles.container}>{component}</div>;
};

export default ContainerLayout;
