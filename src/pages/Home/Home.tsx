import { FC } from "react";
import styles from "./Home.module.scss";

interface Props {}

const Home: FC<Props> = () => {
  return <div className={styles.container}>This is Home.tsx</div>;
};

export default Home;
