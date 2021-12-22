/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { InputState, initForm } from '../data/initForm';

export interface InputsState {
    [key: string]: string;
    service: string;
    amount: string;
}

export const inputSlice = createSlice({
    name: 'input',
    initialState: initForm,
    reducers: {
        changeInput: (state: InputsState, action: PayloadAction<InputState>) => {
            state[action.payload.name] = action.payload.value;
        },
        updateInputs: (state, action: PayloadAction<InputsState>) => action.payload,
        refreshInputs: () => initForm,
    },
});

export const { changeInput, updateInputs, refreshInputs } = inputSlice.actions;

export const selectInputs = (state: RootState) => state.inputs;

export default inputSlice.reducer;
