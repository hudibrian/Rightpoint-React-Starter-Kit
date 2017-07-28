import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import NavigationArrowDownward from "material-ui/svg-icons/navigation/arrow-downward";

const ScrollToComponentButton = props => {
  return (
    <FloatingActionButton
      href={props.callback}
      style={styles.floatingActionButton}
    >
      <NavigationArrowDownward />
    </FloatingActionButton>
  );
};

const styles = {
  floatingActionButton: {}
};

export default ScrollToComponentButton;
