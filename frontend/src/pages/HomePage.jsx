import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{
            background: "linear-gradient(to right, #00bcd4, #2196f3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Current Products 🚀
        </Typography>
        <Grid container spacing={5}>
          {products.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        {products.length === 0 && (
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            color="text.secondary"
          >
            No products found 😢{" "}
            <Box
              component={Link}
              to="/create"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Create a product
            </Box>
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default HomePage;