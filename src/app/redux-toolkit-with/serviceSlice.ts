/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initContent, ContentType } from '../data/initContent';
import type { RootState } from './store';

export interface ServiceState {
    items: ContentType[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ServiceState = {
    items: initContent,
    status: 'idle',
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ContentType>) => {
            state.items.push(action.payload);
        },
    },
});

export const { addItem } = serviceSlice.actions;

export const selectItems = (state: RootState) => state.service.items;

export default serviceSlice.reducer;