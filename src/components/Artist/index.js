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
    width: 125,
    height: 125,
  },
});

function Artist(props) {
  const { classes, image, name, rank } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        title={name}
        image={image}
      />
      <CardContent>
        <Grid container spacing={16}>
          <Grid item>
            <Typography variant="display2">
              {rank}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="headline">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default withStyles(styles)(Artist);
