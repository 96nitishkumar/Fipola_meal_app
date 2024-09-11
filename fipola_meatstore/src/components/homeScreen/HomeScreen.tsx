import {
  Backdrop,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { globalStyles, styles } from "./HomeStyles";
import logo from "../../assets/homeScreen/logo.png";
import profile from "../../assets/homeScreen/Ellipse 7.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/homeScreen/2.png";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import biryani from "../../assets/homeScreen/Rectangle 90.png";
import truck from "../../assets/homeScreen/img.png";
import eggs from "../../assets/homeScreen/img (1).png";
import Home from "../../assets/categories/home (1) 1.png";
import options from "../../assets/categories/2.png";
import cart from "../../assets/categories/shopping-cart (1) 1.png";
import AddIcon from "@mui/icons-material/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import { RootState } from "../../redux/Store";
import { reducerAction, requestOtp, setPhoneNumber } from "../../redux/Reducer";
import menu from "../../assets/homeScreen/Segment.png";
import location from "../../assets/homeScreen/Location on.png";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import DrawerPage from "./Drawer";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import HeadsetIcon from "@mui/icons-material/Headset";
import { colorPallete } from "../../environment/ColorsAndStyles";
import TabComponent from "./TabComponent";
import { NavigateFunction } from "react-router-dom";
const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];
interface Iprops {
  navigate: NavigateFunction;
  count: [];
  phoneNumber: string;
  cart: {
    image: string;
    name: string;
    quantity: number;
  }[];
}

