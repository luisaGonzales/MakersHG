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

export const selectAge = (age) => {
    let actualSize = store.getState().size;
    let newAgeTxt = "";
    if(age == 0) {
        newAgeTxt = "Adulto";
    } else if (age == 1) {
        newAgeTxt = "Niño / Niña"
    } else if (age == 2) {
        newAgeTxt = "Bebé";
    }
    store.setState({
        age: age, 
        ageSelected: true, 
        ageTxt : newAgeTxt
    });
    console.log('store age', store.getState().age);
    firebase.database().ref('users/age').set(store.getState().age);
}

export const selectSize = (size) => {
    console.log("sizeSIZE", size);
    store.setState({
        size : size, 
    });
    console.log("store size", store.getState().size);
}

export const changeView = view => {
  console.log("view", view);
  store.setState({
    imgSelected: view
  });
  console.log("store view", store.getState().imgSelected);
};

export const selectColor = (color) => {
    console.log("colorpick", color);
    store.setState({
        color: color, 
        allImage: null
    });
    console.log(store.getState().color);
}

export const saveImg = (img) => {
    console.log("img", img);

    store.setState({
        img: img
    });

}

export const draw = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var imageObj1 = new Image();
    var imageObj2 = new Image();
    imageObj1.setAttribute('crossOrigin', 'anonymous'); //
    imageObj1.src = `http://174.138.48.60/makers/build/Assets/img/${store.getState().gender}/${store.getState().age}/${store.getState().color}/front.png`;
    imageObj1.onload = function () {
        ctx.drawImage(imageObj1, 0, 10, 600, 500);
        imageObj2.setAttribute('crossOrigin', 'anonymous'); // works for me
        imageObj2.src = store.getState().logo;        
        imageObj2.onload = function () {
            ctx.drawImage(imageObj2, 200, 150, 80, 50);
            var img = c.toDataURL("image/png");
            store.setState({
                allImage : img,
            })
        }
    };
}
