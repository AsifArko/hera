import * as React from 'react';
import {Avatar} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#8cf350',
    color: '#8cf350',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function User(){
  return <>
    <Toolbar >
      <div
        className='user'>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar sx={{ width: 40, height: 40 }} src={`/src/assets/avatar/circular.jpg`}/>

        </StyledBadge>
        <label
          className={'user-name'}>
          Rahat
        </label>
      </div>
    </Toolbar>
  </>
}