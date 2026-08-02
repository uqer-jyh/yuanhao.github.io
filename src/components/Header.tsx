"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Publications", href: "/publications" },
  { name: "CV", href: "/cv" },
];

export default function Header() {
  const pathname = usePathname();
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const NavLink = ({ name, href }: { name: string; href: string }) => (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: isActive(href)
          ? theme.palette.primary.main
          : theme.palette.text.primary,
        fontWeight: isActive(href) ? 600 : 400,
        fontSize: "0.95rem",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        transition: "color 0.2s ease",
        position: "relative",
      }}
      onClick={() => setDrawerOpen(false)}
    >
      {name}
      {isActive(href) && (
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: "1rem",
            right: "1rem",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "1px",
          }}
        />
      )}
    </Link>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 64 },
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
              fontFamily: '"Playfair Display", serif',
              fontSize: "1.25rem",
              fontWeight: 600,
            }}
          >
            Yuanhao Jiang
          </Link>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
              <IconButton
                onClick={toggleTheme}
                sx={{ ml: 1, color: "text.primary" }}
                aria-label="Toggle theme"
              >
                {mode === "light" ? (
                  <DarkModeOutlinedIcon fontSize="small" />
                ) : (
                  <LightModeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                sx={{ color: "text.primary" }}
                aria-label="Toggle theme"
              >
                {mode === "light" ? (
                  <DarkModeOutlinedIcon fontSize="small" />
                ) : (
                  <LightModeOutlinedIcon fontSize="small" />
                )}
              </IconButton>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "text.primary" }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: { width: 280, bgcolor: "background.paper" } }}
          >
            <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </IconButton>
            </Box>
            <List sx={{ px: 2 }}>
              {navLinks.map((link) => (
                <ListItem key={link.name} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      py: 1.5,
                      borderRadius: 1,
                      color: isActive(link.href) ? "primary.main" : "text.primary",
                      fontWeight: isActive(link.href) ? 600 : 400,
                    }}
                  >
                    {link.name}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
