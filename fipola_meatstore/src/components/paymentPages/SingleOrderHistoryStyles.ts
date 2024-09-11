import { FontStyles, colorPallete } from "../../environment/ColorsAndStyles";
import { globalStyles } from "../homeScreen/HomeStyles";

export const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: "12px",
    boxSizing: "border-box",
  },
  cardNavBar: {
    bgcolor: "#F5BF45",
    height: { xs: "50px", md: "70px" },
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
  },
  arrow: {
    width: "25px",
  },
  cardContainer: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "15px",
  },
  watchImage: {
    width: "20px",
  },
  avatarImage: {
    width: "50px",
  },
  price: {
    color: colorPallete.backgroundRed,
    fontSize: "0.9rem",
    fontFamily: FontStyles.montserrat,
    fontWeight: "600",
    lineHeight: "25px",
  },
  timePara: {
    color: colorPallete.lightgray,
    fontFamily: FontStyles.montserrat,
    fontWeight: "600",
    fontSize: "0.9rem",
    textWrap: "nowrap",
  },
  cardParentContainer: {
    alignItems: "flex-start",
    boxSizing: "border-box",
    padding: "12px",
    flexWrap: "wrap",
  },
  ordersContainer: {
    flexWrap: "wrap",
    width: "100%",
  },
  cardImages: {
    width: "100%",
    objectFit: "contain",
  },
  cardPara: {
    ...globalStyles.boldPara,
    fontSize: { xs: "0.8rem", md: "1rem" },
    textAlign: "left",
    padding: "0px 10px",
    lineHeight: "1",
  },
  recentPrice: {
    ...globalStyles.boldPara,
    color: "#F62B2A",
    fontSize: { xs: "0.8rem", md: "1rem" },
    paddingLeft: "10px",
  },
  oldPrice: {
    ...globalStyles.greyPara,
    textDecoration: "line-through",
    fontSize: { xs: "0.8rem", md: "1rem" },
  },
  cardContentContainer: {
    paddingLeft: "0px",
    width: "100%",
  },
  priceDescription: {
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
    bgcolor: "#fff",
  },
  card: {
    width: { xs: "120px", sm: "250px" },
  },
  cardWidth: {
    width: { xs: "100%", md: "500px" },
    height: "200px",
    borderRadius: "15px",
  },
  changeFlex: {
    flexDirection: { sm: "row" },
    columnGap: "15px",
    boxSizing: "border-box",
    width: "100%",
    paddingRight: "15px",
  },
  subFlexContainer: {
    width: { md: "100%" },
  },
};
