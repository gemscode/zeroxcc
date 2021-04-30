import './Tile.css';
import Editor from '../Editor';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Icon } from '@iconify/react';
import downloadIcon from '@iconify-icons/mdi/file-download-outline';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '30ch',
    },
  }));

function ImportTile({title}) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      importLink: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        //ReactDOM.findDOMNode('aceEditor').value = 'hello from change';
        setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <div className="tile">
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-import">Import</InputLabel>
          <Input
            id="standard-adornment-import"
            value={values.import}
            onChange={handleChange('import')}
            startAdornment={<InputAdornment position="start" style={{marginRight:"1px"}}><Icon icon={downloadIcon} width="20" height="20" color="grey" style={{marginRight:"5px"}}/> https://</InputAdornment>}
            autoFocus
          />
        </FormControl>
        <Editor collapse='false'/>
    </div>
  );
}

export default ImportTile;