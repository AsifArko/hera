import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {products} from "../../data/products";
import Button from "@mui/material/Button";
import {Box, TextField} from "@mui/material";
import './products.css'
import CreateProduct from "./create/create";
import {useEffect, useState} from "react";

export default function Products() {
  const [productList, setProductList] = useState(products)

  useEffect(() => {
  }, [productList])

  const onProductCreate = (product: any) => {
    const ids = productList.map(e => e.id)
    const id = Math.max(...ids)

    product.id = id + 1
    product.createdAt = '24-11-2022'
    product.updatedAt = '24-11-2022'
    setProductList([...productList, product])
  }

  return (
    <div>
      <Box>
        <CreateProduct onCreate={onProductCreate}/>
      </Box>
      <Box>
        <div style={{display: 'flex', paddingTop: '3px'}}>
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
        <ItemTable data={productList}/>
      </Box>
    </div>
  )
}