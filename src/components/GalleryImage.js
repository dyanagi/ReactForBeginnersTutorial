import React, { Component } from 'react'
import {
  createStyles, // tool to wrap CSS definition
  Grid,
  withStyles
} from '@material-ui/core'

const styles = (theme) => createStyles({
  galleryImage: {
    margin: '0 2em'
  }
})

class GalleryImage extends Component {
  render () {
    console.log('PROPS', this.props)

    return (
      <Grid item>
        <img src={this.props.filename} alt="Image not available"
             height="400px" />
      </Grid>
    )
  }
}

export default withStyles(styles)(GalleryImage)

