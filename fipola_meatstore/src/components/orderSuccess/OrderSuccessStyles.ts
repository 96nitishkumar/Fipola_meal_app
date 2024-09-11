import { colorPallete } from "../../environment/ColorsAndStyles";

import bodyConfettiImg from "../../assets/orderSuccess/SL-050619-20140-36-ai 1.png";
import paperConfettiImg from "../../assets/orderSuccess/SL_012421_39970_08-ai 1.png";

export const orderSuccessStyles = {
  body: {
    height: "100vh",
    width: "100%",
    background: colorPallete.orengishYellow,
    backgroundImage: `url(${bodyConfettiImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: { xs: "300px", sm: "350px", md: "400px", lg: "450px" },
    backgroundImage: `url(${paperConfettiImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    borderRadius: "25px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "45px",
    position: "relative",
    minHeight: "400px",
  },
  congratulationsText: {
    fontFamily: "Montserrat Alternates",
    color: colorPallete.fontBlack,
    fontSize: { sm: "24px", xs: "20px" },
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "center",
  },
  subText: {
    fontFamily: "Montserrat Alternates",
    color: colorPallete.fontGrey,
    fontSize: { sm: "24px", xs: "20px" },
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "center",
  },
  homeIconMainBox: {
    width: "70px",
    height: "70px",
    borderRadius: "40px",
    background: colorPallete.backgroundRed,
    position: "absolute",
    bottom: "-30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
