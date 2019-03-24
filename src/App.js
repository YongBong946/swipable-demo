import React from "react";
import SwipeableViews from "react-swipeable-views";
import DemoTabs from "./demo-tabs";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

function App() {
  return (
    <div>
      Below is a set of swipable views on their own. enableMouseEvents is
      enabled to allow swiping with a mouse
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
      <hr />
      <DemoTabs />
    </div>
  );
}

export default App;
