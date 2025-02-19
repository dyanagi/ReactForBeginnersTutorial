import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

class Nav extends Component {
  render () {
    const classes = this.props.classes;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}
                      color="inherit" aria-label="menu">
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Nav)

