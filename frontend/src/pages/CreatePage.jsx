import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Stack,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const { createProduct } = useProductStore();

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    setSnackbar({
      open: true,
      message,
      severity: success ? "success" : "error",
    });
    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxWidth="sm">
      <Stack spacing={4} sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          fontWeight="bold"
        >
          Create New Product
        </Typography>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleAddProduct}
              sx={{ mt: 2 }}
            >
              Add Product
            </Button>
          </Stack>
        </Paper>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreatePage;