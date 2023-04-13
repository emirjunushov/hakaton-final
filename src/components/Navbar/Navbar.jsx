import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import logoPng from "../../../src/IMAGES/logoN.png";

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "Test", link: "/test", id: 2 },
  { name: "Test", link: "/second-test", id: 3 },
  { name: "О нас", link: "/about", id: 5 },
];

const pages2 = [{ name: "Зарегистрироваться", link: "/register", id: 4 }];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { user, handleLogout } = useAuth();
  return (
    <AppBar className="nav" position="static">
      <Container className="nav__container" maxWidth="xl">
        <Toolbar className="nav__tool-bar" disableGutters>
          <img
            width={50}
            src={logoPng}
            className="nav__icon"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            className="nav__logo"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BATIR
          </Typography>

          <Box
            className="nav__block-adaptiv"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              className="nav__btn-adaptiv"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="nav__block_links-adaptiv"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link key={index} to={page.link} className="nav__linkMain1">
                  <MenuItem
                    className="nav__burger-adaptiv"
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography className="nav__text" textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            className="nav__logo-adaptiv"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BATIR
          </Typography>
          <Box
            className="nav__some-BOX"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <Link key={index} to={page.link} className="nav__linkMain">
                <Button
                  className="nav__btn-some"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box className="login__nav">
            {pages2.map((page, index) => (
              <Link key={index} to={page.link} className="nav__linkMain">
                {user ? (
                  ""
                ) : (
                  <button
                    className="nav__btn-some"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </button>
                )}
              </Link>
            ))}
          </Box>

          <Box className="nav__settings-menu" sx={{ flexGrow: 0 }}>
            <Tooltip className="nav__menu_block" title="Open settings">
              <IconButton
                className="nav-menu__btn"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  className="nav-avatar"
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>

            <Menu
              className="nav__menu"
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* ====== */}

              {user ? (
                ""
              ) : (
                <MenuItem className="login_btn-in-nav-menu">
                  <Button
                    className="btnOfNavMenu"
                    variant="outlined"
                    onClick={() => navigate("/register")}
                  >
                    Зарегистрироваться
                  </Button>
                </MenuItem>
              )}

              <MenuItem>{user ? `${user}` : "pleas logIn"}</MenuItem>
              <MenuItem>
                {user ? (
                  <Button className="btnOfNavMenu" onClick={handleLogout}>
                    <LogoutIcon />
                    LogOut
                  </Button>
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
