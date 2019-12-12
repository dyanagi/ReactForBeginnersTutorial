import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';


export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>Welcome!</Typography>
        </Container>
      </React.Fragment>
    );
  }
}
