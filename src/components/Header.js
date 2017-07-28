import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import TodoTextField from "./TodoTextField";

const Header = props => {
  const { addTodo } = props.actions;
  return (
    <MuiThemeProvider>
      <div>
        <TodoTextField onSubmit={text => addTodo(text)} />
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
