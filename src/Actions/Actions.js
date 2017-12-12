import store from "../Store/Store";
import firebase, { auth, database } from "./Firebase";

export const selectGender = gender => {
  let actualGender = store.getState().gender;
  store.setState({
    gender: gender,
    genderSelect: true
  });
  console.log("store gender", store.getState().gender);
  firebase
    .database()
    .ref("users/gender")
    .set(store.getState().gender);
};

export const selectAge = age => {
  let actualSize = store.getState().size;
  store.setState({
    age: age,
    ageSelected: true
  });
  console.log("store age", store.getState().age);
  firebase
    .database()
    .ref("users/age")
    .set(store.getState().age);
};

export const selectSize = size => {
  console.log("sizeSIZE", size);
  store.setState({
    size: size,
    ageSelected: true
  });
  console.log("store size", store.getState().size);
};

export const changeView = view => {
  console.log("view", view);
  store.setState({
    imgSelected: view
  });
  console.log("store view", store.getState().imgSelected);
};
