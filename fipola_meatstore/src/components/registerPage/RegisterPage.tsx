import { Box, Button, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, Component } from "react";
import { styles } from "../profile/ProfilePageStyles";
import { RootState } from "../../redux/Store";
import {
  reducerAction,
  registerNewUser,
  requestOtp,
  setPhoneNumber,
} from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { registerStyles } from "./RegisterPageStyles";

interface Iprops {
  props: object;
  phoneNumber: string;
  data: [];
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

interface Istate {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  password: string;
  error: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNo: string;
  };
  isError: boolean;
  isOpen: boolean;
}

class RegisterPage extends Component<Iprops, Istate> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    error: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNo: "",
    },
    isError: false,
    isOpen: false,
  };

  // handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   this.setState((prev)=>({ ...prev,[event.target.name]: event.target.value }));
  // };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        this.state.error.firstName =
          value.length > 4
            ? ""
            : "*first name should be greater than 4 characters";
        break;
      case "lastName":
        this.state.error.lastName =
          value.length > 2
            ? ""
            : "*last name should be greater than 2 characters";
        break;
      case "email":
        this.state.error.email =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            value
          )
            ? ""
            : "*invalid email";
        break;
      case "password":
        this.state.error.password =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
            ? ""
            : "*password must be greater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character";

        break;
      case "mobileNo":
        this.state.error.mobileNo =
          (value + "").length === 10
            ? ""
            : "*mobile number should be 10 digits only";
        break;
    }
    this.setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  disableRegisterButton = () => {
    if (
      this.state.email === "" ||
      this.state.error.email ||
      this.state.firstName === "" ||
      this.state.error.firstName ||
      this.state.lastName === "" ||
      this.state.error.lastName ||
      this.state.mobileNo === "" ||
      this.state.error.mobileNo ||
      this.state.password === "" ||
      this.state.error.password
    ) {
      return true;
    } else {
      return false;
    }
  };

  register = () => {
    if (
      this.state.email &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.mobileNo
    ) {
      this.props.registerNewUser({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        mobile_number: `+91${this.state.mobileNo}`,
      });
    } else {
      alert("fill all the fields");
    }
  };

  render() {
    return (
      <Box>
        <Box sx={registerStyles.headingBar}>
          <Typography sx={registerStyles.registerHeading}>Register</Typography>
        </Box>
        <Box sx={registerStyles.body}>
          <TextField
            name="firstName"
            label="first name"
            value={this.state.firstName}
            sx={styles.inputField}
            onChange={this.handleChange}
            inputProps={{ "data-testid": "firstName" }}
          />
          {this.state.error.firstName && (
            <Typography sx={registerStyles.errorMsg}>
              {this.state.error.firstName}
            </Typography>
          )}
          <TextField
            name="lastName"
            label="last name"
            value={this.state.lastName}
            sx={styles.inputField}
            onChange={this.handleChange}
            inputProps={{ "data-testid": "lastName" }}
          />
          {this.state.error.lastName && (
            <Typography sx={registerStyles.errorMsg}>
              {this.state.error.lastName}
            </Typography>
          )}
          <TextField
            name="email"
            label="email"
            value={this.state.email}
            sx={styles.inputField}
            onChange={this.handleChange}
            inputProps={{ "data-testid": "emailField" }}
          />
          {this.state.error.email && (
            <Typography sx={registerStyles.errorMsg}>
              {this.state.error.email}
            </Typography>
          )}
          <TextField
            name="mobileNo"
            label="phone"
            type="number"
            value={this.state.mobileNo}
            sx={styles.inputField}
            onChange={this.handleChange}
            inputProps={{ "data-testid": "phoneNumberField" }}
          />
          {this.state.error.mobileNo && (
            <Typography sx={registerStyles.errorMsg}>
              {this.state.error.mobileNo}
            </Typography>
          )}
          <TextField
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            sx={styles.inputField}
            onChange={this.handleChange}
            inputProps={{ "data-testid": "passwordField" }}
          />
          {this.state.error.password && (
            <Typography sx={registerStyles.errorMsg}>
              {this.state.error.password}
            </Typography>
          )}
          <Box sx={styles.bottomButton}>
            <Button
              sx={styles.continueBtn}
              disabled={this.disableRegisterButton()}
              onClick={this.register}
              data-testid="registerButton"
            >
              Continue
            </Button>
          </Box>
        </Box>
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
  registerNewUser,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(RegisterPage)
);
