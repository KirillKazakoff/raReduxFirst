/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initContent, ContentType } from '../data/initContent';
import type { AppThunk, RootState } from './store';

export interface ServiceState {
    items: ContentType[];
    status: 'idle' | 'loading' | 'failed';
    editted: string;
}

const initialState: ServiceState = {
    items: initContent,
    status: 'idle',
    editted: '',
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addItem: (state: ServiceState, action: PayloadAction<ContentType>) => {
            state.items.push(action.payload);
        },
        removeItem: (state: ServiceState, action: PayloadAction<string>) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            state.items.splice(index, 1);
        },
        editItem: (state, action: PayloadAction<ContentType>) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            state.items[index] = action.payload;
        },
        setEditted: (state: ServiceState, action: PayloadAction<string>) => {
            state.editted = action.payload;
        },
    },
});

export const { addItem, removeItem, setEditted } = serviceSlice.actions;

export const selectItems = (state: RootState) => state.service.items;
export const selectEditted = (state: RootState) => state.service.editted;

export const editItem = (item: ContentType): AppThunk => (dispatch) => {
    dispatch(serviceSlice.actions.editItem(item));
    dispatch(setEditted(''));
};

export default serviceSlice.reducer;

// class Reducer {
//     state: ServiceState;

//     constructor(state: ServiceState) {
//         this.state = state;
//     }

//     addItem(action: PayloadAction<ContentType>) {
//         this.state.items.push(action.payload);
//     }

//     removeItem(action: PayloadAction<string>) {
//         const index = this.state.items.findIndex((item) => item.id === action.payload);
//         this.state.items.splice(index, 1);
//     }
//     editItem: (state: ServiceState, action: PayloadAction<ContentType>) => {

//     }
// }
