import {
  Button,
  Box,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  type SelectChangeEvent
} from '@mui/material';
import { ChangeEvent, FC, useState } from "react"
import { Exec } from "../../wailsjs/go/proxy/Proxy"

export const Page: FC = () => {

  const [age, setAge] = useState("10")
  const [url, setUrl] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event)
    setAge(event.target.value)
  }

  const exec = async () => {
    console.log(url)
    const r = await Exec(url)
    console.log(r)
  }

  return (
    <div>
      <Box
        sx={{
          minWidth: 400,
          marginTop: 1.8,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <FormControl
          fullWidth
          sx={{
            width: 120
          }}
        >
          <InputLabel
            id="type-select-label"
          >
            TYPE
          </InputLabel>
          <Select
            sx={{
              minWidth: 120,
            }}
            size="small"
            labelId="type-select-label"
            id="type-select"
            value={age}
            label="TYPE"
            onChange={handleChange}
          >
            <MenuItem value={10}>GET</MenuItem>
            <MenuItem value={20}>POST</MenuItem>
            <MenuItem value={30}>PUT</MenuItem>
            <MenuItem value={40}>DELETE</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{
            minWidth: 480,
            margin: "0 5px"
          }}
          size="small"
          id="outlined-basic"
          label="URL"
          variant="outlined"
          value={url}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUrl(event.target.value)
          }}
        />
        <Button
          variant="contained"
          onClick={exec}
        >
          Launch
        </Button>
      </Box>
    </div>
  )
}
