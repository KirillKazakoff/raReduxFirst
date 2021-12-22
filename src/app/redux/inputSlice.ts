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
        updateInputs: (state, action: PayloadAction<InputState[]>) => action.payload,
        refreshInputs: () => initForm,
    },
});

export const { changeInput, updateInputs, refreshInputs } = inputSlice.actions;

export const selectInputs = (state: RootState) => {
    return state.inputs.reduce((total, input) => {
        total[input.name] = input.value;
        return total;
    }, {});
};

export default inputSlice.reducer;
