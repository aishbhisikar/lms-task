import React, { useState } from "react";
import { create } from "./services/Services";
import { Link } from "react-router-dom";
import "./adduser.css";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState(0);
  const [hasAdded, setHasAdded] = useState(false);

  const addUser = () => {
    let data = {
      fName: firstName,
      lName: lastName,
      email,
      score,
    };
    create(data);
    setHasAdded(true)
  };

  return (
    <section className="addUser">
      <div className="addUserContainer">
        {hasAdded ? (
          <>
          
          <h1>You submitted successfully!</h1>
          <br/>
            <Link to='/add' className="glow-on-hover" onClick={() => setHasAdded(!hasAdded)}
             style={{marginTop:"60px",paddingTop:'10px',width:'200px',textAlign:"center"}}>
               Add New User</Link>
          
          </>
        ) : (
          <>
            <label>First Name</label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              autoFocus
              required
            />
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
            <label>Score</label>
            <input
              type="text"
              onChange={(e) => setScore(e.target.value)}
              autoFocus
              required
            />
            <div className="btnContainer">
              <span>
                <button className="glow-on-hover" onClick={addUser}>
                  Add User
                </button>
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default AddUser;
