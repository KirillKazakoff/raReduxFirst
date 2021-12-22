/* eslint-disable no-param-reassign */
export const initForm = [
    {
        name: 'service',
        value: '',
    },
    {
        name: 'amount',
        value: '',
    },
];

// const initForm = init.reduce((obj: any, item) => {
//     obj[item.name] = '';
//     return obj;
// }, {});

export type InputState = typeof initForm[0];
