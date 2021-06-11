import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}  
        Randy Website
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        <font face="標楷體">分組成員</font>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'B0829053 張耀倫'}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'B0829048 李孟嘉'}
        </Typography>
      </Container>
      <img src="https://media1.tenor.com/images/bd8c0e51c2f681fe0c81fc1782ed3cf1/tenor.gif?itemid=14788698" with="640" heigh="480" alt="gif"></img>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright/>
        </Container>
      </footer>
    </div>
  );
}