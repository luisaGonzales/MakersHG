import createStore from 'redux-zero';

const initialState = {
    title: 'Create it Yourself', 
    gender: null,
    genderSelect: false, 
    age: null,
    ageSelected: false
}

const store = createStore(initialState);
export default store;