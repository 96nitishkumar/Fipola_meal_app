import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import doneImg from "../../assets/orderSuccess/Icon.png";
import homeIcon from "../../assets/orderSuccess/Home.png";
import { orderSuccessStyles } from "./OrderSuccessStyles";
import { NavigateFunction } from "react-router-dom";
import { connect } from "react-redux";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import {
  reducerAction,
  registerNewUser,
  requestOtp,
  setPhoneNumber,
} from "../../redux/Reducer";
import { RootState } from "../../redux/Store";
interface Iprops {
  props: object;
  phoneNumber: string;

  reducerAction: (any: any) => void;
  setPhoneNumber: (number: string) => void;
  navigate: NavigateFunction;
  registerNewUser: (obj: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    mobile_number: string;
  }) => void;
}
class OrderSuccess extends Component<Iprops> {
  componentDidMount() {
    setTimeout(() => this.props.navigate("/"), 5000);
  }
  render() {
    return (
      <Box sx={orderSuccessStyles.body}>
        <Paper sx={orderSuccessStyles.paper} elevation={2}>
          <Box component={"img"} src={doneImg} alt="orderComplete" />
          <Stack direction={"column"} alignItems={"center"} gap={"15px"}>
            <Typography sx={orderSuccessStyles.congratulationsText}>
              congratulations!
            </Typography>
            <Typography sx={orderSuccessStyles.subText}>
              {" "}
              your order successfully
            </Typography>
          </Stack>
          <Box sx={orderSuccessStyles.homeIconMainBox}>
            <Box component={"img"} src={homeIcon} alt="homeIcon" />
          </Box>
        </Paper>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
});
const mapDispatchTo = {
  reducerAction,
  setPhoneNumber,
  requestOtp,
  registerNewUser,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(OrderSuccess)
);
