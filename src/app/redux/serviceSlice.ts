/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initContent, ContentType } from '../data/initContent';
import type { AppThunk, RootState } from './store';

export interface ServiceState {
    items: ContentType[];
    editted: string;
    filter: string;
}

const initialState: ServiceState = {
    items: initContent,
    editted: '',
    filter: '',
};

const findIndex = (items: ContentType[], id: string) => {
    return items.findIndex((item) => item.id === id);
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ContentType>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const index = findIndex(state.items, action.payload);
            state.items.splice(index, 1);
        },
        editItem: (state, action: PayloadAction<ContentType>) => {
            const index = findIndex(state.items, action.payload.id);
            state.items[index] = action.payload;
        },
        setEditted: (state, action: PayloadAction<string>) => {
            state.editted = action.payload;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
});

export const { addItem, removeItem, setEditted, setFilter } = serviceSlice.actions;

export const selectItems = (state: RootState) => {
    return state.service.items.filter((item) => item.service.includes(state.service.filter));
};
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
