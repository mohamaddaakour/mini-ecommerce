import Navbar from "./components/Navbar";

import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
      </Routes>
    </Box>
  )
}

export default App;