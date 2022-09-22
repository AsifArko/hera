import * as React from 'react'
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import BallotIcon from '@mui/icons-material/Ballot';
import CategoryIcon from '@mui/icons-material/Category';
import ViewListIcon from '@mui/icons-material/ViewList';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HailIcon from '@mui/icons-material/Hail';

export default function MenuItems() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/profile">
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/sales">
            <ListItemIcon>
              <BallotIcon/>
            </ListItemIcon>
            <ListItemText primary={"Sales"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href={"/inventory"}>
            <ListItemIcon>
              <InventoryIcon/>
            </ListItemIcon>
            <ListItemText primary={"Inventory"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/customers">
            <ListItemIcon>
              <Diversity3Icon/>
            </ListItemIcon>
            <ListItemText primary={"Customers"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/statistics">
            <ListItemIcon>
              <InsertChartOutlinedSharpIcon/>
            </ListItemIcon>
            <ListItemText primary={"Statistics"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/investors">
            <ListItemIcon>
              <HailIcon/>
            </ListItemIcon>
            <ListItemText primary={"Investors"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/investments">
            <ListItemIcon>
              <BusinessCenterIcon/>
            </ListItemIcon>
            <ListItemText primary={"Investments"} />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/orders">
            <ListItemIcon>
              <ViewListIcon/>
            </ListItemIcon>
            <ListItemText primary={"Orders"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={"a"} href={'/products'}>
            <ListItemIcon>
              <FormatListBulletedIcon/>
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/categories">
            <ListItemIcon>
              <CategoryIcon/>
            </ListItemIcon>
            <ListItemText primary={"Categories"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/payments">
            <ListItemIcon>
              <CreditCardIcon/>
            </ListItemIcon>
            <ListItemText primary={"Payments"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/reviews">
            <ListItemIcon>
              <RateReviewOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary={"Reviews"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/settings">
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )
}