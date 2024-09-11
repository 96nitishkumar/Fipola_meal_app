import React, { Component } from "react";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { Box, Typography } from "@mui/material";
import underconstructionImg from "../../assets/pageUnderConstruction/page-under-construction.jpg";
import { NavigateFunction } from "react-router-dom";
import { pageunderConstructionStyles } from "./RedirectingPageStyles";

interface Iprops {
  navigate: NavigateFunction;
}

class PageUnderConstruction extends Component<Iprops> {
  navigate = () => {
    this.props.navigate("/home");
  };
  componentDidMount(): void {
    setTimeout(() => this.props.navigate("/home"), 7000);
  }
  render() {
    return (
      <Box sx={pageunderConstructionStyles.mainBody}>
        <Typography
          sx={pageunderConstructionStyles.HomeText}
          onClick={this.navigate}
          data-testid="homeButton"
        >
          Home
        </Typography>
        <Box
          component={"img"}
          src={underconstructionImg}
          alt="page under construction "
        />
      </Box>
    );
  }
}
export default WithRoutingHoc(PageUnderConstruction);
