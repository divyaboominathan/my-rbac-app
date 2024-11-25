import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import routes from "./common/routes";

const  App = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Header />
      <Box
        sx={{
          marginTop: "20px",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          padding: "10px",
        }}
      >
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
