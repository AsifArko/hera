import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {Box, CircularProgress, TextField} from "@mui/material";
import CreateCategory from "./create/create";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {get} from "../../utils/http";

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [isCreated, setIsCreated] = useState(false)

  const fetchCategories = async () => {
    const response = await get('/categories')
    if (response.status === 200) {
      setCategories(response.data)
    }
  }

  const onCategoryCreate = (response: any) => {
    if (response.status === 201) {
      setIsCreated(true)
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories().then()
    }
  }, [])

  useEffect(() => {
    if (isCreated) {
      fetchCategories().then()
      setIsCreated(false)
    }
  }, [isCreated])

  return <div style={{width: '100%', height: '700px'}}>
    <Box sx={{width: '100%'}}>
      <CreateCategory onCreate={onCategoryCreate}/>
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
      {categories && categories.length ? <ItemTable data={categories}/>: <CircularProgress sx={{padding: '10px'}} />}
    </Box>
  </div>
}