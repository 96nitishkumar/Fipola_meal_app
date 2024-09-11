import { FontStyles, colorPallete } from "../../environment/ColorsAndStyles";

export const pageunderConstructionStyles = {
  mainBody: {
    width: "100%",
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  HomeText: {
    background: colorPallete.orengishYellow,
    padding: "5px 30px",
    fontFamily: FontStyles.montserrat,
    fontWeight: "600",
    color: colorPallete.fontBlack,
    "&:hover": {
      cursor: "pointer",
    },
  },
};
