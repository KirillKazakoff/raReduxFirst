import React from 'react';
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit';
import { changeInput, refreshInputs } from '../../redux/inputSlice';
import { selectItems, removeItem, setEditted } from '../../redux/serviceSlice';
import { useAppDispatch, useAppSelector } from '../../data/initContent';
import { Flex } from '../primitives/Flex';
import { Text } from '../primitives/Text';
import Ul from '../primitives/Ul';
import Button from '../primitives/Button';

export default function MyTable() {
    const items = useAppSelector(selectItems);
    const dispatch = useAppDispatch();

    const onRemove = (e: React.SyntheticEvent) => {
        const { id } = e.currentTarget;
        dispatch(removeItem(id));
    };

    const onEdit = (e: React.SyntheticEvent) => {
        const { id } = e.currentTarget;
        const item = items.find((i) => i.id === id);
        if (!item) return;
        dispatch(setEditted(item));

        console.log(item);
        const inputs = [
            { name: 'service', value: item.service },
            { name: 'amount', value: item.amount },
        ];
        dispatch(refreshInputs(inputs));
    };

    const servicesHtml = items.map((item: any) => (
        <Flex key={item.id} gap='40px' alignItems='center'>
            <Flex gap='10px'>
                <Text>{item.service}</Text>
                <Text>{item.amount}</Text>
            </Flex>

            <Flex gap='10px'>
                <Button
                    variant='cancel' fontSize='18px' onClick={onRemove}
                    id={item.id}
                >
                    X
                </Button>
                <Button onClick={onEdit} id={item.id}>
                    <AiFillEdit />
                </Button>
            </Flex>
        </Flex>
    ));

    return (
        <Ul
            bg='tomato'
            flexDirection='column'
            variant='primary'
            rowGap='10px'
            borderColor={editted ? 'formChanged' : 'primary'}
        >
            {servicesHtml}
        </Ul>
    );
}
