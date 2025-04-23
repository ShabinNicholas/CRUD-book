import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        It is a simple CRUD application and it is fully beginner friendly and
        very very basic,it don't even have any css either, If you find it hard
        to understand you don't have the basic knowledge to work with MERN stack
      </p>
      <p>
        It is very very basic it has no validation and nothing it is just simple
      </p>
      <p>
        If you can create this same application without looking at the code and
        any assistance you are ready to be a MERN stack developer, Not fully
        ready i mean the basic
      </p>
      <h3>ALMOST ready to be :)</h3>
      <Link to={"/create"}>
        <button>Create</button>
      </Link>
    </div>
  );
};

export default Landing;
