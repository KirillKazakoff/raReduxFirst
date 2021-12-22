import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';
import inputReducer from './inputSlice';

export const store = configureStore({
    reducer: {
        service: serviceReducer,
        inputs: inputReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
