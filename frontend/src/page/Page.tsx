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
import { request } from '../../wailsjs/go/models';
import { Action } from "../../wailsjs/go/proxy/Proxy"

export const Page: FC = () => {

  const [method, setMethod] = useState<string>("GET")
  const [url, setUrl] = useState("")

  const exec = async () => {
    console.log(url)
    const r = await Action(new request.Options({
      method: method,
      url: url
    }))
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
            value={method}
            label="TYPE"
            onChange={(event: SelectChangeEvent) => {
              console.log(event)
              setMethod(event.target.value)
            }}
          >
            <MenuItem value={"GET"}>GET</MenuItem>
            <MenuItem value={"POST"}>POST</MenuItem>
            <MenuItem value={"PUT"}>PUT</MenuItem>
            <MenuItem value={"DELETE"}>DELETE</MenuItem>
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
