import * as React from "react";
import Nav from "../../../interfaces/nav";
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListIcon from "@mui/icons-material/ViewList";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BallotIcon from "@mui/icons-material/Ballot";
import InventoryIcon from "@mui/icons-material/Inventory";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import HailIcon from "@mui/icons-material/Hail";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const settings: Array<Nav> = [
  {
    path: '/settings',
    label: 'Settings',
    component: <SettingsIcon/>
  }
]

export const ecommerce: Array<Nav> = [
  {
    path: '/orders',
    label: 'Orders',
    component: <ViewListIcon/>
  },
  {
    path: '/products',
    label: 'Products',
    component: <FormatListBulletedIcon/>
  },
  {
    path: '/categories',
    label: 'Categories',
    component: <CategoryIcon/>
  },
  {
    path: '/payments',
    label: 'Payments',
    component: <CreditCardIcon/>
  },
  {
    path: '/reviews',
    label: 'Reviews',
    component: <RateReviewOutlinedIcon/>
  }
]

export const analysis: Array<Nav> = [
  {
    path: '/',
    label: 'Dashboard',
    component: <HomeIcon/>
  },

  {
    path: '/profile',
    label: 'Profile',
    component: <PersonIcon/>
  },

  {
    path: '/sales',
    label: 'Sales',
    component: <BallotIcon/>
  },

  {
    path: '/inventory',
    label: 'Inventory',
    component: <InventoryIcon/>
  },

  {
    path: '/customers',
    label: 'Customers',
    component: <Diversity3Icon/>
  },

  {
    path: '/statistics',
    label: 'Statistics',
    component: <InsertChartOutlinedSharpIcon/>
  },

  {
    path: '/investors',
    label: 'Investors',
    component: <HailIcon/>
  },

  {
    path: '/investments',
    label: 'Investments',
    component: <BusinessCenterIcon/>
  },
]