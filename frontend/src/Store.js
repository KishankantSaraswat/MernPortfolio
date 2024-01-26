import { configureStore } from '@reduxjs/toolkit';
import { loginReducer, updateReducer, userReducer } from './reducers/user';
// import { updateUser } from './actions/user';

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        update: updateReducer,
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export default store;
