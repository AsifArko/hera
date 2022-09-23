import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {products} from "../../data/products";

export default function Products() {
  return (
    <div>
      <ItemTable data={products}/>
    </div>
  )
}