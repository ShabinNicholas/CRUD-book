import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/view-single/${id}`
        );
        console.log(response);
        setUserDetails(response.data.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/edit-book/${id}`,
        userDetails
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book name"
          value={userDetails.bookName || ""}
          name="bookName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Book price"
          value={userDetails.bookPrice || ""}
          name="bookPrice"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Book rating"
          value={userDetails.bookRating || ""}
          name="bookRating"
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Edit;
