/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { initForm, InputState } from '../data/initForm';

export const inputSlice = createSlice({
    name: 'input',
    initialState: initForm,
    reducers: {
        changeInput: (state, action: PayloadAction<InputState>) => {
            const index = state.findIndex((item) => item.name === action.payload.name);
            state[index].value = action.payload.value;
        },
        refreshInputs: (state, action: PayloadAction<InputState[]>) => {
            return action.payload;
        },
    },
});

export const { changeInput, refreshInputs } = inputSlice.actions;

export const selectInputs = (state: RootState) => state.inputs;

export default inputSlice.reducer;
