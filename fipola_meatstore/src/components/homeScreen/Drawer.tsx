import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import mainLogo from "../../assets/homeScreen/logo.png";
import navImg1 from "../../assets/homeScreen/Home.png";
import navImg2 from "../../assets/homeScreen/info 1.png";
import navImg3 from "../../assets/homeScreen/interrogation 1.png";
import navImg4 from "../../assets/homeScreen/headset 1.png";
import navImg5 from "../../assets/homeScreen/truck-side 1.png";
import navImg6 from "../../assets/homeScreen/time-past 1.png";
import navImg7 from "../../assets/homeScreen/document 1.png";
import navImg8 from "../../assets/homeScreen/assept-document 1.png";
import navImg9 from "../../assets/homeScreen/shop 1.png";
import { styled } from "./DrawerStyles";

export const navbarList = [
  {
    id: 1,
    navText: "Home",
    imageUrl: navImg1,
    isActive: true,
  },
  {
    id: 2,
    navText: "About us",
    imageUrl: navImg2,
    isActive: false,
  },
  {
    id: 3,
    navText: "FAQ`s",
    imageUrl: navImg3,
    isActive: false,
  },
  {
    id: 4,
    navText: "Contact",
    imageUrl: navImg4,
    isActive: false,
  },
  {
    id: 5,
    navText: "Fipola on wheels",
    imageUrl: navImg5,
    isActive: false,
  },
  {
    id: 6,
    navText: "Order History",
    imageUrl: navImg6,
    isActive: false,
  },
  {
    id: 7,
    navText: "Term & Conditions",
    imageUrl: navImg7,
    isActive: false,
  },
  {
    id: 8,
    navText: "Certficates",
    imageUrl: navImg8,
    isActive: false,
  },
  {
    id: 9,
    navText: "Franchise",
    imageUrl: navImg9,
    isActive: false,
  },
];

class DrawerPage extends Component {
  state = {
    open: false,
    navList: navbarList,
  };

  toggleDrawer = () => {
    this.setState({ open: true });
  };

  handleNavItems = (itemId: number) => {
    let newNavList = this.state.navList.map((item) => {
      if (item.id === itemId) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });

    this.setState({
      navList: newNavList,
    });
  };

  render() {
    return (
      <Box
        sx={styled.bgToggleCon}
        role="presentation"
        onClick={this.toggleDrawer}
      >
        <Box sx={styled.logoContainer}>
          <Box sx={styled.imageContainer}>
            <Box component="img" src={mainLogo} sx={styled.logo} alt="home" />
          </Box>
        </Box>
        {this.state.navList.map((text, index) => (
          <List sx={styled.listContainer} key={index}>
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Box
                    component="img"
                    src={text.imageUrl}
                    sx={styled.iconLogo}
                    alt="home"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={text.isActive ? styled.activeText : styled.navText}
                      onClick={() => this.handleNavItems(text.id)}
                    >
                      {text.navText}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={text.id === 9 ? styled.dividerNone : styled.divider} />
          </List>
        ))}
        <Button sx={styled.signOutBtn}>Sign out</Button>
        <Typography sx={styled.version}>App Version 3.4.7</Typography>
      </Box>
    );
  }
}

export default DrawerPage;
