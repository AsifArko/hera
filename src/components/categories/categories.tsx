import * as React from 'react'
import ItemTable from "../../elements/itemTable/itemTable";
import {categories} from "../../data/categories";

export default function Categories() {
  return <ItemTable data={categories}/>
}