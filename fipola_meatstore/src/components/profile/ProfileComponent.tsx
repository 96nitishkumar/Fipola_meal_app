import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, Component } from "react";
import { styles } from "./ProfilePageStyles";
import { globalStyles } from "../homeScreen/HomeStyles";
import { loginStyles } from "../loginAndRegister/LoginStyles";
import profile from "../../assets/profilePage/Ellipse 10.png";
import backArrow from "../../assets/profilePage/Vector (1).png";
import edit from "../../assets/profilePage/Mode edit.png";
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
class ProfileScreen extends Component<Iprops> {
  state = { firstName: "", lastName: "", email: "", phone: "" };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  register = () => {
    if (
      this.state.email &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.phone
    ) {
      this.props.registerNewUser({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: "AaAa@1",
        mobile_number: `+91${this.state.phone}`,
      });
    } else {
      alert("fill all the fields");
    }
  };
  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Stack
          direction={"row"}
          width={"100%"}
          alignItems={"flex-start"}
          sx={styles.cardNavBar}
        >
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box component={"img"} src={backArrow} sx={styles.arrow} />
            <Typography
              variant="h6"
              sx={{
                ...globalStyles.boldPara,
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "40px",
                alignItems: "center",
              }}
            >
              Profile
            </Typography>
            <Box>{""}</Box>
          </Stack>
        </Stack>
        <Box sx={styles.imageContainer}>
          <Box component={"img"} src={profile} sx={styles.image} />
          <IconButton sx={styles.iconButton}>
            <Box component={"img"} src={edit} sx={styles.editImage} />
          </IconButton>
        </Box>
        <Box sx={globalStyles.widthContainer}>
          <Stack rowGap={2} sx={styles.inputContainer}>
            <TextField
              name="firstName"
              label="first name"
              value={this.state.firstName}
              sx={styles.inputField}
              onChange={this.handleChange}
              inputProps={{ "data-testid": "firstName" }}
            />
            <TextField
              name="lastName"
              label="last name"
              value={this.state.lastName}
              sx={styles.inputField}
              onChange={this.handleChange}
              inputProps={{ "data-testid": "lastName" }}
            />
            <TextField
              name="phone"
              label="phone"
              data-testid="phone"
              value={this.state.phone}
              inputProps={{
                maxlength: 10,
                "data-testid": "number",
              }}
              sx={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              name="email"
              label="email"
              value={this.state.email}
              onChange={this.handleChange}
              inputProps={{ "data-testid": "email" }}
              sx={styles.inputField}
            />
          </Stack>
          <Box sx={styles.bottomButton}>
            <Button
              sx={styles.continueBtn}
              onClick={this.register}
              data-testid="registerBtn"
            >
              Edit Profile
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
  connect(mapStateToProps, mapDispatchTo)(ProfileScreen)
);
