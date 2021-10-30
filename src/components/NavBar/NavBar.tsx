import { useState } from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
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
          <p className={styles.fontMedium}>dsalgo.</p>
          <p className={styles.fontLight}>tech</p>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/questions">Questions</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
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
