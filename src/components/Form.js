import {db} from '../firebase-config';
import {makeStyles} from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Icon
} from '@material-ui/core';

const Form = ({setTodos, todos, inputText, setInputText, setStatus, status, traerDesdeFirebase}) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    input: {
      backgroundColor: 'white',
      width: '95%'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '94%',
      backgroundColor: 'white'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(1),
      width:'95%'
    }
  }));

  const classes = useStyles();

  const submitTodoHandler = e => {
    e.preventDefault();
    guardarEnFirebase({
      text: inputText,
      completed: false,
      id: Math.random() * 10000
    })
    setTodos([...todos, {
      text: inputText,
      completed: false,
      id: Math.random() * 10000
    }])
    setInputText('')
  }

  const inputTextHandler = e => {
    setInputText(e.target.value);
  }

  const statusHandler = event => {
    setStatus(event.target.value);
  }

  const guardarEnFirebase = (tarea) => {
    db.collection("todos").add(tarea)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }
console.log('ajsdnlsnd')
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item sm={4} xs={12}>
          <div className={classes.root}  autoComplete="off">
            <TextField
              className={classes.input}
              id="filled-full-width"
              label="Tarea"
              value={inputText}
              onChange={inputTextHandler}
              placeholder="Ingresa una tarea"
              fullWidth
              margin="normal"
              style={{
              margin: 8
            }}
              InputLabelProps={{
              shrink: true
            }}
              variant="filled"
            />
          </div>
        </Grid>
        <Grid item sm={1} xs={12}>
          <Button
            disabled={inputText.trim().length === 0}
            onClick={submitTodoHandler}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            >
            Send
          </Button>
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={statusHandler}
              value={status}
            >
              <MenuItem value="all">Todas</MenuItem>
              <MenuItem value="completed">Completas</MenuItem>
              <MenuItem value="uncompleted">Incompletas</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
    </div>
  );
};

export default Form;