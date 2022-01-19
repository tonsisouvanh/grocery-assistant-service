import React, { useState, useEffect } from "react";
import "./ProductManagement.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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
import Button from "@mui/material/Button";

import { deleteProduct } from "../../../action/product";
import ProductService from "../../../services/product.service";
const columns = [
  { id: "tensp", label: "Tên sản phẩm", minWidth: 150 },
  { id: "tenloai", label: "Loại sản phẩm", minWidth: 150 },
  { id: "mota", label: "Mô tả", minWidth: 170 },
  { id: "donvitinh", label: "Đơn vị tính", minWidth: 50 },
  {
    id: "dongia",
    label: "Đơn giá",
    minWidth: 30,
  },
];

const formatting = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "VND" });
};

function OrdersManagement() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [resetList, setResetList] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (productId, imageId) => {
    dispatch(deleteProduct(productId))
      .then((res) => {
        setProducts(products.filter((i) => i.masp !== productId));
        alert("deleted");
      })
      .catch((error) => console.log(error));
    setResetList(true);
  };

  useEffect(() => {
    let mounted = true;

    ProductService.getProductsOfMerchantStore(user.storeId).then((res) => {
      if (mounted) setProducts((res && res.data) || "");
    });
    return () => {
      mounted = false;
    };
  }, []);

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
                              <TableCell key={column.id} align={column.align}>
                                {typeof value === "number"
                                  ? formatting(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                          <TableCell align="center">
                            <Link
                              to={`/pages/partner/merchant/editProduct/${row.masp}`}
                            >
                              <Button>EDIT</Button>
                            </Link>
                            <Button
                              onClick={() => handleDelete(row.masp, row.imgUrl)}
                            >
                              DELETE
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
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

export default OrdersManagement;
