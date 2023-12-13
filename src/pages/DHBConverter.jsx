import { Card, Typography } from "@mui/material"
import { CardLine } from "../components/CardLine"
import { useState } from "react"

const initialState = {
    decimal: {
        value: ''
    },
    hex: {
        value: ''
    },
    binary: {
        value: ''
    }
}

export const DHBConverter = () => {
    const [decimal, setDecimal] = useState('')
    const [hex, setHex] = useState('')
    const [binary, setBinary] = useState('')
    const setters = { decimal: { val: decimal, func: setDecimal }, hex: { val: hex, func: setHex }, binary: { val: binary, func: setBinary } }

    const updateProvision = (topic, event, oldValue) => {
        let newValue = event.target.value
        let numeric
        switch (topic) {
                            case 'decimal':
                                numeric = parseInt(newValue)
                                break;
    
                            case 'hex':
                                numeric = parseInt(newValue, 16)
    
                                break;
    
                            case 'binary':
                                numeric = parseInt(newValue, 2)
                                break;
                        }

            if (numeric) {
                for (let e of Object.keys(setters)) {
                    switch (e) {
                        case 'decimal':
                            setDecimal(numeric)
                            break;

                        case 'hex':
                            setHex(numeric.toString(16).toUpperCase())

                            break;

                        case 'binary':
                            setBinary(numeric.toString(2))
                            break;
                    }
                }
                console.log(numeric)
            
        } else {
            setDecimal('')
            setHex('')
            setBinary('')
        }




    }

    return <Card variant="outlined" sx={{ width : 'inherit', minWidth: 350, minHeight: 200, padding: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', margin:2 }}>
        <Typography variant="h4" align="center" sx={{fontFamily : 'Mina', margin:1}} >DHB Converter</Typography>
        <CardLine title={'decimal'} val={decimal} updateVal={updateProvision} />
        <CardLine title={'hex'} val={hex} updateVal={updateProvision} />
        <CardLine title={'binary'} val={binary} updateVal={updateProvision} />
    </Card>
}