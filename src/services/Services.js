import firebase from "../fire";

const db = firebase.firestore().collection("/newUser");


 export const getAll = () => {
    return db;
  }

  export const create = (newUser) => {
    return db.add(newUser);
  }

  export const update = (id, value) => {
    return db.doc(id).update(value);
  }

  export const del = (id) => {
    return db.doc(id).delete();
  }

