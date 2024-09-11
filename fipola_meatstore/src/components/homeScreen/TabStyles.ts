import { FontStyles, colorPallete } from "../../environment/ColorsAndStyles";

export const styles = {
  container: {
    bgcolor: colorPallete.orengishYellow,
    width: "100%",
    boxSizing: "border-box",
    height: "70px",
    display: { xs: "none", md: "block" },
  },
  tabsList: {
    "& .MuiTabs-indicator": {
      backgroundColor: colorPallete.backgroundRed,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "white",
      fontFamily: "Montserrat Alternates",
      fontSize: "0.9rem",
      fontWeight: "600",
    },
    "& .MuiTab-root": {
      fontFamily: FontStyles.montserrat,
      height: "70px",
    },
  },
};
