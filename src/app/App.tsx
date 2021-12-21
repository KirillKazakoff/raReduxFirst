import '../css/defaultStyle.css';

import React, { useState } from 'react';
import { Box } from './components/primitives/Box';
import MyForm from './components/lib/MyForm';
import serviceList from './logic/ContentList';
import MyTable from './components/lib/MyTable';

export default function App() {
    const [services, setServices] = useState(serviceList.data);
    return (
        <Box variant='layout'>
            <MyForm />
            <MyTable />
        </Box>
    );
}
