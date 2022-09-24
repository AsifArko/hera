import * as React from 'react'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export default function CreateCategory() {
  return (
    <div style={{display: "flex", justifyContent: 'space-between'}}>
      <TextField label={'Name'} size={'small'} sx={{margin: '1px', width: '85%'}}/>
      <Button variant="outlined" sx={{
        mt: 1,
        mb: 1,
        margin: '1px',
        border: '1px solid #c5c5c5',
        color: 'rgb(0, 0, 0, .87)',
        padding: '5px',
        width: '17.2%'
      }}>
        create
      </Button>
    </div>
  )
}