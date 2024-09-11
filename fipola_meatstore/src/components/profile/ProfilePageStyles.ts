import { colorPallete } from "../../environment/ColorsAndStyles";

export const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
  },
  cardNavBar: {
    bgcolor: colorPallete.orengishYellow,
    height: "150px",
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
  },
  arrow: {
    width: "25px",
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
  cardContainer: {
    position: "absolute",
    top: "60px",
    width: "90%",
    maxWidth: "500px",
    borderRadius: "15px",
  },
  imageContainer: {
    position: "relative",
    width: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    objectFit: "cover",
    objectPosition: "80%",
    border: "7px solid #fff",
    width: "150px",
    height: "150px",
    position: "absolute",
    borderRadius: "50%",
    top: "-80px",
  },
  iconButton: {
    position: "absolute",
    bgcolor: colorPallete.backgroundRed,
    color: "#fff",
    top: "-70px",
    right: "3px",
    "&:hover": {
      bgcolor: colorPallete.backgroundRed,
    },
  },
  editImage: { width: "22px" },
  inputContainer: { mt: "110px" },
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
