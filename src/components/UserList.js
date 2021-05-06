import React, { useState, useEffect } from "react";
import { getAll } from "../services/Services";
import User from "./User";
import "./user.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [currentIndex, setCurrentIndex] = useState(-1);

  const getUsers = async () => {
    const userData = [];
    await getAll()
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          userData.push({ id: doc.id, data: doc.data() });
        });
      });
    console.log(userData);
    setUsers(userData);
  };

  useEffect(() => {
    getUsers();
  }, [currentIndex]);

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };

  const refreshList = () => {
    setCurrentUser({});
    setCurrentIndex(-1);
  };
  return (
    <section className="addUser">
      <div className="addUserContainer"style={{ paddingTop:"0px",marginTop:"0px",color: "#fff" }}>
        <h1 style={{fontSize:"2rem", textAlign:"center", marginTop:"0px"}}> User List</h1>

        <ul className="list-group">
          {users &&
            users.map((user, index) => {
              return (
                <li
                  style={{ marginTop: "10px",fontSize:"1.5rem", cursor:"pointer"  }}
                  key={user.id}
                  onClick={() => setActiveUser(user, index)}
                >
                  {user.data.fName}
                </li>
              );
            })}
        </ul>
        {currentUser ? (
          <div className=" user">
            <User currentUser={currentUser} refreshList={refreshList} />
          </div>
        ) : (
          <div>
            <h3 style={{ marginTop: "30px", color: "#fff" }}>
              Please click on a User...
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default UserList;
