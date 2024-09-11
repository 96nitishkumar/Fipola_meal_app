import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import atmCards from "../../assets/multiplePaymentOptions/sprite-map 1.png";
import { styles } from "./MultiplePaymentOptionScreenStyles";
import { globalStyles } from "../homeScreen/HomeStyles";
import { connect } from "react-redux";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { RootState } from "../../redux/Store";
import { NavigateFunction } from "react-router-dom";

interface Iprops {
  navigate: NavigateFunction;
  props: Object;
}
const paymentData = ["Debit/credit/ATM", "netBanking", "UPI"];

class PaymentMethod extends Component<Iprops> {
  state = { index: 0 };

  handleChange = (indx: number) => {
    this.setState({ index: indx });
  };
  continue = () => {
    switch (this.state.index) {
      case 0:
        this.props.navigate("/cardPayment");
        break;
      case 1:
        this.props.navigate("*");
        break;
      case 2:
        this.props.navigate("/upiPayment");
        break;
    }
  };
  showPayment = () => {
    return paymentData.map((item, indx) => (
      <Card key={indx} sx={styles.cardContainer}>
        <CardContent>
          <Stack rowGap={1}>
            <Stack direction={"row"} alignItems={"center"}>
              <Radio
                checked
                onClick={() => this.handleChange(indx)}
                data-testid={`option${indx}`}
                value={indx}
                name="address"
                sx={
                  this.state.index === indx
                    ? styles.radioActive
                    : styles.radioInactive
                }
              />
              <Typography variant="h6" sx={styles.cardHeading}>
                {item}
              </Typography>
            </Stack>
            {indx === 0 && (
              <Box component={"img"} src={atmCards} sx={styles.debitcards} />
            )}
          </Stack>
        </CardContent>
      </Card>
    ));
  };

  render() {
    return (
      <Stack rowGap={2}>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={styles.deliveryNavBar}
        >
          <ArrowBackIcon />
          <Typography variant="h6" sx={globalStyles.boldPara}>
            Payment method
          </Typography>
          <Box />
        </Stack>
        <RadioGroup value={this.state.index}>
          <Stack
            sx={styles.addressContainer}
            columnGap={2}
            direction={"row"}
            rowGap={2}
          >
            {this.showPayment()}
          </Stack>
        </RadioGroup>
        <Box sx={styles.bottomButton}>
          <Button sx={styles.continueBtn} onClick={this.continue}>
            Continue
          </Button>
        </Box>
      </Stack>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  props: props,
});
const mapDispatchTo = {};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(PaymentMethod)
);
