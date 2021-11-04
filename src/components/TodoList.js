import React from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  console.log("TodoList render");

  return (
    <List
      sx={{
        mt: 5,
        width: "100%",
        maxWidth: 360,
        bgColor: "background.paper",
      }}
    >
      {todos &&
        todos.map((item, index) => (
          <TodoItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
    </List>
  );
};

// @note map global state to scope state.
const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
