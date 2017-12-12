import createStore from 'redux-zero';

const initialState = {
    title: 'Create it Yourself', 
    gender: null,
    genderSelect: false, 
    age: null,
    ageSelected: false, 
    sizes : [["XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["10", "12", "14", "16"], ["3", "6", "9", "12", "24"]],
    builder : {
        position : null,
        imgs : []
    }
}

const store = createStore(initialState);
export default store;