import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = ["about", "projects", "contact"];

const ResponsiveNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ marginTop: "20px", boxShadow: "none" }}
    >
      <Container maxWidth="xl" sx={{ mx: 0, px: 0 }} disableGutters={true}>
        <Toolbar disableGutters>
          <Button
            sx={{
              my: 2,
              color: "black",
              display: { xs: "none", md: "flex" },
              ":hover": {
                color: "#712B75",
              },
            }}
          >
            <Link href="/" passHref={true}>
              <Typography variant="h4" noWrap component="div">
                MC
              </Typography>
            </Link>
          </Button>

          <Button
            sx={{
              my: 2,
              color: "black",
              display: { xs: "flex", md: "none" },
              ":hover": {
                color: "#712B75",
              },
            }}
          >
            <Link href="/" passHref={true}>
              <Typography variant="h4" noWrap component="div">
                MC
              </Typography>
            </Link>
          </Button>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                ":hover": {
                  color: "#712B75",
                },
              }}
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
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    ":hover": {
                      color: "#712B75",
                    },
                  }}
                >
                  <Link href={`/${page}`} passHref={true}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <Button
                size="large"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  ":hover": {
                    color: "#712B75",
                  },
                }}
              >
                <Link href={`/${page}`} passHref={true}>
                  <Typography variant="h5">
                    <strong>{page}</strong>
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;
