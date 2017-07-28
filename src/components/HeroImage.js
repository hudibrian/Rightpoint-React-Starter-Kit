import React, { Component } from "react";
import ScrollToComponentButton from "./ScrollToComponentButton";

class HeroImage extends Component {
  render() {
    return (
      <div style={styles.heroImageContainer}>
        <img style={styles.heroImage} src={this.props.image} />
        <h2 style={styles.heroText}>
          {this.props.text}
        </h2>
        <div style={styles.heroText}>
          <ScrollToComponentButton callback="#todoList" />
        </div>
      </div>
    );
  }
}

const styles = {
  heroImageContainer: {
    width: "100%",
    height: "100vh"
  },
  heroImage: {
    width: "100%"
  },
  heroText: {
    display: "flex",
    justifyContent: "center"
  }
};

export default HeroImage;
