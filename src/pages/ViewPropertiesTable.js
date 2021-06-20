import { React, useState } from 'react';
import Controls from "../components/Controls/Controls";
import { ContactsOutlined, Search } from "@material-ui/icons";
import { InputAdornment, InputBase, makeStyles, TablePagination, Table, TableSortLabel } from "@material-ui/core";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as PropertyService  from '../services/PropertyService'; 


const useStyles = makeStyles({
    searchBarIcon: {
        color: 'primary'
    },
    searchInput: {
        width: '75%'
    },
    table: {
        minWidth: 650,
        maxHeight: 100,
        marginTop: '20px'
    },
    tableHead: {
        background: '#132853',
        color:'white',
        '& tr th': {
            color:'white'
        },
        '& .MuiTableSortLabel-root': {
            color:'white'
        },
        '& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
            color:'white'
        }
    }
});

const tableHead = [  
    {name:'fullName', label:'Full Name'},
    {name:'email', label: 'Email'},
    {name:'category', label: 'Category'},
    {name:'hireDate', label: 'Purchase Date'},
    {name:'area', label: 'Area'},
    {name:'images', label: 'Number of Images'}
]

const ViewPropertiesTable = () => {

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const properties = PropertyService.getProperties();
    const [searchText, setSearchText] = useState("");
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState("id");
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSortHandler = (field) => {
        setOrder(order === 'asc' ? 'desc' : 'asc');
        setOrderBy(field);
    } 

    function descComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      }

    const sortData = (data) => {
        var comparator = order === 'desc'? (a, b) => descComparator(a, b, orderBy)
        : (a, b) => -descComparator(a, b, orderBy); 

        return data.sort(comparator);
    }

    const searchByText = () => {
        if (searchText) {
            return properties.filter(item => item.fullName.toLowerCase().includes(searchText));
        }
        return properties;
    };
    
    const getFilteredData = () => {
        let filteredBySearch = searchByText();
        return sortData(filteredBySearch).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    };

    const handleSearchOnChange = (e) => {
        setSearchText(e.target.value);
    };

    return ( 
        <>
            <Controls.Input
                placeholder="Search"
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
                value={searchText}
                onChange={handleSearchOnChange}
            ></Controls.Input>

            <Table className={classes.table} size="small" aria-label="a dense table"  >
                <TableHead className={classes.tableHead}>
                    <TableRow >
                        {
                            tableHead.map((row) => (
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === row.name}
                                        direction={orderBy === row.name ? order : 'asc'}
                                        onClick={() => handleSortHandler(row.name)}
                                        >
                                        {row.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        getFilteredData().map((row, index) => (
                            
                            <TableRow style ={ index % 2? { background : "#d0ecfd" }:{ background : "white" }}>
                                <TableCell>{row.fullName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{new Date(row.hireDate).toLocaleDateString("en-US")}</TableCell>
                                <TableCell>{row.area}</TableCell>
                                <TableCell>{row.files.length}</TableCell>
                            </TableRow>

                        ))
                    }
                </TableBody>
                
            </Table>
            <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={6}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </>
     );
}
 
export default ViewPropertiesTable;