class HomeScreen extends Component<Iprops> {
  state = {
    open: false,
    isOpenSpeedDail: false,
  };
  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };
  handleCloseSpeedDail = () => {
    this.setState({ isOpenSpeedDail: false });
  };
  handleOpenSpeedDail = () => {
    this.setState({ isOpenSpeedDail: true });
  };
  moveToSpecicCategory = () => {
    this.props.navigate("/SingleCategoryProduct");
  };
  navigateToCart = () => {
    this.props.navigate("/cartPage");
  };
  render() {
    return (
      <Box sx={{ position: "relative" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={styles.navigationContainer}
        >
          <Drawer open={this.state.open} onClose={this.toggleDrawer}>
            <DrawerPage />
          </Drawer>

          <IconButton sx={styles.burgerMenuButton} onClick={this.toggleDrawer}>
            <Box component={"img"} src={menu} />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
          <Box component={"img"} src={logo} sx={styles.logoImage} />
          <Box component={"img"} src={profile} sx={styles.profileImage} />
        </Stack>
        <Stack rowGap={2} sx={styles.mainSwiperContainer}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            columnGap={2}
            justifyContent={"space-between"}
            sx={styles.shadow}
          >
            <TextField
              sx={styles.textField}
              fullWidth
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={styles.searchImage} />
                  </InputAdornment>
                ),
              }}
            />
            <Divider
              flexItem
              sx={{ border: "0.5px solid #A4A1A1", opacity: "0.2" }}
            />
            <Stack direction={"row"} columnGap={1} alignItems={"center"}>
              <Box component={"img"} src={location} sx={styles.locationImage} />
              <Typography variant="body1" sx={globalStyles.greyPara}>
                500042
              </Typography>
            </Stack>
          </Stack>
          <TabComponent />
          <Paper elevation={0}>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              style={styles.swiperContainer}
            >
              <SwiperSlide>
                <Box component={"img"} src={img1} sx={styles.swiperWidth} />
              </SwiperSlide>
              <SwiperSlide>
                <Box component={"img"} src={img1} sx={styles.swiperWidth} />
              </SwiperSlide>
              <SwiperSlide>
                <Box component={"img"} src={img1} sx={styles.swiperWidth} />
              </SwiperSlide>
              <SwiperSlide>
                <Box component={"img"} src={img1} sx={styles.swiperWidth} />
              </SwiperSlide>
            </Swiper>
          </Paper>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"90%"}
              margin={"auto"}
            >
              <Typography variant="h6" sx={styles.cardHeading}>
                Best seller
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "100%",
                overflowX: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: {
                  xs: "",
                  sm: "space-between",
                  md: "space-around",
                },
                gap: "10px",
                alignItems: "center",
                msOverflowX: "auto",
              }}
            >
              {["a", "b,", "c"].map((_, index) => (
                <Card
                  sx={styles.cardContainer}
                  key={index}
                  onClick={() => this.moveToSpecicCategory()}
                >
                  <CardMedia>
                    <Box component={"img"} src={eggs} sx={styles.cardImages} />
                  </CardMedia>
                  <CardContent sx={styles.cardContentContainer}>
                    <Stack rowGap={0.2} width={"100%"}>
                      <Typography variant="h6" sx={styles.cardPara}>
                        Country eggs pack
                      </Typography>
                      <Typography variant="h6">
                        <Box component={"span"} sx={styles.recentPrice}>
                          ₹173.00
                        </Box>{" "}
                        <Box component={"span"} sx={styles.oldPrice}>
                          ₹200.00
                        </Box>
                      </Typography>
                      <Button disableRipple sx={styles.cardButton}>
                        <Stack
                          width={"100%"}
                          height={"inherit"}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <AddIcon sx={styles.iconSize} />
                          </Stack>
                          <Divider flexItem sx={styles.dvd} />
                          <Typography variant="h6">03</Typography>
                          <Divider flexItem sx={styles.dvd} />
                          <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <RemoveIcon sx={styles.iconSize} />
                          </Stack>
                        </Stack>
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
          <Stack rowGap={1.2}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"90%"}
              margin={"auto"}
            >
              <Typography variant="h6" sx={styles.cardHeading}>
                Receipes
              </Typography>
              <ArrowForwardIcon sx={styles.arrowIcon} />
            </Stack>
            <Box
              sx={{
                width: "100%",
                overflowX: "auto",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: {
                  xs: "",
                  sm: "space-between",
                  md: "space-around",
                },
              }}
            >
              {["a", "b", "c"].map((_, index) => (
                <Card sx={styles.cardContainer} key={index}>
                  <CardMedia>
                    <Box
                      component={"img"}
                      src={biryani}
                      sx={styles.cardImages}
                    />
                  </CardMedia>
                  <CardContent sx={styles.cardContentContainer}>
                    <Typography variant="h6" sx={styles.cardPara}>
                      mutton biryani
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
          <Stack rowGap={1.2}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"90%"}
              margin={"auto"}
            >
              <Typography variant="h6" sx={styles.cardHeading}>
                Press corner
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Card>
                <CardMedia>
                  <Box component={"img"} src={truck} sx={styles.cardImages} />
                </CardMedia>
                <CardContent>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{ ...styles.cardPara, textAlign: "center" }}
                    >
                      Fipola on expansion mode, enters Hyderabad with 14 stores
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={styles.recentPrice}>
                    September 09, 2021 | The Hindu
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Stack>
          <Box sx={{ display: { md: "none" } }}>
            <Backdrop open={this.state.isOpenSpeedDail} sx={{ zIndex: "10" }} />
            <SpeedDial
              ariaLabel="SpeedDial openIcon example"
              sx={{
                position: "fixed",
                bottom: 66,
                right: 16,
                "& .MuiSpeedDial-fab": {
                  background: this.state.isOpenSpeedDail
                    ? "white"
                    : colorPallete.backgroundRed,
                },
              }}
              icon={
                this.state.isOpenSpeedDail ? (
                  <CloseIcon sx={{ color: "black" }} />
                ) : (
                  <HeadsetIcon />
                )
              }
              open={this.state.isOpenSpeedDail}
              onClose={this.handleCloseSpeedDail}
              onOpen={this.handleOpenSpeedDail}
            >
              <SpeedDialAction
                icon={<MessageIcon sx={{ color: "white" }} />}
                sx={{ background: colorPallete.messageYellow }}
              />
              <SpeedDialAction
                icon={<WhatsAppIcon sx={{ color: "white" }} />}
                sx={{ background: colorPallete.whatsappGreen }}
              />{" "}
            </SpeedDial>
          </Box>

          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"100%"}
            sx={styles.footerContainer}
          >
            <Box component={"img"} src={Home} />
            <Box component={"img"} src={options} />
            <Badge badgeContent={this.props.cart.length} color="error" showZero>
              <Box
                component={"img"}
                src={cart}
                sx={styles.cartImage}
                onClick={this.navigateToCart}
              />
            </Badge>
          </Stack>
        </Stack>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
  cart: state.state.cart,
});
const mapDispatchTo = {
  reducerAction,
  setPhoneNumber,
  requestOtp,
};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(HomeScreen)
);
