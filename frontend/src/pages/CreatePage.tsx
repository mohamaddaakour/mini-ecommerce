import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";

import type { ChangeEvent } from "react";

import type { CreateState } from "../types";

function CreatePage() {
  const [data, setData] = useState<CreateState>({
    name: "",
    price: "",
    image: "",
  });

  // handle the change of inputs and change the state value
  function handleInputs(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setData((preview) => {
      return { ...preview, [name]: value };
    });
  }

  // handle the submit
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!data.name || !data.price || !data.image) {
      alert("All fields are required");
      return;
    }

    console.log(data);
  }

  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: "rgb(137, 207, 240)",
        marginTop: "125px",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h3" gutterBottom sx={{ mt: "12px" }}>
        Create New Product
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={data.name}
        onChange={handleInputs}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        label="Price"
        variant="outlined"
        name="price"
        value={data.price}
        onChange={handleInputs}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        label="Image"
        variant="outlined"
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
