import React from 'react';
import { selectItems } from '../../redux-toolkit-with/serviceSlice';
import { useAppSelector, ContentType } from '../../data/initContent';
import { Flex } from '../primitives/Flex';
import { BoxProps } from '../primitives/rebassTypes';
import { Text } from '../primitives/Text';
import Ul from '../primitives/Ul';

type MyTableProps = { contentState: ContentType[] } & BoxProps;

export default function MyTable({ contentState }: MyTableProps) {
    const items = useAppSelector(selectItems);
    console.log(items);

    const servicesHtml = items.map((item: any) => (
        <Flex key={item.id} gap='10px'>
            <Text>{item.service}</Text>
            <Text>{item.amount}</Text>
        </Flex>
    ));

    return (
        <Ul bg='tomato' flexDirection='column' variant='primary'>
            {servicesHtml}
        </Ul>
    );
}
