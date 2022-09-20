import React from 'react'
import { Table , TableHead, TableRow, TableCell, TableBody, TableContainer , Skeleton} from '@mui/material'
import { useTable , useSortBy, } from 'react-table'
import { FaSort, FaSortUp, FaSortDown, } from "react-icons/fa";
 const ReactTable = ( {columns , data , status, message,}) => {
    const { 
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
    } =  useTable(
            {  
            columns,  
            data
            }, 
            useSortBy
        )
  return (
    <TableContainer>
        <Table {...getTableProps()}>
        <TableHead sx={{backgroundColor:'#1976d2'}}>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
            // Apply the header row props
            <TableRow {...headerGroup.getHeaderGroupProps()} >
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                // Apply the header cell props
                <TableCell sx={{color:'white'}}  align='center' {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <span style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <span>
                            {column.isSorted
                                ? column.isSortedDesc
                                    ? <FaSortDown />
                                    : <FaSortUp />
                                : 
                                <FaSort />
                            }
                        </span>  &nbsp;
                        <span>
                        {// Render the header
                            column.render('Header') 
                        }
                        </span>
                    </span>
                </TableCell>
                ))}
            </TableRow>
            ))}
        </TableHead>
     
        <TableBody {...getTableBodyProps()}>
            {
            status === 'success' 
            ?
            rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
                // Apply the row props
                <TableRow {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                    // Apply the cell props
                    return (
                    <TableCell  align="center" {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                        
                    </TableCell>
                    )
                })}
                </TableRow>
            )
            })
            : status === 'loading'
                ?
                // Loop over the header rows
                    headerGroups.map(headerGroup => (
                // Apply the header row props
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {// Loop over the headers in each row
                    headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <TableCell {...column.getHeaderProps()}>
                        {
                        <Skeleton animation="wave" variant="rectangular" height={20}/> }
                    </TableCell>
                    ))}
                </TableRow>
                    ))
                :   headerGroups.map(headerGroup => (
                    // Apply the header row props
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {// Loop over the headers in each row
                        headerGroup.headers.map(column => (
                        // Apply the header cell props
                        <TableCell {...column.getHeaderProps()}>
                           Press Start
                        </TableCell>
                        ))}
                    </TableRow>
                        ))
            }
            
        </TableBody>
        </Table>
    </TableContainer>
     
  )
}
export default ReactTable
