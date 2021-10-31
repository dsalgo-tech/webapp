import styles from "./Footer.module.scss";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className={clsx(styles.container)}>
      <p className={clsx(styles.h2)}>This is Footer.tsx</p>
    </div>
  );
};

export default Footer;
