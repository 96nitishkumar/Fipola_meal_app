import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, Component, Suspense } from "react";
import kabab from "../../assets/logoin/5866399 1.png";
import logo from "../../assets/logoin/Logo.png";
import meat from "../../assets/logoin/img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import thumbsup from "../../assets/loginSwiper/img.png";
import antibioticFree from "../../assets/loginSwiper/img (1).png";
import halalCertified from "../../assets/loginSwiper/img (2).png";
import { loginStyles } from "./LoginStyles";
import CallIcon from "@mui/icons-material/Call";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { reducerAction, requestOtp, setPhoneNumber } from "../../redux/Reducer";
import { connect } from "react-redux";
import { NavigateFunction, useLocation } from "react-router-dom";
import { RootState } from "../../redux/Store";
interface Iprops {
  props: object;
  phoneNumber: string;
  data: [];
  isOtpReceived: boolean;
  reducerAction: (any: any) => void;
  setPhoneNumber: (number: string) => void;
  requestOtp: (number: string) => object;
  navigate: NavigateFunction;
  location: ReturnType<typeof useLocation>;
}
class LoginOrRegister extends Component<Iprops> {
  state = { show: false };

  phoneNumberRegister = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setPhoneNumber(event.target.value);
  };
  sendOtp = () => {
    this.props.requestOtp(this.props.phoneNumber);
  };

  registerNavigation = () => {};
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2500);
  }
  componentDidUpdate(
    prevProps: Readonly<Iprops>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    if (this.props.isOtpReceived) {
      this.props.navigate("/otpPage", { state: { hi: "jai ganesha" } });
    }
  }

  render() {
    return (
      <Box sx={loginStyles.mainBox}>
        {!this.state.show ? (
          <Box sx={loginStyles.startScreenBody}>
            <Box
              component={"img"}
              src={kabab}
              alt="kabab"
              sx={loginStyles.kababImgStyle}
            />
            <Box
              component={"img"}
              src={logo}
              alt="logo"
              sx={loginStyles.logoImgStyle}
            />
            <Box
              component={"img"}
              src={meat}
              alt="meat"
              sx={loginStyles.meatImgWithDesign}
            />
          </Box>
        ) : (
          <Box sx={loginStyles.loginScreenMainBody}>
            <Box sx={loginStyles.swiperContainer}>
              <Swiper
                style={loginStyles.mainSwiperStyles}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <Box sx={loginStyles.swiperImageandtextContainerBox}>
                    <Box
                      component={"img"}
                      src={thumbsup}
                      alt="image of affirmation"
                    />
                    <Typography sx={loginStyles.swiperDarkText}>
                      90 min Delivery
                    </Typography>
                    <Typography sx={loginStyles.swiperLightTonedText}>
                      It is a long established fact that a reader will be
                      distracted
                    </Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Box sx={loginStyles.swiperImageandtextContainerBox}>
                    <Box
                      component={"img"}
                      src={antibioticFree}
                      alt="image of affirmation"
                    />
                    <Typography sx={loginStyles.swiperDarkText}>
                      Antibiotic free
                    </Typography>
                    <Typography sx={loginStyles.swiperLightTonedText}>
                      It is a long established fact that a reader will be
                      distracted
                    </Typography>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Box sx={loginStyles.swiperImageandtextContainerBox}>
                    <Box
                      component={"img"}
                      src={halalCertified}
                      alt="image of affirmation"
                    />
                    <Typography sx={loginStyles.swiperDarkText}>
                      halal certified
                    </Typography>
                    <Typography sx={loginStyles.swiperLightTonedText}>
                      It is a long established fact that a reader will be
                      distracted
                    </Typography>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
            <Box sx={loginStyles.yellowbottomBox}>
              <Typography sx={loginStyles.loginAndRegisterHeading}>
                Login & Register
              </Typography>
              <Box sx={loginStyles.mobileNumAndTextBox}>
                <TextField
                  placeholder="Mobile No"
                  type="number"
                  onChange={this.phoneNumberRegister}
                  sx={loginStyles.mobileNumberInput}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CallIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button sx={loginStyles.continueBtn} onClick={this.sendOtp}>
                  Continue
                </Button>
                <Typography
                  sx={loginStyles.clickHere}
                  onClick={this.registerNavigation}
                >
                  click here to Register
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  isOtpReceived: state.state.otpRequestFulfilled,
  props: props,
});
const mapDispatchTo = {
  reducerAction,
  setPhoneNumber,
  requestOtp,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(LoginOrRegister)
);
