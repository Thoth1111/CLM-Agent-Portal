import { configureStore } from '@reduxjs/toolkit';
import licenseReducer from './licenseSlice';

const store = configureStore({
    reducer: {
        licenses: licenseReducer
    },
});

export default store;