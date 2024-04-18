import { createSelector } from '@reduxjs/toolkit';

export const expiredLicenses = createSelector(
    state => state.licenses,
    licenses => {
        const currentDate = new Date();

        return licenses.filter(license => {
            const expiry_date = new Date(license.expiry_date);
            return expiry_date < currentDate;
        }).sort((a, b) => new Date(a.expiry_date) - new Date(b.expiry_date));
    }
);

export const dueLicenses = createSelector(
    state => state.licenses,
    licenses => {
        const currentDate = new Date();
        const oneMonthAgo = new Date(currentDate.setDate(currentDate.getDate() - 30));

        return licenses.filter(license => {
            const expiry_date = new Date(license.expiry_date);
            return expiry_date < currentDate && expiry_date > oneMonthAgo
        }).sort((a, b) => new Date(a.expiry_date) - new Date(b.expiry_date));
    }
);