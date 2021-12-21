/* eslint-disable default-param-last */
import { nanoid } from 'nanoid';
import { combineReducers, createStore } from 'redux';
import { ADD_SERVICE, CHANGE_SERVICE_FIELD } from './actions';

const initialState = [
    {
        service: 'Замена стекла',
        amount: '21000',
        id: '1',
    },
    {
        service: 'Замена дисплея',
        amount: '35000',
        id: '2',
    },
];

function serviceListReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_SERVICE: {
            const { name, price } = action.payload;
            return [...state, { id: nanoid(), service: name, amount: Number(price) }];
        }

        default:
            return state;
    }
}

// ServiceAdd
const initialState2 = {
    name: '',
    price: '',
};

function serviceAddReducer(state = initialState2, action: any) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        }

        default: {
            return state;
        }
    }
}

// store
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const store = createStore(reducer as any);

export default store;
