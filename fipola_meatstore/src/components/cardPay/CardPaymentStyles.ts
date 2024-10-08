import { colorPallete } from "../../environment/ColorsAndStyles";

export const cardPaymentStyles = {
  mainBody: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  yellowHeadWithBackground: {
    width: "100%",
    height: "152px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    background: colorPallete.orengishYellow,
  },
  headingAndBackButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    margin: "auto",
  },
  titleText: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
  },
  mainPaper: {
    width: { md: "95%", sm: "85%", xs: "80%" },
    margin: "auto",
    position: { xs: "absolute", md: "relative" },
    top: { xs: "120px", md: "0" },
    left: { md: "0", sm: "7.5%", xs: "10%" },
    zIndex: 2,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    padding: "25px 0",
  },
};
