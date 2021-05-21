import React from 'react'
import { useTable,useGlobalFilter, useAsyncDebounce,usePagination   } from 'react-table';

//defining the global filter
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value,setValue]  =  React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
            <input
                className="form-control form-control-sm"
                style={{ "padding" :"10px"}}
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
    )
}


function Table({columns, data}) {
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns, 
            data,
        },
        useGlobalFilter, 
    );
    
    return(
        <div>            
        <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        /> 
        <table className="table" {...getTableProps()}>
        <thead className="thead-dark">
        {headerGroups.map(headerGroup=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column=>(
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
             ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i)=>{
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                </tr>
                )
            })}
        </tbody>
    </table>
    </div>
    );
}

export default Table;