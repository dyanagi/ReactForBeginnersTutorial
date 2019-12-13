import React, { Component } from 'react'
import {
  createStyles, // tool to wrap CSS definition
  Grid,
  withStyles
} from '@material-ui/core'
import GalleryImage from './GalleryImage'

const styles = (theme) => createStyles({
  imageContainer: {
    margin: '0 2em'
  }
})

const filenames = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
]

class Gallery extends Component {
  render () {
    console.log('PROPS', this.props)
    const classes = this.props.classes

    return (
      <Grid container spacing={8} className={classes.imageContainer}>
        {
          filenames.map((filename, index) => {
            return (
              <GalleryImage key={`${filename}-${index}`} filename={filename} />
            )
          })
        }
      </Grid>
    )
  }
}

export default withStyles(styles)(Gallery)
