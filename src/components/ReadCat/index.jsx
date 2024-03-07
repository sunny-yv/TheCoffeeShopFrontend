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
function ReadCat() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Cats/`)
      .then((response) => {
        // setApiData(response.data.filter(data => data.status === true));
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Tên</TableHeaderCell>
          <TableHeaderCell>Tuổi</TableHeaderCell>
          <TableHeaderCell>Mô tả</TableHeaderCell>
          <TableHeaderCell>Thể loại</TableHeaderCell>
          <TableHeaderCell>Ảnh</TableHeaderCell>
          <TableHeaderCell>Sửa</TableHeaderCell>
          <TableHeaderCell>Xóa</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {apiData.map((data) => {
          return (
            <TableRow>
              <TableCell>{data.catName}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>{data.type}</TableCell>
              <TableCell>{data.image}</TableCell>

              <TableCell>
              <Link to="/updatecat">
                  <Button color="green">Sửa</Button>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/deletecat">
                  <Button color="red">Xóa</Button>
                </Link>
              </TableCell>
              
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default ReadCat;
