import backGroundImg from "../../assets/logoin/bg.png";
import { colorPallete } from "../../environment/ColorsAndStyles";
export const loginStyles = {
  mainBox: {
    // display: "flex",
    // flexDirection: "row",
    // gap: "25px",
    // justifyContent: "space-around",
  },
  kababImgStyle: { position: "fixed", top: 0 },
  startScreenBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backGround: colorPallete.orengishYellow,
  },
  logoImgStyle: { position: "absolute", top: "40%" },
  mobileNumAndTextBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",
    justifyContent: "space-between",
    gap: "30px",
  },
  meatImgWithDesign: { background: "#f5ba45" },
  yellowbottomBox: {
    height: "45%",
    background: colorPallete.orengishYellow,
    width: "100%",
  },
  loginAndRegisterHeading: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "24.38px",
    color: colorPallete.fontBlack,
    marginTop: "36px",
  },
  clickHere: {
    fontFamily: "Montserrat Alternates",
    fontWeight: 600,
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "24.38px",
    color: colorPallete.fontBlack,
    marginTop: "36px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  loginScreenMainBody: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "340px",
    maxWidth: "100%",
    animation: { xs: "decreaseWidth 3s" },
    "@keyframes decreaseWidth": {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
  },

  swiperContainer: {
    height: "55%",
    width: "98%",
    margin: "auto",
  },
  swiperImageandtextContainerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    padding: "20px 10px",
  },
  swiperDarkText: {
    fontFamily: "Montserrat Alternates",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "26.82px",
    textAlign: "center",
    color: colorPallete.fontBlack,
  },
  swiperLightTonedText: {
    fontFamily: "Montserrat Alternates",
    fontWeight: "500",
    fontSize: "17px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#BAB9BB",
  },
  mainSwiperStyles: {
    height: "100%",
    maxWidth: "500px",
    "--swiper-navigation-color": "#DCDCDD",
    "--swiper-pagination-color": colorPallete.orengishYellow,
    "--swiper-pagination-bullet-size": "16px",
  },
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
    minWidth: "320px",
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

  mobileNumberInput: {
    minWidth: "320px",
    maxWidth: {
      xs: "320px",
      sm: "400px",
      md: "40%",
      lg: "38%",
    },
    margin: "auto",
    borderRadius: "150px",
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
};
