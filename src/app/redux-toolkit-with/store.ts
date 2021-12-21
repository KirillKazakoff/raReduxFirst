import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice';

export const store = configureStore({
    reducer: {
        counter: serviceReducer,
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
