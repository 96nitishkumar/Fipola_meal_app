import {
  Badge,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Component } from "react";
import { ourCategoryStyles } from "./OurCategorySyles";
import SearchIcon from "@mui/icons-material/Search";
import chickenImg from "../../assets/categories/Ellipse 9.png";
import lambAndgoat from "../../assets/categories/Ellipse 9 (1).png";
import seaFood from "../../assets/categories/Ellipse 9 (2).png";
import Marinades from "../../assets/categories/Ellipse 9 (3).png";
import ColdCuts from "../../assets/categories/Ellipse 9 (4).png";
import ReadyToFry from "../../assets/categories/Ellipse 9 (5).png";
import Relishes from "../../assets/categories/Ellipse 9 (6).png";
import Eggs from "../../assets/categories/Ellipse 9 (7).png";
import Combos from "../../assets/categories/Ellipse 9 (8).png";
import bbqCorner from "../../assets/categories/Ellipse 9 (9).png";
import Imported from "../../assets/categories/Ellipse 9 (10).png";
import DryFish from "../../assets/categories/Ellipse 9 (13).png";
import GrillHouse from "../../assets/categories/Ellipse 9 (14).png";
import Vegan from "../../assets/categories/Ellipse 9 (15).png";
import Home from "../../assets/categories/home (1) 1.png";
import options from "../../assets/categories/2.png";
import cart from "../../assets/categories/shopping-cart (1) 1.png";
import { RootState } from "../../redux/Store";
import { reducerAction, requestOtp, setPhoneNumber } from "../../redux/Reducer";
import WithRoutingHoc from "../hoc/WithRoutingHoc";
import { connect } from "react-redux";
import TabComponent from "../homeScreen/TabComponent";

class OurCategory extends Component {
  render() {
    return (
      <Box sx={ourCategoryStyles.componentBody}>
        <Box sx={ourCategoryStyles.headingYellowContainer}>
          <Typography sx={ourCategoryStyles.heading}>our Category</Typography>
        </Box>
        <TextField
          sx={ourCategoryStyles.SearchingField}
          placeholder="Search..."
          inputProps={{
            style: {
              color: "#000",
              fontWeight: "500",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TabComponent />
        <Box sx={ourCategoryStyles.allMeatsContainer}>
          {dataFordifferentMeats.map((each) => (
            <Box sx={ourCategoryStyles.imgAndDescriptionContainer}>
              <Box component={"img"} src={each.img} alt={each.name} />
              <Typography
                sx={ourCategoryStyles.meatName}
                data-testid="meatsName"
              >
                {each.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={ourCategoryStyles.footer}>
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
  connect(mapStateToProps, mapDispatchTo)(OurCategory)
);

export const dataFordifferentMeats: { name: string; img: string }[] = [
  { name: "Chicken", img: chickenImg },
  { name: "lamb & goat", img: lambAndgoat },
  { name: "Sea Food", img: seaFood },
  { name: "Marinades", img: Marinades },
  { name: "Cold cuts", img: ColdCuts },
  { name: "Ready To Fry", img: ReadyToFry },
  { name: "Relishes", img: Relishes },
  { name: "Eggs", img: Eggs },
  { name: "Combos", img: Combos },
  { name: "BBQ Corner", img: bbqCorner },
  { name: "Imported", img: Imported },
  { name: "Dry Fish", img: DryFish },
  { name: "Grill House", img: GrillHouse },
  { name: "Vegan", img: Vegan },
];
