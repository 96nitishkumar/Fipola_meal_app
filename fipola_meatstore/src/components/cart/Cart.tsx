import {
  Badge,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { cartStyles } from "./CartStyles";
import ProductImage from "../../assets/cart/Rectangle 86.png";
import Home from "../../assets/categories/home (1) 1.png";
import options from "../../assets/categories/2.png";
import cart from "../../assets/categories/shopping-cart (1) 1.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "../../redux/Store";
import {
  IState,
  reducerAction,
  requestOtp,
  setPhoneNumber,
} from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import TabComponent from "../homeScreen/TabComponent";
import { NavigateFunction } from "react-router-dom";

interface Iprops {
  cart: IState["singleCategoryChickens"];
  navigate: NavigateFunction;
  phoneNumber: string;
  props: Object;
}

class CartPage extends Component<Iprops> {
  checkout = () => {
    this.props.navigate("/choosepaymentMode");
  };
  render() {
    return (
      <Box sx={cartStyles.componentBody}>
        <Box sx={cartStyles.headingYellowContainer}>
          <Typography sx={cartStyles.cartText}>Cart</Typography>
        </Box>
        <TabComponent />
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box sx={cartStyles.productsContainer}>
            {this.props.cart.length > 0 ? (
              this.props.cart.map((each) => (
                <Paper elevation={2} sx={cartStyles.productDisplayPaper}>
                  <Box sx={cartStyles.imagAndDetailsContainer}>
                    <Box
                      component={"img"}
                      src={ProductImage}
                      alt="productSelected"
                    />
                    <Box sx={cartStyles.productDetailsContainer}>
                      <Typography sx={cartStyles.productTitle}>
                        Country Eggs Pack
                      </Typography>
                      <Typography sx={cartStyles.productPrice}>
                        {" "}
                        ₹173.00{" "}
                        <Box
                          component={"span"}
                          sx={cartStyles.productPricepreDiscount}
                        >
                          {" "}
                          200.00
                        </Box>
                      </Typography>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Box sx={cartStyles.incrementAndDecrementContainer}>
                          <Button
                            sx={cartStyles.incrementOrDecrementBtn}
                            data-testid="decrementBtn"
                          >
                            -
                          </Button>

                          <Typography
                            sx={cartStyles.quantity}
                            data-testid="quantity"
                          >
                            01
                          </Typography>
                          <Divider />
                          <Button
                            sx={cartStyles.incrementOrDecrementBtn}
                            data-testid="incrementBtn"
                          >
                            +
                          </Button>
                        </Box>
                        <DeleteIcon sx={cartStyles.deletIcon} />
                      </Stack>
                    </Box>
                  </Box>
                </Paper>
              ))
            ) : (
              <Paper elevation={2} sx={cartStyles.productDisplayPaper}>
                <Box sx={cartStyles.imagAndDetailsContainer}>
                  <Box
                    component={"img"}
                    src={ProductImage}
                    alt="productSelected"
                  />
                  <Box sx={cartStyles.productDetailsContainer}>
                    <Typography sx={cartStyles.productTitle}>
                      Country Eggs Pack
                    </Typography>
                    <Typography sx={cartStyles.productPrice}>
                      {" "}
                      ₹173.00{" "}
                      <Box
                        component={"span"}
                        sx={cartStyles.productPricepreDiscount}
                      >
                        {" "}
                        200.00
                      </Box>
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box sx={cartStyles.incrementAndDecrementContainer}>
                        <Button
                          sx={cartStyles.incrementOrDecrementBtn}
                          data-testid="decrementBtn"
                        >
                          -
                        </Button>

                        <Typography
                          sx={cartStyles.quantity}
                          data-testid="quantity"
                        >
                          01
                        </Typography>
                        <Divider />
                        <Button
                          sx={cartStyles.incrementOrDecrementBtn}
                          data-testid="incrementBtn"
                        >
                          +
                        </Button>
                      </Box>
                      <DeleteIcon sx={cartStyles.deletIcon} />
                    </Stack>
                  </Box>
                </Box>
              </Paper>
            )}
          </Box>
          <Box sx={cartStyles.priceDetails}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Typography sx={cartStyles.subTotal}>Subtotal</Typography>
              <Typography sx={cartStyles.subTotalPrice}>₹389.00</Typography>
            </Stack>
            <Divider />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography sx={cartStyles.subTotal}>Delivery Charge</Typography>
              <Typography sx={cartStyles.subTotalPrice}>₹0</Typography>
            </Stack>
            <Divider />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography sx={cartStyles.subTotal}>Subtotal</Typography>
              <Typography sx={cartStyles.subTotalPriceRed}>₹389.00</Typography>
            </Stack>

            <Button sx={cartStyles.submitButton} onClick={this.checkout}>
              Check out
            </Button>
          </Box>
        </Box>
        <Box sx={cartStyles.footer}>
          <Box component={"img"} src={Home} alt="homeIcon" />
          <Box component={"img"} src={options} alt="optionsIcon" />
          <Badge color="error" badgeContent={0} showZero>
            <Box component={"img"} src={cart} alt="cartIcon" />
          </Badge>
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
  cart: state.state.cart,
});
const mapDispatchTo = {};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(CartPage)
);
