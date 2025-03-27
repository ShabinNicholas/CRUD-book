import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/view");
        console.log(response);
        setUserDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Book list</h1>
      <div>
        <table border={4}>
          <thead>
            <tr>
              <th>No</th>
              <th>Book name</th>
              <th>Book price</th>
              <th>Book rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((userDetail, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{userDetail.bookName}</td>
                <td>{userDetail.bookPrice}</td>
                <td>{userDetail.bookRating}</td>
                <th>
                  <Link to={`/view-single/${userDetail._id}`}>View</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={"/create"}>
        <button>Create page</button>
      </Link>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default View;
