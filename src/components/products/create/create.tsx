import * as React from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {categories} from "../../../data/categories";
import {useState} from "react";

interface Props {
  onCreate : (data: any) => any;
}

export default function CreateProduct({onCreate}: Props) {
  const [state, setState] = useState({
    name: '',
    category: '',
    thumbnail: '/src/assets/thumbnails/thumbnail.png',
    buyingRate: '',
    sellingRate: '',
    stock: ''
  })

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const opts = categories.map((category, idx) => {
    return <MenuItem key={idx} value={category.id}>{category.name}</MenuItem>
  });

  const onSubmit = (): any => {
    if (state.name && state.category && state.buyingRate && state.sellingRate && state.stock) {
      onCreate(state)
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <TextField
        name='name'
        label={'Name'}
        size={'small'}
        sx={{margin: '1px'}}
        onChange={handleChange}
        value={state.name}
      />
      <div style={{margin: '1px'}}>
        <FormControl size={'small'}>
          <InputLabel id=" ">Category</InputLabel>
          <Select
            name='category'
            labelId="demo-select-small"
            id="demo-select-small"
            size={'small'}
            label="Category"
            value={state.category}
            autoWidth
            onChange={handleChange}
            sx={{margin: '0px', minWidth: '50px', width: 200, textAlign: 'left'}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {opts}
          </Select>
        </FormControl>
      </div>

      <TextField id='buyingRate' name='buyingRate' label='Buying rate' size='small' sx={{margin: '1px'}} onChange={handleChange} value={state.buyingRate}/>
      <TextField id='sellingRate' name='sellingRate' label='Selling rate' size='small' sx={{margin: '1px'}} onChange={handleChange} value={state.sellingRate}/>
      <TextField id='stock' name='stock' label='Stock' size='small' sx={{margin: '1px'}} onChange={handleChange} value={state.stock}/>
      <Button variant='outlined' onClick={onSubmit} sx={{
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