// http://174.138.48.60/makers/build/Assets/img/male/0/white/back.png

import createStore from 'redux-zero';
 
const initialState = {
    title: 'Create it Yourself', 
    gender: null,
    genderSelect: false, 
    age: null,
    ageSelected: false, 
    sizeOptions : [["XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["10", "12", "14", "16"], ["3", "6", "9", "12", "24"]],
    size : null, 
    ageTxt : null,
    color: "white",
    colorOptions : {
        "female" : {
            "0" : ["black", "blue", "grey", "pink", "red", "white"],
            "1" : ["green", "orange", "white"],
            "2" : ["black", "pink", "red", "skyblue", "white"]
        },
        "male" : {
            "0" : ["blue", "green", "red", "skyblue", "white", "yellow"],
            "1" : ["black", "red", "white"], 
            "2" : ["black", "blue", "red", "white"]
        }  
    },
    // imgs : [
    //     `http://174.138.48.60/makers/build/Assets/img/${gender}/${age}/${color}/front.png`,
    //     `http://174.138.48.60/makers/build/Assets/img/${gender}/${age}/${color}/back.png`,
    //     `http://174.138.48.60/makers/build/Assets/img/${gender}/${age}/${color}/right.png`,
    //     `http://174.138.48.60/makers/build/Assets/img/${gender}/${age}/${color}/left.png`        
    // ],
    logo: 'http://174.138.48.60/Logo.png',
    imgSelected : 0, 
    allImage : null,
    x : 200,
    y : 150
}

const store = createStore(initialState);
export default store;