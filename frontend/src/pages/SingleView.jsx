import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleView = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/view-single/${id}`
        );
        console.log(response);
        setBookDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const deleteBook = async (selectedID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete/${selectedID}`
      );
      console.log(response);
      alert("Deleted successfully");
      navigate("/view");
    } catch (error) {
      console.log("Error in deleting book", error);
    }
  };
  return (
    <div>
      <h1>Book details</h1>
      <div>
        <h4>Book name: {bookDetails.bookName}</h4>
        <h4>Book price: {bookDetails.bookPrice}</h4>
        <h4>Book ratting: {bookDetails.bookRating}</h4>
      </div>
      <button onClick={() => deleteBook(bookDetails._id)}>Delete</button>
      <Link to={`/edit/${bookDetails._id}`}>
        <button>Edit</button>
      </Link>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default SingleView;
