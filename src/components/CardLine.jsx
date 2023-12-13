import { Box, Typography, TextField } from "@mui/material"

export const CardLine = ({title, val, updateVal, updateValDel}) => {
    return (
        <TextField label={title} variant="outlined" sx={{width: 'inherit', mt:1, mb:1}} value={val} 
        onChange ={e=>updateVal(title, e, val)}
        // onKeyDown={e=>updateVal(title, e, val)}
        />
    )
}