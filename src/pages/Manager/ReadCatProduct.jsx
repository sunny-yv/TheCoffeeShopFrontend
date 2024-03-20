import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ReadCatProduct() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);
  const handleEdit = (catProductID) => {
    navigate(`/updatecatproduct/${catProductID}`);
  };

  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/CatProducts/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredData = apiData.filter(
      (data) => !deletedIds.includes(data.catProductID)
    );
    setApiData(filteredData);
  }, [deletedIds]);

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://thecoffeeshopstore.azurewebsites.net/api/CatProducts/${id}`
      );
      setDeletedIds([...deletedIds, id]);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Tên</TableHeaderCell>
          <TableHeaderCell>Thể loại</TableHeaderCell>
          <TableHeaderCell>Giá</TableHeaderCell>
          <TableHeaderCell>Sửa</TableHeaderCell>
          <TableHeaderCell>Xóa</TableHeaderCell>
          {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
        </TableRow>
      </TableHeader>

      <TableBody>
        {apiData.map((data) => {
          return (
            <TableRow key={data.catProductID}>
              {/* <TableCell>{data.catID}</TableCell> */}
              <TableCell>{data.catProductName}</TableCell>
              <TableCell>{data.catProductType}</TableCell>
              <TableCell>{data.price}</TableCell>

              {/* <TableCell>{data.image}</TableCell> */}

              <TableCell>
                <Button
                  color="blue"
                  onClick={() => handleEdit(data.catProductID)}
                >
                  Sửa
                </Button>
              </TableCell>

              <TableCell>
                <Button color="red" onClick={() => onDelete(data.catProductID)}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ReadCatProduct;
