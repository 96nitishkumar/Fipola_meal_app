import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styles } from "./DeliveryAddressesStyles";
import { globalStyles } from "../homeScreen/HomeStyles";
import { RootState } from "../../redux/Store";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { deleteAddress, IState } from "../../redux/Reducer";

interface IProps {
  navigate: NavigateFunction;
  addresses: IState["addresses"];
  props: Object;
  deleteAddress: (indx: number) => void;
}

class DeliveryAddress extends Component<IProps> {
  state = { index: 0, open: false, anchorEl: null, id: null };

  handleChange = (index: number) => {
    this.setState({ index });
  };
  addAddress = () => {
    this.props.navigate("/addNewAddress");
  };
  handleDeleteAddress = (itemId: number) => {
    // event.stopPropagation()
    // this is to stop the onClick of the parent when the parent and the child both have 2 different on click events

    if (this.props.addresses.length > 0) {
      this.props.deleteAddress(itemId);
    }
    this.handleClose();
  };
  handleDotClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    itemId: number
  ) => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget, open: true, id: itemId });
  };
  handleClose = () => {
    this.setState({ anchorEl: null, open: false, id: null });
  };
  showAddress = () => {
    let addressarr = [];
    if (this.props.addresses.length > 0) {
      addressarr = this.props.addresses;
    } else {
      addressarr = ["a", "b", "c"];
    }

    return addressarr.map((item, index) => (
      <Card key={index} sx={styles.cardContainer}>
        <CardContent>
          <Stack rowGap={1}>
            <Stack direction={"row"} alignItems={"center"}>
              <Radio
                checked
                onChange={() => this.handleChange(index)}
                value={item}
                name="address"
                sx={
                  this.state.index === index
                    ? styles.radioActive
                    : styles.radioInactive
                }
              />
              <Typography variant="h6" sx={styles.cardHeading}>
                {typeof item === "string" ? "Rajesh Singh" : item.name}
              </Typography>
              <IconButton
                onClick={(event) => this.handleDotClick(event, index)}
              >
                <MoreVertIcon sx={styles.dots} />
              </IconButton>
            </Stack>
            <Typography variant="body1" sx={styles.para}>
              {typeof item === "string"
                ? "Sarjapur Outer Ring Road, Kadabeesanahalli,"
                : item.city}
            </Typography>
            <Typography variant="body1" sx={styles.para}>
              {typeof item === "string" ? "Bengaluru -500049" : item.pin}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    ));
  };

  render() {
    return (
      <Stack rowGap={2} sx={styles.mainContainer}>
        <Box>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={styles.deliveryNavBar}
          >
            <ArrowBackIcon />
            <Typography variant="h6" sx={globalStyles.boldPara}>
              Delivery Address
            </Typography>
            <IconButton sx={styles.iconButton}>
              <AddIcon sx={styles.arrow} onClick={this.addAddress} />
            </IconButton>
          </Stack>
          <RadioGroup>
            <Stack
              sx={styles.addressContainer}
              columnGap={2}
              direction={"row"}
              rowGap={2}
            >
              {this.showAddress()}
            </Stack>
          </RadioGroup>
        </Box>
        <Box sx={styles.bottomButton}>
          <Button sx={styles.continueBtn}>Pay Now</Button>
        </Box>
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} sx={globalStyles.boldPara}>
            Edit
          </MenuItem>
          <MenuItem
            sx={globalStyles.boldPara}
            onClick={() => this.handleDeleteAddress(this.state.id!)}
          >
            Delete
          </MenuItem>
        </Menu>
      </Stack>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  props: props,
  addresses: state.state.addresses,
});
const mapDispatchTo = { deleteAddress };
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(DeliveryAddress)
);
