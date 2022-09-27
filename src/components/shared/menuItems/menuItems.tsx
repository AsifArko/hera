import * as React from 'react'
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from 'react-router-dom'
import {analysis, ecommerce, settings} from "./menuList";
import './menuItems.css'

export default function MenuItems() {
  return (
    <div>
      <Divider />

      <List>{analysis.map((item, idx) => {
        return (
          <Link to={item.path} key={`analysis:${idx}`}>
            <ListItem disablePadding>
              <ListItemButton alignItems={'flex-start'}>
                  <div className={'list-item-button'}>
                    <ListItemIcon className='nav-icon' style={{margin: '0px', minWidth: '50px'}}>
                      {item.component}
                    </ListItemIcon>
                    <ListItemText primary={item.label} style={{marginTop: '1.5px', color: '#4a4949'}}/>
                  </div>
                </ListItemButton>
            </ListItem>
          </Link>
        )
      })}</List>

      <Divider />

      <List>{ecommerce.map((item, idx) => {
          return (
            <Link to={item.path} key={`ecom:${idx}`}>
              <ListItem disablePadding>
                  <ListItemButton alignItems={'flex-start'}>
                    <div className={'list-item-button'}>

                    <ListItemIcon style={{margin: '0px', minWidth: '50px'}}>
                      {item.component}
                    </ListItemIcon>
                    <ListItemText primary={item.label} style={{marginTop: '1.5px', color: '#4a4949'}}/>
                    </div>
                  </ListItemButton>
              </ListItem>
            </Link>
          )
        })}</List>

      <Divider />

      <List>{settings.map((item, idx) => {
          return (
            <Link to={item.path} key={`settings:${idx}`}>
              <ListItem disablePadding>
                  <ListItemButton alignItems={'flex-start'}>
                    <div className={'list-item-button'}>

                    <ListItemIcon style={{margin: '0px', minWidth: '50px'}}>
                      {item.component}
                    </ListItemIcon>
                    <ListItemText primary={item.label} style={{marginTop: '1.5px', color: '#4a4949'}} />
                    </div>
                  </ListItemButton>
              </ListItem>
            </Link>
          )
      })}</List>
    </div>
  )
}