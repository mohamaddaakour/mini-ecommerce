import { AppBar, Container, Toolbar, Typography, IconButton, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            minHeight: 64,
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              fontSize: { xs: 22, sm: 28 },
              fontWeight: "bold",
              textTransform: "uppercase",
              textAlign: "center",
              background: "linear-gradient(to right, #00bcd4, #2196f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
            }}
          >
            Product Store 🛒
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton component={Link} to="/create" color="primary">
              <AddBoxIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon sx={{ fontSize: 20 }} />
              ) : (
                <Brightness4Icon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;