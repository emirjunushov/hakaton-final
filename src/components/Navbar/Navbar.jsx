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
import "./Navbar.css";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Test", link: "/test", id: 2 },
  { name: "Second test", link: "/second-test", id: 3 },
];
const settings = ["Home", "Test", "Account", "Second test", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar className="nav" position="static">
      <Container className="nav__container" maxWidth="xl">
        <Toolbar className="nav__tool-bar" disableGutters>
          <AdbIcon
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
            LOGO
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
                <Link key={index} to={page.link} className="nav__linkMain">
                  <MenuItem
                    className="nav__burger-adaptiv"
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon
            className="nav__some-icon-adaptiv"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
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
            LOGO
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
              {settings.map((setting, index) => (
                <Link className="nav__link-oun" key={index} to={setting.link}>
                  <MenuItem
                    className="nav-menu_list"
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography className="nav-menu_item" textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
