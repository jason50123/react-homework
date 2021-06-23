import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { ButtonGroup } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #333, #999)",
        border: 0,
        borderRadius: 15,
        color: "white",
        padding: "5px 30px",
        marginBottom: 10,
    },
});

const outerTheme = createMuiTheme({
    palette: {
        main: green[400],
    },
    secondary: {
        main: orange[400],
    },
});

function ButtonStyle() {
    const classes = useStyles();
    return <Button className={classes.root}>按鈕</Button>;
}

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
            }
            label="CheckBox測試"
        />
    );
}

function App() {
    return (
        <ThemeProvider theme={outerTheme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">News</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className="App">
                <header className="App-header">
                    <Typography variant="h4">歡迎來到MUI</Typography>
                    <Typography variant="subtitle1">Material-UI</Typography>
                    <ButtonStyle />
                    <TextField
                        label="Text"
                        variant="filled"
                        color="primary"
                        type="email"
                        placeholder="test@test.com"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <CheckboxExample />
                    <ButtonGroup>
                        <Button
                            startIcon={<SaveIcon />}
                            size="large"
                            onClick={() => {
                                alert("clicked");
                            }}
                            variant="contained"
                            color="primary"
                        >
                            save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </ButtonGroup>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
