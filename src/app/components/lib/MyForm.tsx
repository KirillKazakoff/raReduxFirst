import React, { Dispatch, SetStateAction } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addService } from '../../redux/actions';
import { ContentType } from '../../data/initContent';
import Button from '../primitives/Button';
import { Flex } from '../primitives/Flex';
import Form from '../primitives/Form';
import Input from '../primitives/Input';

type MyFormProps = { setServices: Dispatch<SetStateAction<ContentType[]>> };

export default function MyForm({ setServices }: MyFormProps) {
    const dispatch = useDispatch();

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            service: { value: string };
            amount: { value: string };
        };
        const name = target.service.value;
        const price = target.amount.value;

        dispatch(addService(name, price));
    };
    // const onSubmit = (e: React.SyntheticEvent) => {
    //     e.preventDefault();

    //     const target = e.target as typeof e.target & {
    //         service: { value: string };
    //         amount: { value: string };
    //     };

    //     const newService = {
    //         service: target.service.value,
    //         amount: target.amount.value,
    //         id: nanoid(),
    //     };

    //     setServices((prevState) => [...prevState, newService]);
    // };

    return (
        <Form mb={4} onSubmit={onSubmit}>
            <Flex gap='10px' justifyContent='center'>
                <Input
                    name='service' variant='input' bg='form'
                    required
                />
                <Input
                    name='amount' variant='input' bg='form'
                    required
                />
                <Button variant='boxButton' bg='form' type='submit'>
                    Save
                </Button>
            </Flex>
        </Form>
    );
}
