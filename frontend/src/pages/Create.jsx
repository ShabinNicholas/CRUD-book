import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [formDetails, setFormDetails] = useState({
    bookName: "",
    bookPrice: "",
    bookRating: "",
  });
  const handleChange = (e) => {
    setFormDetails((formDetails) => ({
      ...formDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //To prevent the default reload of the page
    try {
      //send the data in the server
      const response = await axios.post(
        "http://localhost:3000/create",
        formDetails
      );
      //console log the response received form the server
      console.log(response);
      alert("Book created successfully");
      // clear the input field
      setFormDetails({
        bookName: "",
        bookPrice: "",
        bookRating: "",
      });
    } catch (error) {
      //catch any error from the above operation
      console.error(error);
    }
    console.log(formDetails);
  };
  return (
    <div>
      <h2>Create Book</h2>
      {/* will be called when button is clicked because button type is set as submit*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formDetails.bookName}
          onChange={handleChange} // calls the handleChange whenever a change happens in the input field
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
        {/* will call the submit function that is stored as value in the onSubmit attribute of the form*/}
        <button>View all books</button>
      </Link>
    </div>
  );
};

export default Create;
