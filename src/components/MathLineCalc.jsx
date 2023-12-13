import { Typography,Card } from '@mui/material';
import { ExpLine } from './ExpLine';

// import { Select } from '@mui/base/Select';
// import { Option } from '@mui/base/Option';

import { useState } from 'react';

export const MathLineCalc = () => {

    const [precision, setPrecision] = useState(2)
    
    return <Card variant="outlined" sx={{width: 'inherit', minWidth: 350, minHeight: 200, padding: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', margin:2 }}>
        <Typography variant="h4" align="center" sx={{fontFamily : 'Mina', margin:1}} >Math Line</Typography>
        
        {/* <Select defaultValue={2} >
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
          <Option value={5}>5</Option>
        </Select> */}

        <ExpLine precision={precision}/>
        <ExpLine precision={precision}/>
        <ExpLine precision={precision}/>
    </Card>

    
}