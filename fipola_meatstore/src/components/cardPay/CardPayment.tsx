import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import { styles } from "../profile/ProfilePageStyles";
import { cardPaymentStyles } from "./CardPaymentStyles";

export default class CardPayment extends Component {
  render() {
    return (
      <Box>
        <Box sx={cardPaymentStyles.mainBody}>
          <Box sx={cardPaymentStyles.yellowHeadWithBackground}>
            <Box sx={cardPaymentStyles.headingAndBackButtonContainer}>
              <ArrowBackIcon />
              <Typography sx={cardPaymentStyles.titleText}>Card</Typography>
              <Box></Box>
            </Box>
          </Box>
          <Paper sx={cardPaymentStyles.mainPaper}>
            <TextField name="cardNo" label="card no" sx={styles.inputField} />
            <TextField
              name="expiry"
              type="date"
              label="expiry"
              sx={{
                ...styles.inputField,

                width: { xs: "90%", sm: "350px", md: "350px" },
              }}
            />
            <TextField name="cvv" label="cvv" sx={styles.inputField} />
            <TextField
              name="holderName"
              label="Holder name"
              sx={styles.inputField}
            />
          </Paper>
          <Box sx={styles.bottomButton}>
            <Button sx={styles.continueBtn}>Pay Now</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
