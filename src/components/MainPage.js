import React, {useState, useEffect} from "react";
import {getAll} from '../services/Services'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "../AddUser";
import "./navbar.css";
import Navbar from "./Navbar";
import UserList from './UserList'


function MainPage({ handleLogout }) {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)

  const getUsers = async() => {
    const userData = []
    await getAll().get().then((querySnapshot) => {
      querySnapshot.docs.map(doc => {
        userData.push({id: doc.id, data: doc.data()})
      });
    })
    console.log(userData)
    setUsers(userData)
  }

  useEffect(() => {
    getUsers()
  }, [currentIndex])

  

  return (
    <div className="mainpage">
      <Router>
        <Navbar />
        <button className="l-out-btn glow-on-hover" onClick={handleLogout}>Logout</button>
        <Switch>
          <Route path="/add" component={AddUser} />
          

          <Route path="/" component={UserList} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default MainPage;
