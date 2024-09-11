import { Box, Tab, Tabs } from "@mui/material";
import React, { Component } from "react";
import { styles } from "./TabStyles";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import { reducerAction, setCurrentTab } from "../../redux/Reducer";
import { RootState } from "../../redux/Store";
import { NavigateFunction } from "react-router-dom";

interface Iprops {
  count: [];
  phoneNumber: string;
  props: Object;
  navigate: NavigateFunction;
  currentActiveTab: string;
  setCurrentTab: (Tab: string) => void;
}

class TabComponent extends Component<Iprops, { value: string }> {
  constructor(props: Iprops) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event: React.SyntheticEvent, newValue: string) => {
    this.setState({ value: newValue });
    switch (newValue) {
      case "home":
        this.props.navigate("/home");
        this.props.setCurrentTab("home");

        break;
      case "aboutUs":
        this.props.navigate("/aboutUs");
        this.props.setCurrentTab("aboutUs");
        break;
      case "contact":
        this.props.navigate("/message");
        this.props.setCurrentTab("contact");
        break;
      case "cart":
        this.props.navigate("/cartPage");
        this.props.setCurrentTab("cart");
        break;
    }
  };

  render() {
    return (
      <Box sx={styles.container}>
        <Tabs
          value={this.props.currentActiveTab}
          onChange={this.handleChange}
          variant="fullWidth"
          centered
          sx={styles.tabsList}
        >
          <Tab value="home" label="Home" data-testid="home" />
          <Tab value="aboutUs" label="About Us" data-testid="aboutUs" />
          <Tab value="contact" label="Contact Us" data-testid="contact" />
          <Tab value="cart" label="Cart" data-testid="cart" />
        </Tabs>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
  currentActiveTab: state.state.currentActiveTab,
});
const mapDispatchTo = {
  reducerAction,
  setCurrentTab,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(TabComponent)
);
