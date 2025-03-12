import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [formDetails, setFormDetails] = useState({
    bookName: "",
    bookPrice: "",
    bookRating: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formDetails
      );
      console.log(response);
      alert("Book created successfully")
      setFormDetails({
        bookName: "",
        bookPrice: "",
        bookRating: "",
      })
      // navigate("/view")

    } catch (error) {
      console.error(error);
    }
    console.log(formDetails);
  };
  return (
    <div>
      <h2>Create user</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formDetails.bookName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bookPrice"
          placeholder="Book Price"
          value={formDetails.bookPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bookRating"
          placeholder="Book Rating"
          value={formDetails.bookRating}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <Link to={"/"}>
        <button>Home</button>
      </Link>

      <Link to={"/view"}>
        <button>View all books</button>
      </Link>
    </div>
  );
};

export default Create;
