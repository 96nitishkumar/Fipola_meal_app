import { colorPallete } from "../../environment/ColorsAndStyles";

export const registerStyles = {
  errorMsg: {
    maxWidth: "400px",
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  },
  headingBar: {
    background: colorPallete.orengishYellow,
    height: "70px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerHeading: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    color: colorPallete.fontBlack,
  },
  body: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
};
