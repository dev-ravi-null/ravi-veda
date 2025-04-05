import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kundliData: JSON.parse(localStorage.getItem("kundliData")) || null,
};

const KundliSlice = createSlice({
    name: 'kundli',
    initialState,
    reducers: {
        saveKundli: (state, action) => {
            state.kundliData = action.payload;
            localStorage.setItem("kundliData", JSON.stringify(action.payload));
        },
    },
});

export const { saveKundli } = KundliSlice.actions;
export default KundliSlice.reducer;
