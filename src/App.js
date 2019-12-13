import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import './App.css'
import Gallery from './components/Gallery'
import Nav from './components/Nav'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <CssBaseline />
        <Container maxWidth="xl">
          {/*<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>*/}
            <Gallery />
          {/*</Typography>*/}

        </Container>
      </React.Fragment>
    )
  }
}

export default App
