import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import watchlater from "../../../src/assets/currentOrder/Watch later.png";
import calender from "../../../src/assets/currentOrder/Vector (1).png";
import chicken from "../../../src/assets/currentOrder/img.png";
import { globalStyles } from "../homeScreen/HomeStyles";
import { colorPallete } from "../../environment/ColorsAndStyles";
import { RootState } from "../../redux/Store";
import { changeQnty, IState } from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { styles } from "./SingleOrderHistoryStyles";

interface Iprops {
  navigate: NavigateFunction;
  changeQnty: (data: { action: string; name: string }) => void;
  cart: IState["cart"];
  props: Object;
}

class SingleOrderHistory extends Component<Iprops> {
  retunToOrderHistory = () => {
    this.props.navigate("/orderHistory");
  };

  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Stack
          direction={"row"}
          width={"100%"}
          alignItems={"flex-start"}
          sx={styles.cardNavBar}
        >
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ArrowBackIcon
              onClick={this.retunToOrderHistory}
              data-testid="arrowBack"
            />
            <Typography
              variant="h6"
              sx={{ ...globalStyles.boldPara, flexGrow: 1 }}
            >
              Order history
            </Typography>
          </Stack>
        </Stack>
        <Stack rowGap={1} sx={styles.changeFlex} width={"100%"}>
          <Stack rowGap={1} sx={styles.subFlexContainer}>
            <Stack width={"100%"} rowGap={1} sx={styles.cardParentContainer}>
              <Typography
                variant="body1"
                sx={{
                  ...globalStyles.boldPara,
                  opacity: 0.9,
                  textAlign: { sm: "left" },
                }}
              >
                sunday, 3 april 2022
              </Typography>
              <Card sx={styles.cardContainer}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      ...globalStyles.boldPara,
                      textAlign: "left",
                      fontSize: "0.9rem",
                    }}
                  >
                    order# ORD00003
                  </Typography>
                  <Stack direction={"row"} columnGap={3} width={"100%"}>
                    <Stack>
                      <Typography variant="body1" sx={styles.price}>
                        ₹389.00
                      </Typography>
                      <Stack
                        direction={"row"}
                        columnGap={3}
                        alignItems={"center"}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          columnGap={1}
                        >
                          <Box
                            component={"img"}
                            src={watchlater}
                            sx={styles.watchImage}
                          />
                          <Typography variant="body1" sx={styles.timePara}>
                            03:25 PM
                          </Typography>
                        </Stack>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          columnGap={1}
                        >
                          <Box
                            component={"img"}
                            src={calender}
                            sx={styles.watchImage}
                          />
                          <Typography variant="body1" sx={styles.timePara}>
                            3 April 2024
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
            <Stack rowGap={2} sx={styles.cardParentContainer}>
              <Typography variant="h6" sx={globalStyles.boldPara}>
                Ordered product
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                columnGap={2}
                rowGap={2}
                sx={styles.ordersContainer}
              >
                {new Array(3).fill("").map((_, index) => (
                  <Card key={index} sx={styles.card}>
                    <CardMedia>
                      <Box
                        component={"img"}
                        src={chicken}
                        sx={styles.cardImages}
                      />
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
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Card sx={styles.cardWidth}>
            <CardContent>
              <Stack rowGap={2} width={"100%"} sx={styles.priceDescription}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="body1" sx={globalStyles.greyPara}>
                    subtotal
                  </Typography>
                  <Typography variant="body1" sx={globalStyles.boldPara}>
                    ₹389.00
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="body1" sx={globalStyles.greyPara}>
                    delivery charges
                  </Typography>
                  <Typography variant="body1" sx={globalStyles.boldPara}>
                    ₹0
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="body1" sx={globalStyles.boldPara}>
                    subtotal
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      ...globalStyles.boldPara,
                      color: colorPallete.backgroundRed,
                    }}
                  >
                    ₹389.00
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: Object) => ({
  cart: state.state.cart,
  props: props,
});

const mapDispatchToProps = {
  changeQnty,
};

export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchToProps)(SingleOrderHistory)
);
