import { FC, useMemo, useState } from "react"
import { Greet1 } from "../../wailsjs/go/main/App";
import logo from '../assets/images/logo-universal.png';
import Button from '@mui/material/Button';

const Page0: FC = () => {
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState('');
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => {
    setResultText(result)
  };

  const greet = () => {
    console.log(12312)
    Greet1(name).then(updateResultText);
  }

  const [count, setCount] = useState(0)
  const add = useMemo(() => count + 1, [count])
  console.log(12314)
  return (
    <div>
      <div>
        点击次数: {count}
        <br />
        次数加一: {add}
        <Button
          variant="contained"
          onClick={() => { setCount(count + 1) }}>
          Hello World
        </Button>
        {/* <button onClick={() => { setCount(count + 1) }}>点我</button> */}
      </div>
      {/* <img src={logo} id="logo" alt="logo" /> */}
      <div id="result" className="result">{resultText}</div>
      <div id="input" className="input-box">
        <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text" />
        <button className="btn" onClick={greet}>Greet</button>
      </div>
    </div>
  )
}
export default Page0
