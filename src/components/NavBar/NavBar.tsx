import { useState } from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import expand from "../../assets/images/expand.svg";
import profileImg from "../../assets/images/profile-img.jpg";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="dsalgo.tech" />
        <div className={styles.textContainer}>
          <p className={clsx(styles.fontWeightMedium)}>dsalgo.</p>
          <p className={clsx(styles.fontWeightLight)}>tech</p>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <NavLink
          exact
          className={clsx(styles.pg)}
          to="/"
          activeClassName={clsx(styles.activeLink)}
        >
          Home
        </NavLink>
        <NavLink
          className={clsx(styles.pg)}
          to="/questions"
          activeClassName={clsx(styles.activeLink)}
        >
          Questions
        </NavLink>
        <NavLink
          exact
          className={clsx(styles.pg)}
          to="/contact"
          activeClassName={clsx(styles.activeLink)}
        >
          Contact
        </NavLink>
        <NavLink
          exact
          className={clsx(styles.pg)}
          to="/about"
          activeClassName={clsx(styles.activeLink)}
        >
          About
        </NavLink>
      </div>
      <div className={styles.accountInfoContainer}>
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="user" />
        </div>
        <MUIDropDown />
      </div>
    </div>
  );
};

const MUIDropDown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={expand} alt="" />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default NavBar;
