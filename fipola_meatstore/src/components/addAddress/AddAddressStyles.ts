import { colorPallete } from "../../environment/ColorsAndStyles";
import { globalStyles } from "../homeScreen/HomeStyles";

export const styles = {
  mainContainer: {
    minHeight: { xs: "calc(80vh - 50px)", md: "calc(100vh - 65px)" },
    flexDirection: { xs: "column", md: "row" },
    boxSizing: "border-box",
    width: "100%",
  },
  navContainer: {
    bgcolor: colorPallete.orengishYellow,
    height: { xs: "50px", md: "65px" },
    boxSizing: "border-box",
    padding: "10px",
    width: "100%",
  },
  arrowIcon: {
    width: "25px",
  },
  newAddressPara: {
    ...globalStyles.boldPara,
    flexGrow: 1,
  },
  inputContainer: {
    boxSizing: "border-box",
    padding: "10px",
  },
  buttonContainer: {
    width: { xs: "90%", sm: "85%" },
    maxWidth: { xs: "290px", sm: "330px" },
  },
  grow: {
    flexGrow: 1,
  },
  inputFieldsContainer: {
    justifyContent: { md: "center" },
  },
  bottomButton: {
    position: "absolute",
    bottom: "20px",
    margin: "auto",
    // maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  continueBtn: {
    fontFamily: "Montserrat Alternates",

    fontWeight: "600",
    fontSize: { md: "22px", xs: "16px" },
    margin: "auto",
    lineHeight: "26.82px",
    textAlign: "center",
    color: colorPallete.fontWhite,
    textTransform: "capitalize",
    background: colorPallete.backgroundRed,
    height: "70px",
    borderRadius: "60px",
    minWidth: { md: "290px", xs: "260px" },
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
  inputField: {
    maxWidth: "400px",
    margin: "auto",
    "& .MuiOutlinedInput-root": {
      borderRadius: "150px",
      color: colorPallete.fontGrey,
      fontFamily: "Poppins",
      fontSize: { xs: "0.8rem", sm: "1rem" },
      paddingLeft: "15px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: `2px solid ${colorPallete.fontBlack}`,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: `2px solid ${colorPallete.fontBlack}`,
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderRadius: "150px",
      border: `2px solid ${colorPallete.fontBlack}`,
    },
    "& .MuiInputLabel-shrink": {
      // marginLeft: "0",
      // position: "absolute",
      // right: "20px",
      // left: "30px",
      // top: "-3px",
      // width: "100px", // Need to give it a width so the positioning will work
      // background: "white" // Add a white background as below we remove the legend that had the background so text is not meshing with the border
      // display: "none" //if you want to hide it completly
    },
    "& .MuiInputLabel-outlined": {
      // color: "#18161B",
      fontFamily: "Montserrat Alternates",
      fontWeight: 600,
      textTransform: "capitalize",
      color: colorPallete.fontGrey,
      fontSize: { xs: "0.9rem", sm: "1rem" },
      "&.Mui-focused": {
        color: colorPallete.fontBlack,
        textTransform: "capitalize",
        // left: "20px",
        fontSize: { xs: "0.9rem", sm: "1rem" },
      },
    },
  },
};
