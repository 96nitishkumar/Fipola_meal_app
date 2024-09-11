import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Component } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import img1 from "../../assets/messages/Ellipse 18.png";
import { styles } from "./MessagePageStyles";
import { globalStyles } from "../homeScreen/HomeStyles";
import Close from "@mui/icons-material/Close";

const preContent = [
  "order related query",
  "delivery related query",
  "pickup related query",
  "refund related query",
];

export default class MessagesScreen extends Component {
  componentDidMount(): void {
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/667e8cb79d7f358570d45b55/1i1f5bbro";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode!.insertBefore(s1, s0);
    })();
  }
  render() {
    return (
      <Stack sx={styles.mainContainer}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={globalStyles.cardNavBar}
        >
          <Typography variant="h6" sx={globalStyles.boldPara}>
            fipola
          </Typography>
          <IconButton sx={styles.closeIcon}>
            <Close />
          </IconButton>
        </Stack>
        <Box sx={styles.chatContainer}>
          <Typography variant="body1" sx={styles.datePara}>
            27 June, 2024
          </Typography>
          <Stack
            direction={"row"}
            width={"100%"}
            columnGap={2}
            justifyContent={"flex-start"}
          >
            <Box component={"img"} src={img1} sx={styles.fipolaImage} />
            <Typography variant="body1" sx={styles.fipolaPara}>
              Hey, welcome to fipola, how may i help you today?{" "}
              <Box component={"span"} sx={styles.leftArrow} />
            </Typography>
          </Stack>
          <Typography variant="body1" sx={styles.ownPara}>
            Hey, i need you
            <Box component={"span"} sx={styles.rightArrow} />
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={styles.contentContainer}
          width={"100%"}
          columnGap={2}
        >
          {preContent.map((text) => (
            <Typography variant="h6" sx={styles.content} key={text}>
              {text}
            </Typography>
          ))}
        </Stack>
        <TextField
          fullWidth
          placeholder="Type Your Message"
          sx={styles.inputField}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AttachFileIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    );
  }
}
