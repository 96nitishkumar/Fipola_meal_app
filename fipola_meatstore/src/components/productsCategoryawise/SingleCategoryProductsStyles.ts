import { colorPallete } from "../../environment/ColorsAndStyles";

export const singleProductCategoryStyles = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
  },
  header: {
    height: "70px",
    background: colorPallete.orengishYellow,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowBackIcon: { marginLeft: "15px" },
  categoryTitle: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "40px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  productsContainerGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "auto",
    width: { xs: "95%", sm: "90%" },
  },
  singleProductGridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "250px",
  },
};
