import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {AppbarContainer, AppbarHeader, MyList} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";

export default function AppbarDesktop({ matches }) {
  
    return (
    <AppbarContainer>
        <AppbarHeader>My Shopping!</AppbarHeader>
        <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
            <ListItemIcon>
                <SearchIcon/>
            </ListItemIcon>
        </ListItemButton>
        </MyList>
    </AppbarContainer>
    );
  }