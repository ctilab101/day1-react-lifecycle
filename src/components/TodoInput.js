import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@mui/styles";

import { connect } from "react-redux";
import { addTodoStart } from "../redux/Todo/TodoActions";

const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      marginTop: "10px !important",
    },
  })
);

const TodoInput = ({ addTodo }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("handleClick");
    addTodo(value);
  };

  return (
    <>
      <TextField
        fullWidth
        label="Please enter"
        id="input1"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleClick} className={classes.btn} variant="contained">
        Submit
      </Button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoStart(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
