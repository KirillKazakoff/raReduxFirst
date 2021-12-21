import '../css/defaultStyle.css';

import React from 'react';
import { Box } from './components/primitives/Box';
import MyForm from './components/lib/MyForm';
import MyTable from './components/lib/MyTable';

export default function App() {
    return (
        <Box variant='layout'>
            <MyForm />
            <MyTable />
        </Box>
    );
}
