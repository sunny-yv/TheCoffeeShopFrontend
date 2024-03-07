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
function ReadCat() {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([]);
  const handleEdit = (catID) => {
    navigate(`/updatecat/${catID}`);
  };
  
  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Cats/`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getData = () => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Cats/`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://thecoffeeshopstore.azurewebsites.net/api/Cats/${id}`
      );
      setApiData(apiData.filter((data) => data.catID !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          {/* <TableHeaderCell>ID</TableHeaderCell> */}
          <TableHeaderCell>Tên</TableHeaderCell>
          <TableHeaderCell>Tuổi</TableHeaderCell>
          <TableHeaderCell>Mô tả</TableHeaderCell>
          <TableHeaderCell>Thể loại</TableHeaderCell>
          {/* <TableHeaderCell>Ảnh</TableHeaderCell> */}
          
          <TableHeaderCell>Sửa</TableHeaderCell>
          <TableHeaderCell>Xóa</TableHeaderCell>
          {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
        </TableRow>
      </TableHeader>

      <TableBody>
        {apiData.map((data) => {
          return (
            <TableRow key={data.catID}>
              {/* <TableCell>{data.catID}</TableCell> */}
              <TableCell>{data.catName}</TableCell>
              <TableCell>{data.age}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>{data.type}</TableCell>
              {/* <TableCell>{data.image}</TableCell> */}
             
              <TableCell>
                <Button color="blue" onClick={() => handleEdit(data.catID)}>
                  Sửa
                </Button>
              </TableCell>

              <TableCell>
                <Button color="red" onClick={() => onDelete(data.catID)}>
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

export default ReadCat;
