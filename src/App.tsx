import "./styles.css";
import {useState} from "react"
import axios from "./axios"
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button, TextareaAutosize} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';


export default function App() {
  const [input, setInput] = useState("");
  const [translate, setTranslate] = useState("")
  const [loading, setLoading] = useState(false);

  const sendData = async() => {
    setLoading(true);
    axios.post('/translate/result', {
      "translate": input,
      "idioma": "es-en"

    }).then((response) => {
      setLoading(false);
     setTranslate(response.data.translations[0].translation)     
    });
   
  };

  const cleanData = () => {
    setInput("")
    setTranslate("")
  }

  return (
    <div className="App">
      <h1>IBM Translate</h1>
      <div className="container">
        
      <div className="card">
      <TextareaAutosize
       className="area"
      rowsMax={8}
      aria-label="maximum height"
      placeholder="Type a text ..."
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
      value={input} onChange={event => setInput(event.target.value)}
    />
      </div>
      <div className="command">
      <Button
        className="button"
        variant="contained"
        color="secondary"
        onClick={sendData}
        startIcon={<SendIcon />}
      >
        Send
      </Button>
      
      {loading && (
           <CircularProgress className="spinner" size={68} />
        )} 
   
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
      <TextareaAutosize
      rowsMax={8}
      className="area"
      aria-label="maximum height"
      placeholder="Answer"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
          value={translate} onChange={event => setTranslate(event.target.value)}
    />
      </div>
      </div>
      
    
<br/>
   
    </div>
  );
}
