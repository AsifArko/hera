import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const Header = () => {
  return <AppBar
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
        <Button
          variant="outlined"
          sx={{ mt: 1, mb: 1.5 }}
        >
          sign out
        </Button>
      </Toolbar>
    </AppBar>
}

export default Header