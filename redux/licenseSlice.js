import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const licenseSlice = createSlice({
    name: 'licenses',
    initialState,
    reducers: {
        saveLicenses: (state, action) => {
            return [...action.payload];
        },
        clearLicenses: (state) => {
            return [];
        }
    },
});

export const { saveLicenses, clearLicenses } = licenseSlice.actions;
export default licenseSlice.reducer;