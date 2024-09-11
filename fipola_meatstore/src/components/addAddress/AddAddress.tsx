import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styles } from "./AddAddressStyles";
import GoogleMapsComponent from "./GoogleMap";
import { RootState } from "../../redux/Store";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import { addNewAddress, IState } from "../../redux/Reducer";
import { NavigateFunction } from "react-router-dom";

interface Istate {
  addressObj: { name: string; city: string; pin: string };
}
interface Iprops {
  props: Object;
  addresses: { name: string; city: string; pin: string }[];
  navigate: NavigateFunction;
  addNewAddress: (address: { name: string; city: string; pin: string }) => void;
}

class AddNewAddress extends Component<Iprops, Istate> {
  state = { addressObj: { name: "", city: "", pin: "" } };
  handleAddress = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "city":
        this.setState((prev) => ({
          addressObj: { ...prev.addressObj, city: event.target.value },
        }));
        break;
      case "pincode":
        this.setState((prev) => ({
          addressObj: { ...prev.addressObj, pin: event.target.value },
        }));
        break;
      default:
        this.setState((prev) => ({
          addressObj: { ...prev.addressObj, name: event.target.value },
        }));
        break;
    }
  };
  addNewAddress = () => {
    this.props.addNewAddress(this.state.addressObj);
    this.setState({ addressObj: { name: "", city: "", pin: "" } });
    this.props.navigate("/deliveryAddress");
  };

  returnToaddresses = () => {
    this.props.navigate("/deliveryAddress");
  };

  render() {
    return (
      <Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={styles.navContainer}
        >
          <ArrowBackIcon
            onClick={this.returnToaddresses}
            data-testid="arrowBackIcon"
          />
          <Typography variant="h6" sx={styles.newAddressPara}>
            Add new address
          </Typography>
        </Stack>
        <Stack
          rowGap={1}
          columnGap={3}
          justifyContent={"space-between"}
          sx={styles.mainContainer}
        >
          <Stack sx={styles.grow}>
            <Box sx={styles.grow}>
              <GoogleMapsComponent />
            </Box>
          </Stack>
          <Stack rowGap={2} sx={styles.inputFieldsContainer}>
            <Stack
              width={"100%"}
              sx={styles.inputContainer}
              alignItems={"center"}
              rowGap={1.5}
            >
              <TextField
                name="flat no, building name"
                label="flat no, building name"
                type="text"
                value={this.state.addressObj.name}
                inputProps={{
                  "data-testid": "flatNoField",
                }}
                onChange={this.handleAddress}
                sx={styles.inputField}
              />{" "}
              <TextField
                name="city"
                label="city"
                type="text"
                inputProps={{
                  "data-testid": "cityField",
                }}
                value={this.state.addressObj.city}
                sx={styles.inputField}
                onChange={this.handleAddress}
              />{" "}
              <TextField
                name="pincode"
                label="pincode"
                type="text"
                inputProps={{
                  "data-testid": "pincodefield",
                }}
                value={this.state.addressObj.pin}
                onChange={this.handleAddress}
                sx={styles.inputField}
              />
            </Stack>
            <Stack alignItems={"center"}>
              <Box sx={styles.bottomButton}>
                <Button
                  sx={styles.continueBtn}
                  onClick={this.addNewAddress}
                  data-testid="addNewButton"
                >
                  Add new
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    );
  }
}

const mapStateToProps = (state: RootState, props: object) => ({
  addresses: state.state.addresses,
  props: props,
});
const mapDispatchTo = {
  addNewAddress,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(AddNewAddress)
);
