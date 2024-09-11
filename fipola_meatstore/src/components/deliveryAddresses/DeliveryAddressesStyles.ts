import { colorPallete } from "../../environment/ColorsAndStyles";
import { globalStyles } from "../homeScreen/HomeStyles";

export const styles = {
  mainContainer: {
    minHeight: "100vh",
    justifyContent: "space-between",
  },
  deliveryNavBar: {
    bgcolor: "#F5BF45",
    height: { xs: "50px", lg: "70px" },
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
  },
  arrow: {
    width: "25px",
  },
  cardHeading: {
    ...globalStyles.boldPara,
    flexGrow: 1,
    textAlign: "left",
    fontSize: "0.9rem",
  },
  dots: {
    // height: "15px",
    fontSize: "24px",
  },
  para: {
    ...globalStyles.greyPara,
    fontSize: "0.9rem",
    textAlign: "left",
    width: "95%",
    opacity: 0.5,
  },
  cardContainer: {
    maxWidth: "350px",
    minWidth: "300px",
  },
  addressContainer: {
    width: "100%",
    flexWrap: "wrap",
    boxSizing: "border-box",
    padding: "15px",
    justifyContent: { xs: "center", md: "flex-start" },
    flexGrow: 1,
  },
  iconButton: {
    bgcolor: "#e7ac27",
  },
  radioActive: {
    "&.MuiRadio-colorPrimary": {
      color: colorPallete.orengishYellow,
    },
  },
  radioInactive: {
    "&.MuiRadio-colorPrimary": {
      color: colorPallete.lightgray,
    },
  },
  boxButton: {
    bgcolor: colorPallete.backgroundRed,
    width: "85%",
    borderRadius: "50px",
    height: "50px",
    maxWidth: "350px",
  },
  button: {
    width: "85%",
    maxWidth: "350px",
    mt: "10px",
    alignSelf: "center",
  },
  continueBtn: {
    fontFamily: "Montserrat Alternates",
    fontWeight: "600",
    fontSize: "22px",
    margin: "auto",
    lineHeight: "26.82px",
    textAlign: "center",
    color: colorPallete.fontWhite,
    textTransform: "capitalize",
    background: colorPallete.backgroundRed,
    height: "70px",
    borderRadius: "60px",
    minWidth: "290px",
    maxWidth: {
      xs: "320px",
      sm: "400px",
      md: "40%",
      lg: "38%",
    },
    "&:hover": {
      background: colorPallete.backgroundRed,
    },
  },
  bottomButton: {
    width: "85%",
    position: "absolute",
    bottom: "20px",
    margin: "auto",
    // maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
