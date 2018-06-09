import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit,
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  cover: {
    width: 200,
    height: 200,
  },
});

function Track(props) {
  const { classes, album, artist, image, name } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        title={album}
        image={image}
      />
      <CardContent>
        <Grid container direction="column" justify="space-between" spacing={8}>
          <Grid item>
            <Typography variant="headline">
              {name}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {artist}
            </Typography>
          </Grid>
          <Grid item>test</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

Track.propTypes = {
  classes: PropTypes.object.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Track);
