import './App.css';
import { DHBConverter} from './pages/DHBConverter'
import { Card, Typography, Box } from "@mui/material"
import { MathLineCalc } from './components/MathLineCalc';

function App() {
  return (
    <div className="App">
      <Box sx={{width : 500}}>
      <DHBConverter/>
      <MathLineCalc/>
      </Box>
    </div>
  );
}

export default App;
