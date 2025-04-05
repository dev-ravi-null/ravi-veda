import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/User/UserSlice';
import kundliReducer from '../Redux/Kundli/KundliSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        kundli: kundliReducer,
    },
});
