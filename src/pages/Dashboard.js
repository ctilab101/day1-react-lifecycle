import React from "react";
import Box from "@mui/material/Box";

import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const Dashboard = () => {
  return (
    <Box
      sx={{
        p: 20,
        pt: 5,
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TodoInput />
      <TodoList />
    </Box>
  );
};

export default Dashboard;
