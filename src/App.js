import "./styles.css";
import { useState } from "react";
import axios from "./axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

export default function App() {
  const [input, setInput] = useState("");
  const [translate, setTranslate] = useState("");
  const [loading, setLoading] = useState(false);

  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [idioms, setIdioms] = useState("");

  const sendData = async (idioms) => {
    setLoading(true);
    axios
      .post("/translate/result", {
        words: input,
        idiom: idioms,
      })
      .then((response) => {
        setLoading(false);
        setTranslate(response.data.translations[0].translation);
      });
  };

  const cleanData = () => {
    setInput("");
    setTranslate("");
  };

  const detectedIdiom = () => {
    base == target ? setTranslate(input) : (setIdioms(base + "-" + target), sendData(idioms));
  };

  return (
    <div className="App">
      <h1>IBM Translate</h1>

      <div className="container">
        <div className="card">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="label-tras">Idiom</InputLabel>
              <Select
                labelId="select-label-tras"
                id="select-tras"
                value={base}
                label="Idiom"
                onChange={(event) => {
                  setBase(event.target.value);
                }}
              >
                <MenuItem value={"es"}>Español</MenuItem>
                <MenuItem value={"en"}>Ingles</MenuItem>
                <MenuItem value={"fr"}>Frances</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextareaAutosize
            className="area"
            rowsMax={8}
            aria-label="maximum height"
            placeholder="Type a text ..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        <div className="command">
          <Button
            className="button"
            variant="contained"
            color="secondary"
            onClick={detectedIdiom}
            startIcon={<SendIcon />}
          >
            Send
          </Button>

          {loading && <CircularProgress className="spinner" size={68} />}

          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={cleanData}
            startIcon={<DeleteIcon />}
          >
            Clean
          </Button>
        </div>
        <div className="card">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="label">Idiom</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={target}
                label="Idiom"
                onChange={(event) => {
                  setTarget(event.target.value);
                }}
              >
                <MenuItem value={"es"}>Español</MenuItem>
                <MenuItem value={"en"}>Ingles</MenuItem>
                <MenuItem value={"fr"}>Frances</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextareaAutosize
            rowsMax={8}
            className="area"
            aria-label="maximum height"
            placeholder="Result"
            value={translate}
            onChange={(event) => setTranslate(event.target.value)}
          />
        </div>
      </div>

      <br />
    </div>
  );
}
