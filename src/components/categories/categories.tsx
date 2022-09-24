import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {categories} from "../../data/categories";
import {Box, TextField} from "@mui/material";
import CreateCategory from "./create/create";
import Button from "@mui/material/Button";

export default function Categories() {
  return <div>
    <Box>
      <CreateCategory/>
    </Box>
    <Box>
      <div style={{display: 'flex', paddingTop: '3px'}}>
        <TextField color={'primary'} size={'small'} sx={{width: '85%', margin: '1px'}}/>
        <Button variant="outlined" sx={{
          mt: 1,
          mb: 1,
          margin: '1px',
          padding: '5px',
          width: '17.2%'
        }}>
          search
        </Button>
      </div>
    </Box>
    <Box>
      <ItemTable data={categories}/>
    </Box>
  </div>
}