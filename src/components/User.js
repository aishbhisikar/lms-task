import React, { useState, useEffect } from "react";
import { del, update } from "../services/Services";

function User({ currentUser, refreshList }) {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  useEffect(() => {
    setUser(currentUser.data);
    setMessage("");
  }, [currentUser]);

  const updateUser = () => {
    update(currentUser.id, user)
      .then(() => {
        setMessage("User updated!!!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    del(currentUser.id)
      .then(() => {
        refreshList();
        setMessage("User deleted!!!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="box">
      <h3> Update User Details</h3>
      {user ? (
        <div className="edit-form">
          <form>
            <div className="form-group">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fName"
                value={user.fName}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lName"
                value={user.lName}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="score">Score</label>
              <input
                type="text"
                className="form-control"
                name="score"
                value={user.score}
                onChange={(e) => onChange(e)}
              />
            </div>
          </form>
          <div className="userBtn">
          <button onClick={deleteUser}>Delete</button>
          <button type="submit" onClick={updateUser}>Update</button>
          </div>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a User...</p>
        </div>
      )}
    </div>
  );
}

export default User;
