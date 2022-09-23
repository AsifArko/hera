import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuItems  from "../menuItems/menuItems";
import Button from "@mui/material/Button";
import "./nav.css";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Nav(props: Props) {
  const drawer = MenuItems()

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        color={"inherit"}
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar style={{color: 'black', display: "flex", justifyContent:'space-between'}}>
          <img
            src={`/src/assets/avatar/helmet.png`}
            style={{width: '30px', height: '30px'}}
            loading="lazy"
          />
          <Button variant="outlined" sx={{ mt: 1, mb: 1.5 }}>
            sign out
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}