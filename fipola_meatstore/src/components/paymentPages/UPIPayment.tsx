import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import { styles } from "../profile/ProfilePageStyles";
import { colorPallete } from "../../environment/ColorsAndStyles";
import { upiPaymentStyles } from "./UPIPaymentStyles";

export default class UPIPayment extends Component {
  render() {
    return (
      <Box sx={upiPaymentStyles.mainBody}>
        <Box sx={upiPaymentStyles.header}>
          <Box sx={upiPaymentStyles.headerContentContainer}>
            <ArrowBackIcon />
            <Typography sx={upiPaymentStyles.mainHeading}>UPI</Typography>
            <QrCodeScannerIcon />
          </Box>
        </Box>
        <Paper sx={upiPaymentStyles.paper}>
          <TextField name="UPI" label="UPI" sx={styles.inputField} />
        </Paper>
        <Box sx={styles.bottomButton}>
          <Button sx={styles.continueBtn}>Pay Now</Button>
        </Box>
      </Box>
    );
  }
}
