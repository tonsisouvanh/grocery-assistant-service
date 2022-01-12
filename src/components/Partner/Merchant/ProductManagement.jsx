import React, { useState, useEffect } from "react";
import "./ProductManagement.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Table components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import ProductService from "../../../services/product.service";
const columns = [
  { id: "tensp", label: "Tên sản phẩm", minWidth: 150 },
  { id: "tenloai", label: "Loại sản phẩm", minWidth: 150 },
  { id: "mota", label: "Mô tả", minWidth: 170 },
  { id: "donvitinh", label: "Đơn vị tính", minWidth: 50 },
  {
    id: "dongia",
    label: "Đơn giá",
    minWidth: 100,
    // value.toLocaleString("en-US", { style: "currency", currency: "USD" }),
  },
];

const formatting = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "VND" });
};

function ProductManagement() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    // setSuccessful(false);
    ProductService.getProductsOfMerchantStore(1).then((res) => {
      setProducts(res.data);
      // loadProductsToRows();
    });
  }, []);

  // const str = 2000;
  // console.log('number',str.toLocaleString("en-US") + " vnd");

  return (
    <>
      <div className="merchant-product-containers">
        <div className="text-header-container">
          <p className="text-header">Danh sách sản phẩm</p>
        </div>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {products &&
                  products
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.masp}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              // <TableCell key={column.id} align={column.align}>
                              //   {value}
                              // </TableCell>
                              <TableCell key={column.id} align={column.align}>
                                {typeof value === "number"
                                  ? formatting(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
              </TableBody>
              {/* <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody> */}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

export default ProductManagement;
