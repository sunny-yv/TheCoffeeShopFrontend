import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";


function CreateCat() {
  const [age, setAge] = useState("");
  const [catName, setCatName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [coffeeID, setCoffeeID] = useState("");
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleNameChange = (event) => {
    setCatName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleStatusChange = () => {
    setStatus(!status);
  };

  const handleCoffeeIDChange = (event) => {
    setCoffeeID(event.target.value);
  };

  const sendDataToAPI = async () => {
    try {
      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Cats",
        {
          catName,
          age,
          description,
          type,
          status,
          image,
          coffeeID,
        }
      );
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToAPI();
  };

  return (
    <div className="manager">
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Tên</label>
          <input
            placeholder="Tên"
            value={catName}
            onChange={handleNameChange}
          />
        </FormField>

        <InputLabel id="demo-simple-select-label">
          <b>Tuổi</b>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{ width: "310px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>

        <FormField>
          <label>Mô tả</label>
          <input
            placeholder="Mô tả"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Thể loại</label>
          <input
            placeholder="Thể loại"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Ảnh</label>
          <input
            accept="image/*"
            type="file"
            placeholder="Last Name"
            onChange={handleImageChange}
          />
        </FormField>

        <InputLabel id="demo-simple-select-label">
          <b>Chi nhánh</b>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={coffeeID}
          label="Age"
          onChange={handleCoffeeIDChange}
          style={{ width: "310px" }}
        >
          <MenuItem value={1}>Chi nhánh 1</MenuItem>
          <MenuItem value={2}>Chi nhánh 2</MenuItem>
          <MenuItem value={3}>Chi nhánh 3</MenuItem>
          <MenuItem value={4}>Chi nhánh 4</MenuItem>
        </Select>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={
              <Switch
                checked={status}
                onChange={handleStatusChange}
                color="primary"
              />
            }
            label="Trạng thái"
            labelPlacement="start"
            style={{ marginLeft: "0px" }}
          />
        </FormGroup>
        <FormField>
          <Checkbox label="Tôi đồng ý với các Điều khoản và Điều kiện" />
        </FormField>

        <Button type="submit">Thêm</Button>
      </Form>
    </div>
  );
}

export default CreateCat;
