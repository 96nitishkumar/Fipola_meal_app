import { Component } from "react";
import { RootState } from "../../redux/Store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  IState,
  reducerAction,
  registerNewUser,
  requestOtp,
  setPhoneNumber,
} from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import clock from "../../assets/oldOrders/Watch later.png";
import { connect } from "react-redux";
import {
  Avatar,
  AvatarGroup,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import chicken from "../../assets/categories/Ellipse 9 (10).png";
import fish from "../../assets/categories/Ellipse 9 (5).png";
import mutton from "../../assets/categories/Ellipse 9 (1).png";
import { orderHistoryStyles } from "./OrderHistoryStyles";
import { NavigateFunction } from "react-router-dom";

interface Orders {
  cartItems: {
    home: boolean;
    id: number;
    image: string;
    newPrice: number;
    oldPrice: number;
    quantity: number;
    title: string;
  }[];
  date: number;
  orderId: number;
  totalPrice: number;
}
interface Istate {
  orderHistory: Orders[][];
}
interface Iprops {
  count: IState["data"];
  phoneNumber: string;
  props: Object;
  navigate: NavigateFunction;
}
class OrderHistory extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = { orderHistory: [] };
  }
  historyOfOrders = () => {
    const tempOrderData: Orders[] = [
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: 1720090554770,
        orderId: 1720090554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: Date.now(),
        orderId: 1720090554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: Date.now() + 600000,
        orderId: 1720090554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: false,
            id: 6,
            image: "/static/media/img (17).c13fb39112adecaa0ea2.png",
            newPrice: 177,
            oldPrice: 200,
            quantity: 1,
            title: "Chicken Drumstick Skinless",
          },
        ],
        date: 1720090635087,
        orderId: 1720090635087,
        totalPrice: 708,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: 1722090554770,
        orderId: 1720040554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: 1721070554770,
        orderId: 1720090554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: 1722190554770,
        orderId: 1720040554770,
        totalPrice: 371,
      },
      {
        cartItems: [
          {
            home: true,
            id: 13,
            image: "/static/media/eggs.a8fe284e1d24d41e3a3d.png",
            newPrice: 173,
            oldPrice: 200,
            quantity: 1,
            title: "Country Egg Pack",
          },
        ],
        date: 1722095547700,
        orderId: 1720040554770,
        totalPrice: 371,
      },
    ];
    let dates: string[] = [];
    const newArr: Orders[][] = tempOrderData
      .sort((a, b) => a.date - b.date)
      .reduce((acc: Orders[][], curr) => {
        const indx = dates.indexOf(new Date(curr.date).toLocaleDateString());
        if (indx === -1) {
          dates.push(new Date(curr.date).toLocaleDateString());
          acc.push([curr]);
        } else {
          acc[indx].push(curr);
        }
        return acc;
      }, []);
    this.setState({ orderHistory: newArr });
  };
  dateinOurReqFormat = (datems: number) => {
    let date1 = new Date(datems);
    let formatDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
    });
    const dateReq = formatDate.format(date1).split("-").join(" ");
    let formatDay = new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
    });
    return formatDay.format(date1) + " , " + dateReq;
  };
  navigateToOrder = () => {
    this.props.navigate("/currentorder");
  };

  componentDidMount() {
    this.historyOfOrders();
  }

  render() {
    return (
      <Box>
        <Box sx={orderHistoryStyles.mainBody}>
          <Box sx={orderHistoryStyles.internalBoxHeader}>
            <ArrowBackIcon />
            <Typography sx={orderHistoryStyles.title}>Order History</Typography>
            <Box></Box>
          </Box>
        </Box>

        <Box>
          {this.state.orderHistory.length > 0 ? (
            this.state.orderHistory.map((each, indx) => (
              <Box sx={{ width: "100%" }} key={indx}>
                <Typography sx={orderHistoryStyles.date}>
                  {this.dateinOurReqFormat(each[0].date)}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-around"}
                  flexWrap={"wrap"}
                  gap={"10px"}
                >
                  {each.map((each2, idx2) => (
                    <Paper
                      key={idx2}
                      sx={orderHistoryStyles.OderContainerPaper}
                      onClick={this.navigateToOrder}
                      data-testid="orderDescription"
                    >
                      <Typography sx={orderHistoryStyles.orderNumber}>
                        Order# {each2.orderId}
                      </Typography>
                      <Typography sx={orderHistoryStyles.price}>
                        {" "}
                        ₹389.00
                      </Typography>
                      <Box sx={orderHistoryStyles.imagesAndTimeCOntainer}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          gap={"5px"}
                        >
                          <Box
                            width={"16px"}
                            height={"16px"}
                            component={"img"}
                            sx={{ boxShadow: "1px 1px 30px 4px #0000001A" }}
                            src={clock}
                            alt="clock Img"
                          />
                          <Typography sx={orderHistoryStyles.timeText}>
                            03:25 PM
                          </Typography>
                        </Stack>
                        <AvatarGroup max={3}>
                          <Avatar alt="order2">
                            <Box
                              width={"100%"}
                              height={"100%"}
                              component={"img"}
                              src={chicken}
                            />
                          </Avatar>
                          <Avatar alt="order2">
                            <Box
                              width={"100%"}
                              height={"100%"}
                              component={"img"}
                              src={fish}
                            />
                          </Avatar>{" "}
                          <Avatar alt="order3">
                            <Box
                              width={"100%"}
                              height={"100%"}
                              component={"img"}
                              src={mutton}
                            />
                          </Avatar>
                        </AvatarGroup>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Box>
            ))
          ) : (
            <Box sx={{ width: "100%" }}>
              <Typography sx={orderHistoryStyles.date}>
                Sunday , 3 April 2022{" "}
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
                gap={"10px"}
              >
                <Paper sx={orderHistoryStyles.OderContainerPaper}>
                  <Typography sx={orderHistoryStyles.orderNumber}>
                    Order# ORD00003
                  </Typography>
                  <Typography sx={orderHistoryStyles.price}>
                    {" "}
                    ₹389.00
                  </Typography>
                  <Box sx={orderHistoryStyles.imagesAndTimeCOntainer}>
                    <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                      <Box
                        width={"16px"}
                        height={"16px"}
                        component={"img"}
                        sx={{ boxShadow: "1px 1px 30px 4px #0000001A" }}
                        src={clock}
                        alt="clock Img"
                      />
                      <Typography sx={orderHistoryStyles.timeText}>
                        03:25 PM
                      </Typography>
                    </Stack>
                    <AvatarGroup max={3}>
                      <Avatar alt="order2">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={chicken}
                        />
                      </Avatar>
                      <Avatar alt="order2">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={fish}
                        />
                      </Avatar>{" "}
                      <Avatar alt="order3">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={mutton}
                        />
                      </Avatar>
                    </AvatarGroup>
                  </Box>
                </Paper>
                <Paper sx={orderHistoryStyles.OderContainerPaper}>
                  <Typography sx={orderHistoryStyles.orderNumber}>
                    Order# ORD00003
                  </Typography>
                  <Typography sx={orderHistoryStyles.price}>
                    {" "}
                    ₹389.00
                  </Typography>
                  <Box sx={orderHistoryStyles.imagesAndTimeCOntainer}>
                    <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                      <Box
                        width={"16px"}
                        height={"16px"}
                        component={"img"}
                        sx={{ boxShadow: "1px 1px 30px 4px #0000001A" }}
                        src={clock}
                        alt="clock Img"
                      />
                      <Typography sx={orderHistoryStyles.timeText}>
                        03:25 PM
                      </Typography>
                    </Stack>
                    <AvatarGroup max={3}>
                      <Avatar alt="order2">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={chicken}
                        />
                      </Avatar>
                      <Avatar alt="order2">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={fish}
                        />
                      </Avatar>{" "}
                      <Avatar alt="order3">
                        <Box
                          width={"100%"}
                          height={"100%"}
                          component={"img"}
                          src={mutton}
                        />
                      </Avatar>
                    </AvatarGroup>
                  </Box>
                </Paper>
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState, props: object) => ({
  count: state.state.data,
  phoneNumber: state.state.loginPhoneNumber,
  props: props,
});
const mapDispatchTo = {};
export default WithRoutingHoc(
  connect(mapStateToProps, mapDispatchTo)(OrderHistory)
);
