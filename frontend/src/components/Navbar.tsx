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

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
          >
            Product Store <LocalGroceryStoreIcon />
          </Typography>

          <Tooltip title="Add Product">
            <IconButton size="large" color="inherit" aria-label="add product">
              <AddIcon />
            </IconButton>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
