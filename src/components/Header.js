import React, { Component } from "react";

import TodoTextField from "./TodoTextField";

const Header = Props => {
  const { addTodo } = Props.actions;
  return (
    <div>
      <TodoTextField onSubmit={text => addTodo(text)} />
    </div>
  );
};

export default Header;
