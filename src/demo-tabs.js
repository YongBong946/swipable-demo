import React from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "./react-tabs.css";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    background: "#fff"
  },
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

class DemoTabs extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <p>
          Below is a set of swipable views that are connected to a tab control.
        </p>
        <p>
          You can see that as you swipe, the tab control updates, and vice-versa
        </p>
        <p>
          <i>enableMouseEvents</i> is also enabled here
        </p>
        <Tabs
          selectedIndex={this.state.index}
          onSelect={this.handleChangeIndex}
        >
          <TabList>
            <Tab>tab n°1</Tab>
            <Tab>tab n°2</Tab>
            <Tab>tab n°3</Tab>
          </TabList>
        </Tabs>
        <SwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
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
      </div>
    );
  }
}

export default DemoTabs;
