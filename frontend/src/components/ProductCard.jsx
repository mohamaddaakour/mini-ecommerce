import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Modal,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const { deleteProduct, updateProduct } = useProductStore();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    setSnackbar({
      open: true,
      message,
      severity: success ? "success" : "error",
    });
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    handleClose();
    setSnackbar({
      open: true,
      message: success ? "Product updated successfully" : message,
      severity: success ? "success" : "error",
    });
  };

  return (
    <>
      <Card
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="192"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            ${product.price}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="primary" onClick={handleOpen}>
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Update Product
          </Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Product Name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Image URL"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />
          </Stack>
          <Box sx={{ mt: 3, display: "flex", gap: 1, justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

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
    </>
  );
};

export default ProductCard;