import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavouriteIcon from "@mui/icons-material/Favorite"

export default function Actions(matches) {
  const Component = matches? ActionIconsContainerMobile : ActionIconsContainerDesktop;
return (
    <MyList type ="row">
    <ListItemButton sx={{justifyContent:"center"}}> 
     <ListItemIcon sx={{display:"flex", justifyContent:"center"}}>
      <ShoppingCartIcon/>
    </ListItemIcon>
    </ListItemButton>
    <Divider orientation="vertical" flexItem />

    <ListItemButton sx={{justifyContent:"center"}}>  
     <ListItemIcon sx={{display:"flex", justifyContent:"center"}}>
      <FavouriteIcon/>
    </ListItemIcon>
    </ListItemButton>

    <ListItemButton sx={{justifyContent:"center"}}> 
    <ListItemIcon sx={{display:"flex", justifyContent:"center"}}>
      <PersonIcon/>
    </ListItemIcon>
    </ListItemButton>
    </MyList>
)





}










