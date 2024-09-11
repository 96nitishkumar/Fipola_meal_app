import { colorPallete } from "../../environment/ColorsAndStyles";

export const otpStyles = {
  body: {
    background: colorPallete.orengishYellow,
    padding: "1px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  imageAndOthereTxtContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "61px auto 10px auto",
  },
  verificationText: {
    fontFamily: "Montserrat Alternates",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
    marginTop: "20px",
  },
  otpNotReceived: {
    fontFamily: "Poppins",
    fontSize: "17px",
    fontWeight: 500,
    lineHeight: "26px",
    textAlign: "center",
    color: "#705A2C",
    textTransform: "capitalize",
    marginTop: "200px",
  },
  resendText: {
    fontFamily: "Poppins",
    fontSize: "17px",
    fontWeight: 500,
    lineHeight: "26px",
    textAlign: "center",
    color: colorPallete.backgroundRed,
    textDecoration: "underline",
  },
  submitButton: {
    color: "#fff",
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24.38px",
    textAlign: "center",
    textTransform: "capitalize",
    width: "300px",
    height: "60px",
    borderRadius: "60px",
    background: colorPallete.backgroundRed,
    margin: "20px auto 50px",
    "&:hover": {
      background: colorPallete.backgroundRed,
    },
  },
  enterOtpText: {
    fontFamily: "Poppins",
    fontSize: "17px",
    fontWeight: "500",
    lineHeight: "26px",
    textAlign: "center",
    color: colorPallete.fontBlack,
    opacity: "60%",
    marginTop: "70px",
  },
  phoneNumber: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
  },
  mobileNumberInput: {
    width: "60px",
    height: "61px",

    borderRadius: "150px",
    background: "#fff",

    "& .MuiOutlinedInput-root": {
      borderRadius: "150px",
      color: colorPallete.fontBlack,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: "0px none",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: "0px none",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: "0px none",
    },
  },
  inputPropsStyles: {
    fontSize: "24px",
    alignItems: "center",
    color: colorPallete.fontBlack,
    fontWeight: "600",
    textAlign: "center",
  },
};
