import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {products} from "../../data/products";
import Button from "@mui/material/Button";
import {Box, CircularProgress, TextField} from "@mui/material";
import './products.css'
import CreateProduct from "./create/create";
import {useEffect, useState} from "react";
import {get} from "../../utils/http";

export default function Products() {
  const [productList, setProductList] = useState([])
  const [isCreated, setIsCreated] = useState(false)

  const fetchProducts = async () => {
    const response = await get('/products')
    if (response.status === 200) {
      setProductList(response.data)
    }
  }

  useEffect(() => {
    if (productList.length === 0) {
      fetchProducts().then()
    }
  }, [])

  useEffect(() => {
    if (isCreated) {
      fetchProducts().then()
      setIsCreated(false)
    }
  }, [isCreated])

  const onProductCreate = (response: any) => {
    if (response.status === 201) {
      setIsCreated(true)
    }
  }

  return (
    <div style={{width: '100%', height: '700px'}}>
      <Box>
        <CreateProduct onCreate={onProductCreate}/>
      </Box>
      <Box>
        <div style={{display: 'flex', paddingTop: '5px'}}>
          <TextField color={'primary'} size={'small'} sx={{width: '84.55%', margin: '1px'}}/>
            <Button variant="outlined" sx={{
              mt: 1,
              mb: 1,
              margin: '1px',
              padding: '5px',
              width: '15%'
            }}>
              search
            </Button>
        </div>
      </Box>
      <Box>
        {productList && productList.length ? <ItemTable data={productList}/>: <CircularProgress sx={{padding: '10px'}} />}
      </Box>
    </div>
  )
}