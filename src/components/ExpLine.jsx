import { Box, TextField } from "@mui/material"
import { useEffect, useState } from "react"

const math = require('mathjs');

export const ExpLine = ({precision}) => {
    const [exp, setExp] = useState('')
    const [res, setRes] = useState('')

    const updateVal = (e) => {
        setExp(e.target.value)

        if (!e.target.value.length) setRes('')
    }

    useEffect(()=>{
        let temp 

        try {
            temp = math.evaluate(exp)
            setRes(Number.isInteger(temp)? temp : temp.toFixed(precision))
        } catch (err){
            // console.log(err)
        }
    }, [exp])

    return <Box sx={{display: 'flex'}}>
        <TextField label={'Expression'} variant="outlined" sx={{ width: 'inherit', m: 1, flexGrow: 1 }} value={exp} onChange={e => updateVal(e)} />

        <TextField label={'Result'} variant="outlined" InputProps={{ readOnly: true }} sx={{ width: 'inherit', m: 1, width: 100 }} value={res} />
    </Box>
}