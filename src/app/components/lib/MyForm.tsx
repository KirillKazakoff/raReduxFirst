import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { changeInput, selectInputs } from '../../redux/inputSlice';
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
    const input = useAppSelector(selectInputs);

    const onChange = (e: React.SyntheticEvent) => {
        const target = e.target as typeof e.target & { value: string; name: string };
        const changedInput = { name: target.name, value: target.value };

        dispatch(changeInput(changedInput));
    };

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

        // target.service.value = '';
        // target.amount.value = '';

        if (editted) {
            newService.id = editted.id;
            dispatch(editItem(newService));
            dispatch(setEditted(null));
            return;
        }

        dispatch(addItem(newService));
    };

    return (
        <Form mb={4} onSubmit={onSubmit}>
            <Flex gap='10px' justifyContent='center'>
                <Input
                    name='service'
                    variant='input'
                    bg='form'
                    required
                    value={input[0].value}
                    onChange={onChange}
                />
                <Input
                    name='amount'
                    variant='input'
                    bg='form'
                    required
                    value={input[1].value}
                    onChange={onChange}
                    type='text'
                />
                <Button variant='boxButton' bg='form' type='submit'>
                    Save
                </Button>
            </Flex>
        </Form>
    );
}
