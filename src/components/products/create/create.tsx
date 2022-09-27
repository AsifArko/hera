import * as React from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {categories} from "../../../data/categories";
import {useEffect, useState} from "react";
import {get, post} from "../../../utils/http";

interface Props {
  onCreate : (data: any) => any;
}

const initialState = {
  name: '',
  category: '',
  thumbnail: '/src/assets/thumbnails/thumbnail.png',
  cost: '',
  mrp: '',
  stock: '',
  categories: []
}

export default function CreateProduct({onCreate}: Props) {
  const [categories, setCategories] = useState([])
  const [state, setState] = useState(initialState)

  const fetchCategories = async () => {
    const response = await get('/categories')
    if (response.status === 200) {
      setCategories(response.data)
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories().then()
    }
  }, [categories])

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const opts = categories.map((category, idx) => {
    return <MenuItem key={idx} value={category['id']}>{category['name']}</MenuItem>
  });

  const onSubmit = async () => {
    if (state.name && state.category && state.cost && state.mrp && state.stock) {
      const response = await post('/products', {
        name: state.name,
        category: state.category,
        cost: parseInt(state.cost),
        mrp: parseInt(state.mrp),
        stock: parseInt(state.stock)
      })

      if (response.status === 201) {
        onCreate(response)
        setState(initialState)
      }
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

      <TextField id='cost' name='cost' label='Cost' size='small' sx={{margin: '1px'}} onChange={handleChange} value={state.cost}/>
      <TextField id='mrp' name='mrp' label='mrp' size='small' sx={{margin: '1px'}} onChange={handleChange} value={state.mrp}/>
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