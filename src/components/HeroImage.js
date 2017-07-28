import React, { Component } from "react";

const HeroImage = props => {
  return (
    <div style={styles.heroImage}>
      <img style={{ width: "100%" }} src={props.image} />
      <h2 style={styles.heroText}>
        {props.text}
      </h2>
    </div>
  );
};

const styles = {
  heroImage: {
    width: "100%",
    height: "100vh"
  },
  heroText: {
    display: "flex",
    justifyContent: "center"
  }
};

export default HeroImage;
