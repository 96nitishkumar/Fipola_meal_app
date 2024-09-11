import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import singleProductImgs from "../../assets/singleProduct/Rectangle 95.png";
import { singleProductStyles } from "./SingleProductStyles";
import { RootState } from "../../redux/Store";
import { reducerAction, requestOtp, setPhoneNumber } from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";

class SingleProduct extends Component {
  render() {
    return (
      <Box sx={singleProductStyles.componentBody}>
        <Box sx={singleProductStyles.swiperContainer}>
          <Swiper
            style={singleProductStyles.mainSwiperStyles}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Box
                component={"img"}
                src={singleProductImgs}
                width="100%"
                alt="we"
                height="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box
                component={"img"}
                src={singleProductImgs}
                alt="we"
                width="100%"
                height="100%"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box
                component={"img"}
                src={singleProductImgs}
                alt="we"
                width="100%"
                height="100%"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Paper elevation={2} sx={singleProductStyles.paperStyles}>
          <Box sx={singleProductStyles.wholeDetailsBox}>
            <Typography sx={singleProductStyles.mainDescription}>
              Country Eggs Pack
            </Typography>
            <Typography sx={singleProductStyles.costOfProduct}>
              {" "}
              ₹173.00{" "}
              <Box component={"span"} sx={singleProductStyles.discount}>
                {" "}
                200.00
              </Box>
            </Typography>
            <Typography sx={singleProductStyles.description}>
              High in quality protein and Vitamins nutritious pack to improve
              your health
            </Typography>
            <Box sx={singleProductStyles.detailsNdNumericals}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={{ md: "100%" }}
              >
                <Typography sx={singleProductStyles.subTotal}>
                  Pieces
                </Typography>
                <Typography sx={singleProductStyles.subTotal2}>12</Typography>
              </Stack>
              <Divider />
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography sx={singleProductStyles.subTotal}>Packs</Typography>
                <Typography sx={singleProductStyles.subTotal2}>
                  2 Pack
                </Typography>
              </Stack>
            </Box>
            <Box sx={singleProductStyles.incrementAndQntyContainer}>
              <Button sx={singleProductStyles.incrementOrDecrementBtn}>
                -
              </Button>{" "}
              <Divider sx={singleProductStyles.divider} flexItem />
              <Typography sx={singleProductStyles.quantity}>01</Typography>
              <Divider sx={singleProductStyles.divider} flexItem />
              <Button sx={singleProductStyles.incrementOrDecrementBtn}>
                +
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
});
const mapDispatchTo = {
  reducerAction,
  setPhoneNumber,
  requestOtp,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(SingleProduct)
);
