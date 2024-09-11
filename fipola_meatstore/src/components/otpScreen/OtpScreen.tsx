import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { Component, createRef } from "react";
import otpImage from "../../assets/otpScreen/Icon.png";
import { loginStyles } from "../loginAndRegister/LoginStyles";
import { otpStyles } from "./OtpScreenStyles";
import { connect } from "react-redux";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { useSelector } from "react-redux";

import {
  reducerAction,
  requestOtp,
  setPhoneNumber,
  validateOTP,
} from "../../redux/Reducer";
import { RootState } from "../../redux/Store";
import { NavigateFunction, useLocation } from "react-router-dom";
import { colorPallete } from "../../environment/ColorsAndStyles";
interface Iprops {
  props: object;
  phoneNumber: string;
  data: [];
  isOtpReceived: boolean;
  reducerAction: (any: any) => void;
  setPhoneNumber: (number: string) => void;
  requestOtp: (number: string) => object;
  navigate: NavigateFunction;
  validateOTP: (obj: { mobile: string; otp: string }) => void;
  location: ReturnType<typeof useLocation>;
}

class OtpScreen extends Component<Iprops> {
  state = { otp: "" };
  inputRefs = Array.from({ length: 4 }, () => createRef<HTMLInputElement>());

  handlekeyUp = (
    event: KeyboardEvent,
    input: HTMLInputElement,
    index: number
  ) => {
    const inputs = this.inputRefs.map(
      (ref) => ref.current
    ) as HTMLInputElement[];
    const prevInput = inputs[index - 1];
    const nextInput = inputs[index + 1];
    if (nextInput && nextInput.hasAttribute("disabled") && input.value != "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (event.key === "Backspace") {
      inputs.forEach((input, idx) => {
        if (index <= idx && prevInput) {
          input.setAttribute("disabled", "true");
          input.value = "";
          prevInput.focus();
        }
      });
    }

    this.setState({ otp: inputs.reduce((acc, curr) => acc + curr.value, "") });
  };

  validateOTP2 = () => {
  this.props.validateOTP({
      mobile: "7903378421",
      otp: this.state.otp,
    });
    
  };

  componentDidMount(): void {
    const inputs = this.inputRefs.map(
      (ref) => ref.current
    ) as HTMLInputElement[];
    inputs.forEach((input, index) => {
      input.addEventListener("keyup", (event) =>
        this.handlekeyUp(event as KeyboardEvent, input, index)
      );
    });
    window.addEventListener("load", () => {
      inputs[0].focus();
    });
  }
  componentWillUnmount(): void {
    const inputs = this.inputRefs.map(
      (ref) => ref.current
    ) as HTMLInputElement[];
    inputs.forEach((input, index) => {
      input.removeEventListener("keyup", (event) =>
        this.handlekeyUp(event as KeyboardEvent, input, index)
      );
    });
    window.removeEventListener("load", () => {
      inputs[0].focus();
    });
  }
  render() {
    console.log(this.props.data);
    
    console.log(this.props.location, "jhjhjh here is the location");
    return (
      <Box sx={otpStyles.body}>
        <Box sx={otpStyles.imageAndOthereTxtContainer}>
          <Box
            component={"img"}
            width={"130px"}
            height={"130px"}
            src={otpImage}
            alt="otpImg"
          />

          <Typography sx={otpStyles.verificationText}>
            OTP Verification
          </Typography>
          <Typography sx={otpStyles.enterOtpText}>
            Enter the OTP sent to
          </Typography>
          <Typography sx={otpStyles.phoneNumber}>{this.props.phoneNumber}</Typography>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"15px"}
          alignItems={"center"}
        >
          <TextField
            inputRef={this.inputRefs[0]}
            data-testid="inputField11"
            placeholder=""
            sx={otpStyles.mobileNumberInput}
            inputProps={{
              maxLength: 1,
              "data-testid": "inputField1",
              style: {
                fontSize: "24px",
                alignItems: "center",
                color: colorPallete.fontBlack,
                fontWeight: "600",
                textAlign: "center",
              },
            }}
          />{" "}
          <TextField
            data-testid="inputField22"
            placeholder=""
            inputRef={this.inputRefs[1]}
            sx={otpStyles.mobileNumberInput}
            inputProps={{
              maxLength: 1,
              "data-testid": "inputField2",
              disabled: true,
              style: {
                fontSize: "24px",
                alignItems: "center",
                color: colorPallete.fontBlack,
                fontWeight: "600",
                textAlign: "center",
              },
            }}
          />{" "}
          <TextField
            data-testid="inputField33"
            placeholder=""
            inputRef={this.inputRefs[2]}
            sx={otpStyles.mobileNumberInput}
            inputProps={{
              maxLength: 1,
              "data-testid": "inputField3",
              disabled: true,
              style: {
                fontSize: "24px",
                alignItems: "center",
                color: colorPallete.fontBlack,
                fontWeight: "600",
                textAlign: "center",
              },
            }}
          />{" "}
          <TextField
            data-testid="inputField44"
            placeholder=""
            inputRef={this.inputRefs[3]}
            sx={otpStyles.mobileNumberInput}
            inputProps={{
              maxLength: 1,
              "data-testid": "inputField4",
              disabled: true,
              style: {
                fontSize: "24px",
                alignItems: "center",
                color: colorPallete.fontBlack,
                fontWeight: "600",
                textAlign: "center",
              },
            }}
          />
        </Stack>
        <Typography sx={otpStyles.otpNotReceived}>
          don't receive OTP {""}
          <Box component={"span"} sx={otpStyles.resendText}>
            Resend
          </Box>
        </Typography>
        <Button 
        sx={otpStyles.submitButton} onClick={this.validateOTP2}>
          Submit
        </Button>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
});
const mapDispatchTo = {
  reducerAction,
  setPhoneNumber,
  requestOtp,
  validateOTP,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(OtpScreen)
);
