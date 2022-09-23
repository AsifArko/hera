import * as React from 'react';
import {categories} from "../../data/categories";
import {Chip} from "@mui/material";
import Badge from "@mui/material/Badge";
import {styled} from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#ff3a3a',
    color: '#f45d5d',
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

export default function ItemListProcessor(data: any): JSX.Element {
  if (data && data.key === 'price') {
    return <label>{`৳${data.value}`}</label>
  }

  if (data && data.key === 'thumbnail'){
    return <img
      src={data.value}
      style={{maxWidth: '30px', maxHeight: '30px'}}
      loading="lazy"
    />
  }

  if (data && data.key === 'stock') {
    return data.value > 5 ? <Chip clickable={true} label={data ? data.value : ''} />:
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
      }} variant="dot">
        <Chip clickable={true} label={data ? data.value : ''}/>
      </StyledBadge>
  }

  if (data && data.key === 'category') {
    const category = categories.find(e => e.id === data.value)
    return <Chip clickable={true} label={category ? category.name : ''} />
  }
  return <label>{data.value}</label>
}