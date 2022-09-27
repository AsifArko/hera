import * as React from 'react'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import {post} from "../../../utils/http";

interface Props {
  onCreate : (data: any) => any;
}

export default function CreateCategory({onCreate}: Props) {
  const [state, setState] = useState({
    name: ''
  })

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const onSubmit = async () => {
    if (state.name) {
      const response = await post('/categories', state)
      if (response.status === 201) {
        onCreate(response)
        setState({
          ...state,
          name: ''
        });
      }
    }
  }

  return (
    <div style={{display: "flex", justifyContent: 'space-between'}}>
      <TextField
        name={'name'}
        label={'Name'}
        size={'small'}
        sx={{margin: '1px', width: '85%'}}
        onChange={handleChange}
        value={state.name}
      />
      <Button variant="outlined" sx={{
        mt: 1,
        mb: 1,
        margin: '1px',
        border: '1px solid #c5c5c5',
        color: 'rgb(0, 0, 0, .87)',
        padding: '5px',
        width: '17.2%'
      }} onClick={onSubmit}>
        create
      </Button>
    </div>
  )
}