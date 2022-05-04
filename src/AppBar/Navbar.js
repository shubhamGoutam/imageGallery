import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link,useNavigate } from "react-router-dom";

const ButtonAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Navigate=useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  
  };

  const auth = localStorage.getItem("user");
   
  const logOutBtn=()=>{
    console.log("All Clear")
     localStorage.clear()
     Navigate("/signin")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button
                  component={Link}
                  to="/"
                  color="secondary"
                  startIcon={<HomeOutlinedIcon />}
                >
                  Home
                </Button>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Button
                  component={Link}
                  to="/login"
                  color="secondary"
                  startIcon={<LoginOutlinedIcon />}
                >
                  Login
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button
                  component={Link}
                  to="/signin"
                  color="secondary"
                  startIcon={<LockOutlinedIcon />}
                >
                  signin
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>

            {auth ? (
              <Button color="inherit" onClick={logOutBtn}>LogOut</Button>
            ) : (
              <Button component={Link} to="/signin" color="inherit">
                SignIn
              </Button>
            )}
            <Button
              component={Link}
              to="/login"
              color="secondary"
              startIcon={<LockOutlinedIcon />}
            >
              login
            </Button>
          </Box>
          <Typography variant="h5">ImageGallery</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
