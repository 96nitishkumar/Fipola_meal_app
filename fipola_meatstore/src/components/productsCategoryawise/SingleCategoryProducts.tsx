import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { singleProductStyles } from "../singleProduct/SingleProductStyles";
import { RootState } from "../../redux/Store";
import { colorPallete } from "../../environment/ColorsAndStyles";
import { NavigateFunction } from "react-router-dom";
import { ConnectedProps, connect } from "react-redux";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { IState, changeQnty } from "../../redux/Reducer";
import { singleProductCategoryWise } from "../../environment/Data";
import { singleProductCategoryStyles } from "./SingleCategoryProductsStyles";
import TabComponent from "../homeScreen/TabComponent";

interface Iprops {
  navigate: NavigateFunction;

  phoneNumber?: string;
  props?: Object;
  cart: IState["singleCategoryChickens"];
  chickensArr: IState["singleCategoryChickens"];
  changeQnty: (obj: { action: string; name: string }) => void;
}

class SingleCategoryProducts extends Component<Iprops> {
  navigateHome = () => {
    this.props.navigate("/home");
  };
  render() {
    return (
      <Box sx={singleProductCategoryStyles.body}>
        <Box sx={singleProductCategoryStyles.header}>
          <ArrowBackIcon
            sx={singleProductCategoryStyles.arrowBackIcon}
            onClick={() => this.navigateHome()}
            data-testid="homeButton"
          />
          <Typography sx={singleProductCategoryStyles.categoryTitle}>
            chicken
          </Typography>
          <Box></Box>
        </Box>
        <Box sx={{ marginTop: "-10px" }}>
          <TabComponent />
        </Box>
        <Grid container sx={singleProductCategoryStyles.productsContainerGrid}>
          {this.props.chickensArr.map((each) => (
            <Grid
              item
              xs={5.5}
              sm={3.5}
              key={each.name}
              sx={singleProductCategoryStyles.singleProductGridItem}
            >
              <Box component={"img"} src={each.image} alt={each.name} />
              <Typography>{each.name}</Typography>
              <Typography sx={singleProductStyles.costOfProduct}>
                {" "}
                ₹173.00{" "}
                <Box component={"span"} sx={singleProductStyles.discount}>
                  {" "}
                  200.00
                </Box>
              </Typography>
              <Box sx={singleProductStyles.incrementAndQntyContainer}>
                <Button
                  sx={singleProductStyles.incrementOrDecrementBtn}
                  onClick={() =>
                    this.props.changeQnty({
                      action: "decrement",
                      name: each.name,
                    })
                  }
                  data-testid="decrementButton"
                >
                  -
                </Button>{" "}
                <Divider sx={singleProductStyles.divider} flexItem />
                <Typography
                  sx={singleProductStyles.quantity}
                  data-testid="quantityText"
                >
                  {each.quantity}
                </Typography>
                <Divider sx={singleProductStyles.divider} flexItem />
                <Button
                  sx={singleProductStyles.incrementOrDecrementBtn}
                  onClick={() =>
                    this.props.changeQnty({
                      action: "increment",
                      name: each.name,
                    })
                  }
                  data-testid="incrementButton"
                >
                  +
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state: RootState, props: Object) => ({
  phoneNumber: state.state.loginPhoneNumber,
  chickensArr: state.state.singleCategoryChickens,
  cart: state.state.cart,
  props: props,
});

const mapDispatchToProps = {
  changeQnty,
};

export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchToProps)(SingleCategoryProducts)
);
