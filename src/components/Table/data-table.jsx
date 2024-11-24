import React, { useState } from "react";
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { BorderStyle, TablePaginationStyle } from "../../pages/style";
import { getSortIcon } from "../constants";

const DataTable = ({ data, columns, handleDelete, handleEdit }) => {
    const [filter, setFilter] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: columns[0].field, direction: "asc" });
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredData = data.filter((item) =>
        columns.some((column) =>
            String(item[column.field])
                .toLowerCase()
                .includes(filter.toLowerCase())
        )
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
    });

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    const formatCellValue = (value) => {
        if (Array.isArray(value)) {
            return value.join(", "); 
        }
        return value;
    };

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2, marginTop: "6px" }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </Box>

            <TableContainer component={Paper} sx={{ marginTop: 4 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#e0e0e0" }}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.field}
                                    onClick={() => handleSort(column.field)}
                                    sx={{
                                        cursor: "pointer",
                                        ...BorderStyle,
                                        whiteSpace: "nowrap",
                                        padding: "8px 16px",
                                    }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span>{column.headerName}</span>
                                        {getSortIcon(column.field, sortConfig)}
                                    </Box>
                                </TableCell>
                            ))}
                            <TableCell sx={BorderStyle}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData
                            .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                            .map((item) => (
                                <TableRow key={item.id}>
                                    {columns.map((column) => (
                                        <TableCell key={column.field} sx={BorderStyle}>
                                            {formatCellValue(item[column.field])}
                                        </TableCell>
                                    ))}
                                    <TableCell sx={BorderStyle}>
                                        <IconButton color="primary" onClick={() => handleEdit(item.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={TablePaginationStyle}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="Box"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Box>
    );
};

export default DataTable;
