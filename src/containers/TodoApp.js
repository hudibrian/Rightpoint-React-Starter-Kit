import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { MuiThemeProvider } from "material-ui/styles";
import * as todoActions from "../actions/todos";
import Paper from "material-ui/Paper";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import TodoList from "../components/TodoList";

const TodoApp = ({ todos, actions }) =>
  <MuiThemeProvider>
    <div style={styles.container}>
      <HeroImage
        image="../../imgs/Rightpoint.png"
        text="Rightpoint React Starter Kit Demo"
      />
      <Paper zDepth={2} style={styles.paper}>
        <Header actions={actions} />
        <TodoList todos={todos} actions={actions} />
      </Paper>
    </div>
  </MuiThemeProvider>;

const styles = {
  container: {
    marginTop: 20,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  paper: {
    padding: 20,
    width: "50%"
  }
};

const mapStateToProps = ({ todos }) => ({
  todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
