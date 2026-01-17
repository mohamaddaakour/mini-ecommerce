import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import type { CreateState, Product } from "../types";
import useProductStore from "../store/productStore";

function CreatePage() {
  const [data, setData] = useState<CreateState>({
    name: "",
    price: "",
    image: "",
  });

  const createProduct = useProductStore((state) => state.createProduct);

  function handleInputs(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!data.name || !data.price || !data.image) {
      alert("All fields are required");
      return;
    }

    const newProduct: Product = {
      name: data.name,
      image: data.image,
      price: data.price,
    };

    const { success, message } = await createProduct(newProduct);

    alert(message);

    if (success) {
      setData({ name: "", price: "", image: "" });
    }
  }

  return (
    <Container
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: "rgb(137, 207, 240)",
        marginTop: "125px",
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ mt: "12px" }}>
        Create New Product
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={data.name}
        onChange={handleInputs}
        sx={{ backgroundColor: "white" }}
      />

      <TextField
        label="Price"
        name="price"
        value={data.price}
        onChange={handleInputs}
        sx={{ backgroundColor: "white" }}
      />

      <TextField
        label="Image"
        name="image"
        value={data.image}
        onChange={handleInputs}
        sx={{ backgroundColor: "white" }}
      />

      <Button type="submit" variant="contained">
        Create Product
      </Button>
    </Container>
  );
}

export default CreatePage;
