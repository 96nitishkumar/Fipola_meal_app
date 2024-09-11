import { colorPallete } from "../../environment/ColorsAndStyles";

export const globalStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  buttonColor: {
    bgcolor: colorPallete.backgroundRed,
    borderRadius: "150px",
    width: "100%",
    padding: "15px",
    fontFamily: "Montserrat Alternates",
    color: colorPallete.fontWhite,
    fontWeight: "600",
    textTransform: "none",
  },
  boldPara: {
    fontFamily: "Montserrat Alternates",
    fontSize: "1rem",
    fontWeight: "600",
    color: colorPallete.fontBlack,
    textAlign: "center",
    textTransform: "capitalize",
  },
  greyPara: {
    fontFamily: "Poppins",
    fontSize: "1rem",
    fontWeight: "500",
    color: colorPallete.fontBlack,
    opacity: "0.6",
    textAlign: "center",
    textTransform: "capitalize",
  },
  widthContainer: {
    width: "85%",
  },
  cardNavBar: {
    bgcolor: colorPallete.orengishYellow,
    height: "70px",
    width: "100%",
    boxSizing: "border-box",
    padding: "15px",
  },
  arrow: {
    width: "25px",
  },
};

export const styles = {
  navigationContainer: {
    bgcolor: colorPallete.orengishYellow,
    width: "100%",
    boxSizing: "border-box",
    padding: "10px",
  },
  logoImage: {
    width: "120px",
  },
  burgerMenuButton: {
    display: { md: "none" },
    bgcolor: "#E7AC27",
    "&>img": {
      width: "30px",
    },
    "&:hover": {
      bgcolor: "#E7AC27",
    },
  },
  profileImage: {
    // border: "3px solid #E7AC27",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  mainSwiperContainer: {
    // bgcolor: "#C4C4C4"
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      border: "0px none",
      fontWeight: "500",
      fontFamily: "Poppins",
      bgcolor: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0px none",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "0px none",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "0px none",
    },
  },
  searchImage: {
    width: "25px",
  },
  locationImage: {
    width: "16px",
  },
  shadow: {
    width: "100%",
    boxSizing: "border-box",
    paddingRight: "10px",
    boxShadow: "4px 4px 4px 5px #272522 0.8",
  },
  swiperWidth: {
    width: "100%",
    height: { xs: "130px", sm: "180px", md: "250px", lg: "350px" },
    borderRadius: "15px",
  },
  cardImages: {
    width: "100%",
    objectFit: "cover",
    maxWidth: "400px",
  },
  cardHeading: {
    ...globalStyles.boldPara,
    textAlign: "left",
  },
  cardPara: {
    ...globalStyles.boldPara,
    fontSize: "0.8rem",
    textAlign: "left",
  },
  recentPrice: {
    ...globalStyles.boldPara,
    color: colorPallete.backgroundRed,
    fontSize: "0.8rem",
  },
  oldPrice: {
    ...globalStyles.greyPara,
    textDecoration: "line-through",
    fontSize: "0.8rem",
  },
  iconSize: {
    width: "15px",
  },
  cardContainer: {
    width: { xs: "170px", sm: "250px", md: "300px", lg: "400px" },
    // minWidth: "170px",
    flexShrink: 0,
  },
  cardButton: {
    bgcolor: colorPallete.orengishYellow,
    borderRadius: "50px",
    color: "#000",
    fontWeight: "600",
    padding: "0px 15px",
    height: "40px",
    boxSizing: "border-box",
    "&:hover": {
      bgcolor: colorPallete.orengishYellow,
    },
  },
  cardContentContainer: {
    paddingLeft: "0px",
    width: "100%",
  },
  arrowIcon: {
    width: "25px",
  },

  dvd: { border: `1px solid ${colorPallete.fontWhite}`, opacity: 0.2 },
  swiperContainer: {
    width: "auto",
    "--swiper-pagination-color": colorPallete.orengishYellow,
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
  },
  footerContainer: {
    display: { md: "none" },
    bgcolor: colorPallete.orengishYellow,
    width: "100%",
    height: "60px",
    boxSizing: "border-box",
    padding: "10px",
    "&>img": {
      width: "20px",
    },
  },
  cartImage: {
    width: "20px",
  },
};
