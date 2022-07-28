import { ListItemText } from "@mui/material";
import {AppbarContainer, AppbarHeader, MyList} from "../../styles/appbar";

export default function AppbarDesktop({ matches }) {
  
    return (
    <AppbarContainer>
        <AppbarHeader>My Shopping!</AppbarHeader>
        <MyList type="rown">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        </MyList>
    </AppbarContainer>
    );
  }