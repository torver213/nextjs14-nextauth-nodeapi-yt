"use client";
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
import { checkUserRole } from "@/utils";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import { signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const publicPages = [{ title: "Articles", url: "/articles" }];

const adminPages = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Server Articles", url: "/articles" },
  { title: "Client Blog", url: "/blog" },
  { title: "Node API Posts", url: "/posts" },
  { title: "All Users", url: "/users" },
];

const adminNavItems = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Profile", url: "/profile" },
  { title: "Create Post", url: "/create-post" },
  { title: "Logout", url: "/api/auth/signout" },
];

const userPages = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Server Articles", url: "/articles" },
  { title: "Client Blog", url: "/blog" },
  { title: "Node API Posts", url: "/posts" },
];

const userMenuItems = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Profile", url: "/profile" },
  { title: "Logout", url: "/api/auth/signout" },
];

function SiteNavbar({ session }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname()


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


  const checkRole = checkUserRole(session?.user?.role);

  const pages = checkRole.isAdminRole
    ? adminPages
    : checkRole.isUserRole
    ? userPages
    : publicPages;

  const settings = checkRole.isAdminRole
    ? adminNavItems
    : checkRole.isUserRole
    ? userMenuItems
    : [];
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            passHref
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
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
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Button sx={{...((page.url === pathname) && {backgroundColor: 'rgba(0,0,0,0.1)'})}} LinkComponent={Link} passHref href={page.url}>
                    {page.title}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            passHref
            href="/"
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                LinkComponent={Link}
                passHref
                href={page.url}
                sx={{color: "inherit", ...((page.url === pathname) && {backgroundColor: 'rgba(0,0,0,0.1)'})}}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {!session ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Sign in">
                <IconButton onClick={() => signIn()} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp">
                    <Person />
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={session?.user?.name} src={session?.user?.avatar} />
                </IconButton>
              </Tooltip>
              <Menu
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
                {settings.map((setting) => (
                  <MenuItem key={setting.title} onClick={() => handleCloseUserMenu()}>
                    <Button size="small" LinkComponent={Link} passHref href={setting.url} >{setting.title}</Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SiteNavbar;
