import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {capitalize, processTableHeader} from "../../utils/utils";
import ItemListProcessor from "./itemListComponentProcessor";

interface Props {
  data?: Array<any>
}

const ItemTable = (props: Props) => {
  const data = props.data;

  const keys = Object.keys(data? data[0]: [])
  const headers = keys.map(header => processTableHeader(header))
  return <>
    <TableContainer>
      <Table sx={{ minWidth: 800, border: '1px solid #e1e1e1;', marginTop: 3 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers
              .map((header,idx) => {
              return <TableCell key={idx} align="left" style={{color: '#4e4c4c'}}><strong>{header}</strong></TableCell>
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {data ? data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {keys.map(key => <TableCell key={key} align="left">{ItemListProcessor({
                key: key,
                value: row[`${key}`]
              })}</TableCell>)}
            </TableRow>
          )): null}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}

export default ItemTable;