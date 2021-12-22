import React, { useState } from 'react';
import { Flex } from '../primitives/Flex';
import Input from '../primitives/Input';
import { Text } from '../primitives/Text';

import { useAppDispatch } from '../../data/initContent';
import { changeInput } from '../../redux/formSlice';

export default function Filter() {
    const dispatch = useAppDispatch();
    const [inputState, setInputState] = useState('');

    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setInputState(e.currentTarget.value);
    };

    return (
        <Flex
            width={1 / 2}
            mx='auto'
            justifyContent='center'
            mt={4}
            gap='15px'
            alignItems='center'
        >
            <Text>Input filter here</Text>
            <Input
                name='filter' variant='input' bg='form'
                onChange={onChange}
            />
        </Flex>
    );
}
