import { colorPallete } from "../../environment/ColorsAndStyles";

export const ourCategoryStyles = {
  SearchingField: {
    maxWidth: "500px",
    width: "100%",
    height: "61px",
    boxShadow: "4px 0px 15px 14px #27252214",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
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

  componentBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headingYellowContainer: {
    height: "82px",
    background: colorPallete.orengishYellow,
    width: "100%",
    borderRadius: "10px 10px 0 0 ",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Montserrat Alternates",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
  },
  allMeatsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: { md: "25px", xs: "10px" },
    alignItems: "center",
    flexWrap: "wrap",
    margin: "25px auto 0",
    width: { md: "80%", lg: "75%", sm: "90%", xs: "100%" },
  },
  imgAndDescriptionContainer: {
    width: "141px",
    height: "171px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  meatName: {
    fontFamily: "Montserrat Alternates",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
    textTransform: "capitalize",
  },
  footer: {
    height: "65px",
    background: colorPallete.orengishYellow,
    width: "100%",
    borderRadius: "0 0 10px 10px  ",
    display: { xs: "flex", md: "none" },
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
