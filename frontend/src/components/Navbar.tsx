import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// icons
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AddIcon from "@mui/icons-material/Add";
import ContrastIcon from "@mui/icons-material/Contrast";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              Product Store <LocalGroceryStoreIcon />
            </Typography>
          </Link>

          <Box>
            <Tooltip title="Add Product">
              <Link
                to="/create"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="add product"
                >
                  <AddIcon />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Toggle Theme">
              <IconButton
                size="large"
                color="inherit"
                aria-label="toggle theme"
                edge="end"
              >
                <ContrastIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
