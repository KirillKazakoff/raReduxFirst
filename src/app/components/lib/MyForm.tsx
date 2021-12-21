import React from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../data/initContent';
import Button from '../primitives/Button';
import { Flex } from '../primitives/Flex';
import Form from '../primitives/Form';
import Input from '../primitives/Input';
import {
    addItem, editItem, selectEditted, setEditted,
} from '../../redux/serviceSlice';

export default function MyForm() {
    const dispatch = useAppDispatch();
    const editted = useAppSelector(selectEditted);

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            service: { value: string };
            amount: { value: string };
        };
        const newService = {
            service: target.service.value,
            amount: target.amount.value,
            id: nanoid(),
        };

        if (editted) {
            dispatch(editItem(newService));
            return;
        }
        dispatch(addItem(newService));
        dispatch(setEditted(null));
    };

    return (
        <Form mb={4} onSubmit={onSubmit}>
            <Flex gap='10px' justifyContent='center'>
                <Input
                    name='service'
                    variant='input'
                    bg='form'
                    required
                    defaultValue={editted ? editted.service : ''}
                />
                <Input
                    name='amount'
                    variant='input'
                    bg='form'
                    required
                    defaultValue={editted ? editted.amount : ''}
                />
                <Button variant='boxButton' bg='form' type='submit'>
                    Save
                </Button>
            </Flex>
        </Form>
    );
}
